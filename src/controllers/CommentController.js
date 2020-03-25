const Post = require('../models/Post');

// ações como busca, gravar são assíncronas(Promisses)
module.exports =  {
    async index(req, res){
         // listar todos os comments de um post ordenados pelo mais recente
         console.log(req.params);
         const comments = Post.findById(req.params.id);   
         return res.json({...comments});
    },
    
    async store (req, res){
        console.log(req.body);
        
        const {author, argument, media, answer, reactions } = req.body;
        console.log(author, argument);
        const comment = await Post.create( author, argument);

        return res.json(comment);
    },  

}