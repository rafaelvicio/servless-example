const nodemailerSendgrid = require("nodemailer-sendgrid");
const nodemailer = require("nodemailer");
const Handlebars = require("handlebars");

const { MAILER_API_KEY } = process.env;

Handlebars.registerHelper("exec", function exec(options) {
  const { root } = options.data;
  const text = options.fn(this);
  return Handlebars.compile(text)({ ...root });
});

const transportSettings = nodemailerSendgrid({ apiKey: MAILER_API_KEY });

const trasporter = nodemailer.createTransport(transportSettings);

export default trasporter;
