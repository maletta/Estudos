const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const CommentController = require('./controllers/CommentController');
const routes = new express.Router();
const upload = new multer(uploadConfig);



routes.get('/posts', PostController.index);

// adiciono o middleware multer para fazer o parser do body da requesição
// para json e também para ajudar no upload do arquivo 
// image é o nome do parâmetro que contém o arquivo de imagem
routes.post('/posts', upload.single('image'), PostController.store);

// upload.none() para interpretar o body da requisição e transformar em json
routes.post('/posts/:id/like',  upload.none(), LikeController.store);

routes.get('/posts/:id/comment', upload.none(), CommentController.store);

routes.post('/posts/:id/comment', upload.none(), CommentController.index);

module.exports = routes;