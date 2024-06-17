const nodemailer = require("nodemailer");

const enviarEmailRepository = (mailInfo) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "juanovad@gmail.com",
      pass: "bjxulubgeeekmbca",
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; text-align: center;">
    <h1 style="color: #333;">Estimado Socio</h1>

    <p style="font-size: 16px; color: #333;">Gracias por ser parte de nuestros servicios de parqueadero. Aquí tienes una
        información importante:</p>

    <strong>${mailInfo.body}</strong>

    </br>
    </br>

    <p style="font-size: 16px; color: #333;">Atentamente, El equipo del Parqueadero</p>
    <img src="https://c8.alamy.com/compes/m9j7he/parking-vista-con-diferentes-coches-y-taxis-en-la-ciudad-de-silueta-de-fondo-banner-horizontal-m9j7he.jpg"
        alt="Imagen del Parqueadero" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px;">
</div>
`;

  return transporter.sendMail(
    {
      from: "<juanovad@gmail.com>",
      to: mailInfo.to,
      subject: mailInfo.subject,
      html: htmlContent,
    },
    (err, info) => {
      if (err) {
        return false;
      }
      return true;
    }
  );
};

module.exports = {
  enviarEmailRepository,
};
