/** @format */

const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
    deleteThought,
  //   postReaction,
  //   deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:userId").post(createThought);

module.exports = router;
