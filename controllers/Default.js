'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.districtGET = function districtGET (req, res, next, p, s) {
  Default.districtGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.districtIdGET = function districtIdGET (req, res, next, id) {
  Default.districtIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.districtIdWGET = function districtIdWGET (req, res, next, id) {
  Default.districtIdWGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postLtsGET = function postLtsGET (req, res, next) {
  Default.postLtsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceCodeDGET = function provinceCodeDGET (req, res, next, code) {
  Default.provinceCodeDGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceCodeGET = function provinceCodeGET (req, res, next, code) {
  Default.provinceCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provinceGET = function provinceGET (req, res, next, p, s) {
  Default.provinceGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  Default.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardGET = function wardGET (req, res, next, p, s) {
  Default.wardGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardIdGET = function wardIdGET (req, res, next, id) {
  Default.wardIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
