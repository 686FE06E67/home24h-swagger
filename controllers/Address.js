'use strict';

var utils = require('../utils/writer.js');
var Address = require('../service/AddressService');

module.exports.districtGET = function districtGET (req, res, next, p, s) {
  Address.districtGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.districtIdGET = function districtIdGET (req, res, next, id) {
  Address.districtIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.districtIdWGET = function districtIdWGET (req, res, next, id) {
  Address.districtIdWGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceCodeDGET = function provinceCodeDGET (req, res, next, code) {
  Address.provinceCodeDGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceCodeGET = function provinceCodeGET (req, res, next, code) {
  Address.provinceCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceGET = function provinceGET (req, res, next, p, s) {
  Address.provinceGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardGET = function wardGET (req, res, next, p, s) {
  Address.wardGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardIdGET = function wardIdGET (req, res, next, id) {
  Address.wardIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
