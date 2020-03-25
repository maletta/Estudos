const Post = require('../models/Post');

// ações como busca, gravar são assíncronas(Promisses)
module.exports = {
    // middleware
    async index(req, res) {
        // listar todos os posts ordenados pelo mais recente
        let posts = {};
        if (req.params) {
            posts = await Post.find({_id:req.params.id});
        } else {
            posts = await Post.find().sort('-createdAt');
        } 
        return res.json(posts);
    },
    async store(req, res) {
        const { author, description, place } = req.body;
        const { filename: image } = req.file;
        const media = image;

        // vai esperar o await por causa do sync
        const post = await Post.create({
            author,
            description,
            place,
            media
        });

        return res.json(post);
    },

}