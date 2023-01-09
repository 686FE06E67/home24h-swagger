'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Users.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPOST = function postPOST (req, res, next, body) {
  Users.postPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  Users.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdGET = function usernamePostIdGET (req, res, next, username, id) {
  Users.usernamePostIdGET(username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostIdPUT = function usernamePostIdPUT (req, res, next, body, username, id) {
  Users.usernamePostIdPUT(body, username, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernamePostsGET = function usernamePostsGET (req, res, next, username) {
  Users.usernamePostsGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
