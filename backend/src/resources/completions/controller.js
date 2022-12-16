const asyncHandler = require("express-async-handler"),
  { ObjectId } = require("mongoose").Types,
  DAL = require("../../common/dal"),
  { CourseCompletionModel } = require("./model"),
  ccDAL = DAL(courseCompletion);

const courseCompletion = asyncHandler(async (req, res) => {
  const userId = req.userId,
    coursesCompleted = await ccDAL.getOne({ completedBy: ObjectId(userId) });
  return res.status(courseCompletion ? 200 : 400).json(coursesCompleted || {});
});
