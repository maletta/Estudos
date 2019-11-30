const multer  = require('multer');
const path = require('path');// biblioteca nativa pra lidar com caminhos (windows, linux, mac)

//objeto de configuração do multer
module.exports = {

    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // definir nome do arquivo recebido
        filename: function(req, file, callback){
            callback(null, file.originalname)
        }
    })
}