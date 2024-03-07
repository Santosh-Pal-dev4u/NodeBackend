import asyncHandler from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req, res) => {
   res.status(200).json({
    message: "madrchod node backend"
  });
});

export { registerUser };
