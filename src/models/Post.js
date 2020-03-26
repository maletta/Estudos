const mongoose = require('mongoose');


const ReactionSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        reactions: { type: String, enum:['like','dislike','lol','love','pride'], required: false}
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);

const AnswerSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        description: { type: String, required: false },
        media: { type: String, required: false },
        reactions : [ReactionSchema]
        // reactions: { type: Number, required: false, default: 0 }
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
        reactions: [ReactionSchema]
        // reactions: { type: Number, required: false, default: 0 }
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);

const PostSchema = new mongoose.Schema(
    {
        author: { type: String, required: false },
        place: { type: String, required: false },
        description: { type: String, required: false },
        media: { type: String, required: false },
        comments: [CommentSchema],
        reactions: [ReactionSchema]
        // reactions: { type: Number, required: false, default: 0 }
    },
    {
        // criará campos createdAt e UpdatedAt
        timestamps: true,
    }
);



// nomeio como Post
module.exports = mongoose.model('Post',PostSchema);
