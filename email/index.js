const trasporter = require("./config");

const sendMail = data => {
  const email = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "Status Report - Moeda",
    text: data
  };

  trasporter.sendMail(email, (error, data) => {
    if (err) {
      console.log("Erro to send email", error);
    } else {
      console.log("Message sent: ", data.response);
    }
  });
};

module.exports = {
  sendMail
};
