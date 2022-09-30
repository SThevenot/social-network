// /** @format */

// const { Schema, model } = require("mongoose");

// const thoughtSchema = new Schema(
//   {
//     thoughtText: {
//       type: String,
//       required: true,
//       maxLength: 280,
//       minLength: 1,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     reactions: [
//       {
//         type: Schema.Types.DocumentArray,
//         ref: "reactionSchema",
//       },
//     ],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );
// thoughtSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

// const Thought = model("thought", thoughtSchema);

// module.exports = Thought;
