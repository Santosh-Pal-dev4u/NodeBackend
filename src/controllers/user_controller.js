import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models//user_model.js";
import uploadImageonCloudinary from "../utils/cloudinary.js"
import ApiResponse from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {

  const { fullName, email, userName, password } = req.body
  console.log("email :", email)
  console.log("userName :", userName)
  console.log("fullName :", fullName)
  console.log("password :", password)

  // validation for empty field
  if (
    [fullName, userName, password, email].some((field) =>
      field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are required!")
  }

  // checking existed user in databse 
  const exitedUser = User.findOne({
    $or: [{ email }, { userName }]
  })

  if (exitedUser) {
    throw new ApiError(409, "User with email or username is already existed!")
  }

  // handling avatar and cover images

  const avatarLocalPath = req.field?.avatar[0]?.path;
  const coverLocalPath = req.field?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "avatatLocalPath not found!")
  }
  // uploading on cloudinary
  const avatar = await uploadImageonCloudinary(avatarLocalPath)
  const coverImage = await uploadImageonCloudinary(coverLocalPath)

  if (!avatar) {
    throw new ApiError(400, "avatat not found!")
  }

  // creating user 

  const user = await User.create(
    {
      fullName,
      email,
      userName: userName.toLowerCase(),
      avatar: avatar.url,
      coverImage: coverImage?.url || "",

    }
  )

  const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if (!createduser) {
    throw new ApiError(500, "server error during creating error!")
  }

  return res.status(201).json(
    new ApiResponse(200, createduser, "User Registered Successfully!")
  )

});
export { registerUser };
