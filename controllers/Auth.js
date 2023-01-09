'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.postIdGET = function postIdGET (req, res, next, id) {
  Auth.postIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPOST = function postPOST (req, res, next, body) {
  Auth.postPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdGET = function usernamePostIdGET (req, res, next, username, id) {
  Auth.usernamePostIdGET(username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdPUT = function usernamePostIdPUT (req, res, next, body, username, id) {
  Auth.usernamePostIdPUT(body, username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostsGET = function usernamePostsGET (req, res, next, username) {
  Auth.usernamePostsGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
