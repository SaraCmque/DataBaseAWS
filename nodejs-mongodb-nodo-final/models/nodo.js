//relaciones 1 a n

const mongoose = require("mongoose"); //uses library mongoose to interact with database MongoDB
const { Schema } = mongoose;
//1 profesor-curso
const TeacherSchema = new mongoose.Schema({
  _id: String,
  full_name: String,
  email: String,
  phone_number: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  _id: Number,
  nombre: String,
  URL: String,
  price: Number,
  teacherID: { type: Schema.Types.ObjectId, ref: "Teacher" },
  year: String,
  semester: Number,
});

const ForumSchema = new mongoose.Schema({
  _id: Number,
  forum_name: String,
  description: String,
  creation_date: Date,
  ending_date: Date,
  teacherID: { type: Schema.Types.ObjectId, ref: "Teacher" },
});

const MaterialSchema = new mongoose.Schema({
  teacherID: { type: Schema.Types.ObjectId, ref: "Teacher" },
  archive_name: String,
  description: String,
  creation_date: Date,
  score: Number,
  courseID: Number,
});

const TaskSchema = new mongoose.Schema({
  teacherID: { type: Schema.Types.ObjectId, ref: "Teacher" },
  courseID: { type: Schema.Types.ObjectId, ref: "Course" },
  task_name: String,
  description: String,
  creation_date: Date,
  delivery_date: Date,
  score: Number,
  archive: String,
});

const StudentSchema = new mongoose.Schema({
  _id: Number,
  full_name: String,
  email: String,
  phone_number: String,
});

const MessageSchema = new mongoose.Schema({
  message_name: String,
  description: String,
  foroID: { type: Schema.Types.ObjectId, ref: "Forum" },
});

const Student_messageSchema = new mongoose.Schema({
  student: { type: Schema.Types.ObjectId, ref: "Student" },
  message: { type: Schema.Types.ObjectId, ref: "Message" },
});

const Teacher_messageSchema = new mongoose.Schema({
  teacherID: { type: Schema.Types.ObjectId, ref: "Teacher" },
  messageID: { type: Schema.Types.ObjectId, ref: "Message" },
});

const Teacher = mongoose.model("teachers", TeacherSchema);
const Course = mongoose.model("courses", CourseSchema);
const Forum = mongoose.model("forums", ForumSchema);
const Material = mongoose.model("materials", MaterialSchema);
const Task = mongoose.model("tasks", TaskSchema);
const Student = mongoose.model("students", StudentSchema);
const Message = mongoose.model("messages", MessageSchema);
const Student_messages = mongoose.model(
  "student_messages",
  Student_messageSchema
);
const Teacher_messages = mongoose.model(
  "teacher_messages",
  Teacher_messageSchema
);

module.exports = {
  Teacher,
  Course,
  Forum,
  Material,
  Task,
  Student,
  Message,
  Student_messages,
  Teacher_messages,
};
