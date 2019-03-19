"use strict";

const axios = require("axios");
const { sendMail } = require("./email");
const { sendMessage } = require("./slack");

const api = axios.create({
  baseURL: process.env.STATUS_URL,
  timeout: 10000,
  headers: { "backend-api-key": process.env.STATUS_KEY }
});

module.exports.hello = async (context, req) => {
  try {
    const data = await api.get("/health");
    context.log("O que tem aqui: ", data);
  } catch ({ response }) {
    context.log("Vou enviar email!", email);
    sendMail(response.data);
    sendMessage(response.data);
    context.log("O que tem aqui com erro: ", response.data);
  }

  const res = {
    body: "ok"
  };

  context.done(null, res);
};
