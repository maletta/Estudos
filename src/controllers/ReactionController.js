const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        console.log(req.body)
        // console.log(req);
        
        const { author, reactions } = req.body;
        const react = await Post.update(
            {_id: req.params.id},
            {$push: { reactions: {author, reactions} } }
        );

        return res.json(react);
    },

}