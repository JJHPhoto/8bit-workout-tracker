const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: Date,
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        duration: Number,
        weight: Number,
        reps: Number,
        set: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});

const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;

// Kat's
//const workoutSchema = new Schema({
//   date: {
//     type: Date,
//     default: Date.now()
// },
// exercises: [{
//     name:
//     {
//       type: String,
//       trim: true,
//       required: “Enter your exercise”
//     },
//     type:
//     {
//       type: String,
//       trim: true,
//       required: “Enter the type of your exercise”
//     },
//     weight:
//     {
//       type: Number,
//       trim: true,
//     },
//     sets:
//     {
//       type: Number,
//       trim: true,
//     },
//     reps:
//     {
//       type: Number,
//       trim: true,
//     },
//     duration:
//     {
//       type: Number,
//       trim: true,
//       required: “Enter the the duration”
//     },
//     distance:
//     {
//       type: Number,
//       trim: true
//     }
// }],
// });
