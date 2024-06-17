const {enviarEmailServices} = require('../services/mailServices.js');
const Mail = require('../services/entities/mailEntity.js');

const enviarEmail = (req, res) => {
    let mailInfo = new Mail(req.body.destino, req.body.asunto, req.body.contenido)
    let result = enviarEmailServices(mailInfo);
    res.json(result);
};

module.exports = {
    enviarEmail
};