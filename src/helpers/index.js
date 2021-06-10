const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY - HH:mm");
};

const shortenBody = (body) => {
  const newBody = body.split(" ").slice(0, 50).join(" ");
  return `${newBody} ...`;
};

module.exports = {
  shortenBody,
  formatDate,
};
