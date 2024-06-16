import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CarService } from "./car.service";

const getAllCar = catchAsync(async (req, res) => {
  const result = await CarService.getAllCarFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cars retrieved successfully",
    data: result,
  });
});

const getSingleCar = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await CarService.getSingleCarFromDB(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "A Car retrieved successfully",
    data: result,
  });
});

const createCar = catchAsync(async (req, res) => {
  const result = await CarService.createCarIntroDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Car created successfully",
    data: result,
  });
});

const updateCar = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await CarService.updateCarIntroDb(_id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car updated successfully",
    data: result,
  });
});

const deleteCar = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await CarService.deleteSingleCarFromDB(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Deleted successfully",
    data: result,
  });
});

export const CarController = {
  getAllCar,
  getSingleCar,
  createCar,
  updateCar,
  deleteCar,
};
