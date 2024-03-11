import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models//user_model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import ApiResponse from '../utils/ApiResponse.js';
import { upload } from '../middlewares/multer_middleware.js';


const registerUser = asyncHandler(async (req, res) => {

  const { fullname, email, username, password } = req.body
  console.log("email :", email)
  console.log("userName :", username)
  console.log("fullName :", fullname)
  console.log("password :", password)

  // validation for empty field
  if (
    [fullname, username, password, email].some((field) =>
      field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are required!")
  }

  // checking existed user in databse 
  const exitedUser = await User.findOne({
    $or: [{ email }, { username }]
  })

  if (exitedUser) {
    throw new ApiError(409, "User with email or username is already existed!")
  }

  // handling avatar and cover images
  // const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverLocalPath = req.files?.coverImage[0]?.path;
  // coverLocalPath = req.files?.coverImage?.[0]?.path;

  // handling avatar and cover images
  // const avatarLocalPath = req.files?.avatar[0]?.path;

  // let coverImageLocalPath;
  // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
  //     coverImageLocalPath = req.files.coverImage[0].path;
  // }

  // console.log("avatarLocalPath :", avatarLocalPath);
  // console.log("req.files:", req.files);
  // console.log("coverLocalPath :", coverImageLocalPath);


  // if (!avatarLocalPath) {
  //   throw new ApiError(400, "avatarLocalPath not found!");
  // }
  // if (!coverImageLocalPath) {
  //   throw new ApiError(400, "coverImageLocalPath not found!");
  // }

  // uploading on cloudinary
  // const avatar = await uploadOnCloudinary(avatarLocalPath)
  // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  // console.log("coverImage :", coverImage)
  // console.log("avatar :", avatar)

  // if (!avatar) {
  //   throw new ApiError(400, "avatar not found!")
  // }
  // if (!coverImage) {
  //   throw new ApiError(400, "coverImage not found!")
  // }

  // creating user 

  const user = await User.create(
    {
      fullname,
      email,
      username: username.toLowerCase(),
      // avatar: avatar?.url || "",
      // coverImage: coverImage?.url || "",
      password,

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
