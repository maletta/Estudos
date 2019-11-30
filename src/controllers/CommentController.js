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
        const {author, argument } = req.body;
        
        const comment = await Post.create( author, argument);

        return res.json(comment);
    },  

}