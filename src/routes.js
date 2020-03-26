const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const ReactionController = require('./controllers/ReactionController');
const CommentController = require('./controllers/CommentController');
const routes = new express.Router();
const upload = new multer(uploadConfig);



routes.get('/posts', PostController.index); // busca post no geral

routes.get('/posts/:id', upload.none(), PostController.index); //busca post por id
// adiciono o middleware multer para fazer o parser do body da requesição
// para json e também para ajudar no upload do arquivo  
// image é o nome do parâmetro que contém o arquivo de imagem
routes.post('/posts', upload.single('image'), PostController.store);

// upload.none() para interpretar o body da requisição e transformar em json
routes.post('/posts/:id/reactions',  upload.none(), ReactionController.store);

routes.get('/posts/:id/comments', upload.none(), CommentController.index);

routes.post('/posts/:id/comments', upload.none(), CommentController.store);




module.exports = routes;