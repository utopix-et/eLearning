
const {CourseModel, SectionModel, LessonModel} = require("./model");
const asyncHandler = require("express-async-handler");

const courseController = {
    getCourses: asyncHandler(async (req, res) => {
        const courses = await CourseModel.find();
        res.json(courses);
    }),
    getCourse: asyncHandler(async (req, res) => {
        const {courseId} = req.params;
        const course = await CourseModel.findById(courseId);
        res.json(course);
    }),
    createCourse: asyncHandler(async (req, res) => {
        const {title} = req.body;
        const course = await CourseModel.create({title});
        res.json(course);
    }),
    updateCourse: asyncHandler(async (req, res) => {
        const {courseId} = req.params;
        const {title} = req.body;
        const course = await CourseModel.findByIdAndUpdate(
            courseId,
            {title},
        )
    }),
    deleteCourse: asyncHandler(async (req, res) => {
        const {courseId} = req.params;
        const course = await CourseModel.findByIdAndDelete(courseId);
    }),
    getSections: asyncHandler(async (req, res) => {
        const {courseId} = req.params;
        const sections = await SectionModel.find({
            course: courseId
        });
        res.json(sections);
    }),
    getSection: asyncHandler(async (req, res) => {
        const {sectionId} = req.params;
        const section = await SectionModel.findById(sectionId);
        res.json(section);
    }),
    createSection: asyncHandler(async (req, res) => {
        const {courseId} = req.params;
        const {title} = req.body;
        const section = await SectionModel.create({
            title,
            course: courseId
        });
        res.json(section);
    }),
    updateSection: asyncHandler(async (req, res) => {
        const {sectionId} = req.params;
        const {title} = req.body;
        const section = await SectionModel.findByIdAndUpdate(sectionId, {
            title
        });
        res.json(section);
    }),
    deleteSection: asyncHandler(async (req, res) => {
        const {sectionId} = req.params;
        const section = await SectionModel.findByIdAndDelete(id);
        res.json(section);
    }),
    getLessons: asyncHandler(async (req, res) => {
        const {sectionId} = req.params;
        const lessons = await LessonModel.find({
            section: sectionId
        });
        res.json(lessons);
    }),
    getLesson: asyncHandler(async (req, res) => {
        const {lessonId} = req.params;
        const lesson = await LessonModel.findById(lessonId);
        res.json(lesson);
    }),
    createLesson: asyncHandler(async (req, res) => {
        const {sectionId} = req.params;
        const {title, videoLink, blogLink, description} = req.body;
        const lesson = await LessonModel.create({
            title,
            videoLink,
            blogLink,
            description,
            section: sectionId
        });
        res.json(lesson);
    }),
    updateLesson: asyncHandler(async (req, res) => {
        const {lessonId} = req.params;
        const {title, videoLink, blogLink, description} = req.body;
        const lesson = await LessonModel.findByIdAndUpdate(lessonId, {
            title,
            videoLink,
            blogLink,
            description
        });
        res.json(lesson);
    }),
    deleteLesson: asyncHandler(async (req, res) => {
        const {lessonId} = req.params;
        const lesson = await LessonModel.findByIdAndDelete(lessonId);
        res.json(lesson);
    })
};
module.exports = courseController;


