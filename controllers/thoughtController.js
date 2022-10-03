/** @format */

const { Reaction, Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.json(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "no thought with that id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    console.log("You are adding a thought");
    console.log(req.body);
    Thought.create(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { thoughts: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "error with user id" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    console.log("updating thought");
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "could not find thought with this id" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "no thought with that id found" })
          : res.json({ message: "thought deleted" })
      )
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  postReaction(req, res) {
    console.log("you are adding a reaction");
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "thought not found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "no thoughts with this Id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
