const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name",
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
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

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;

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
