const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY - HH:MM");
};

const shortenBody = (body) => {
  const newBody = body.split(".").slice(0, 3).join(".");
  return `${newBody}.`;
};

module.exports = {
  shortenBody,
  formatDate,
};
