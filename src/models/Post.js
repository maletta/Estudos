const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        description: { type: String, required: false },
        media: { type: String, required: false },
        likes: { type: Number, required: false, default: 0 }
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);

const CommentSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        argument: { type: String, required: false },
        media: { type: String, required: false },
        answers: [AnswerSchema],
        likes: { type: Number, required: false, default: 0 }
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);

const PostSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        place: { type: String, required: true },
        description: { type: String, required: false },
        media: { type: String, required: false },
        comments: [CommentSchema],
        likes: { type: Number, required: false, default: 0 }
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);



// nomeio como Post
module.exports = mongoose.model('Post',PostSchema);
