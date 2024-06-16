import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req, res) => {
  const result = await AuthService.createUserIntroDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is create successfully",
    data: result,
  });
});

export const AuthController = {
  createUser,
};
