const {enviarEmailRepository}= require('../repository/mailRepository.js');

const enviarEmailServices = (mailInfo) => {
    enviarEmailRepository(mailInfo);
    return {
        status: true,
        message: "correo enviado exitosamente"
    }
};
module.exports = {
    enviarEmailServices
};