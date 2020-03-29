const Post = require('../models/Post');

// ações como busca, gravar são assíncronas(Promisses)
module.exports = {
    // middleware
    async index(req, res) {
        // listar todos os posts ordenados pelo mais recente
        const posts = await Post.find().sort('-createdAt');

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
        // console.log(req.body);

        return res.json(post);
    },
}