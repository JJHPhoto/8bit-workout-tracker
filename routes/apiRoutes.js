const router = require("express").Router();
const { workout } = require("../models");

router.get("/api/workouts", (req, res) => {
  workout
    .find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const newExercise = req.body;

  console.log(newExercise);

  workout
    .findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: newExercise,
        },
      },
      {
        new: true,
      }
    )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  workout
    .create(newWorkout)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {});

module.exports = router;
