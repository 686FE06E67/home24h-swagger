'use strict';

var utils = require('../utils/writer.js');
var TinNg = require('../service/TinNgService');

module.exports.postLtsGET = function postLtsGET (req, res, next) {
  TinNg.postLtsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPOST = function postPOST (req, res, next, body) {
  TinNg.postPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdGET = function usernamePostIdGET (req, res, next, username, id) {
  TinNg.usernamePostIdGET(username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdPUT = function usernamePostIdPUT (req, res, next, body, username, id) {
  TinNg.usernamePostIdPUT(body, username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostsGET = function usernamePostsGET (req, res, next, username) {
  TinNg.usernamePostsGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
