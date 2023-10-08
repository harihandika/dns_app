const axios = require("axios");
const { addParameter } = require("../helpers/url");

// const urlApi = process.env.URL_DANS

const urlApi = "https://dev6.dansmultipro.com/api/recruitment/positions";

class Controller {
  static getRecruitment(req, res, next) {
    const newUrl = addParameter(`${urlApi}.json`, req.query);
    axios
      .get(newUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        res.status(200).json(data.data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static getRecruitmentDetail(req, res, next) {
    const newUrl = `${urlApi}/${req.params.id}`;
    axios
      .get(newUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        res.status(200).json(data.data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = Controller;
