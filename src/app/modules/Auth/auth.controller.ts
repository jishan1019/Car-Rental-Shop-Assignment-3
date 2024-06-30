import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUserFromDb(req.body);

  const { accessToken, refreshToken, user } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.node_env === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: user,
    token: accessToken,
  });
});

const createUser = catchAsync(async (req, res) => {
  const result = await AuthService.createUserIntroDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.generateNewRefreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Refresh token generate Successfully",
    data: result,
  });
});

export const AuthController = {
  loginUser,
  createUser,
  refreshToken,
};
