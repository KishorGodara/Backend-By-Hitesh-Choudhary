import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      tyoe: String,
      required: true,
    },
    complete: {
      tupe: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
