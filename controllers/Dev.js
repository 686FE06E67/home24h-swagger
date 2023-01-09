'use strict';

var utils = require('../utils/writer.js');
var Dev = require('../service/DevService');

module.exports.apostsGET = function apostsGET (req, res, next, p, s) {
  Dev.apostsGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Dev.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdDELETE = function postIdDELETE (req, res, next, id) {
  Dev.postIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdGET = function postIdGET (req, res, next, id) {
  Dev.postIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdPUT = function postIdPUT (req, res, next, id) {
  Dev.postIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsGET = function postsGET (req, res, next, p, s) {
  Dev.postsGET(p, s)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.roleGET = function roleGET (req, res, next) {
  Dev.roleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolePOST = function rolePOST (req, res, next, body) {
  Dev.rolePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.roleRoleIDDELETE = function roleRoleIDDELETE (req, res, next, roleID) {
  Dev.roleRoleIDDELETE(roleID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.roleRoleKeyPUT = function roleRoleKeyPUT (req, res, next, body, roleKey) {
  Dev.roleRoleKeyPUT(body, roleKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesGET = function rolesGET (req, res, next, username) {
  Dev.rolesGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGET = function userGET (req, res, next) {
  Dev.userGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUsernameDELETE = function userUsernameDELETE (req, res, next, username) {
  Dev.userUsernameDELETE(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUsernamePUT = function userUsernamePUT (req, res, next, body, username) {
  Dev.userUsernamePUT(body, username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.whoPOST = function whoPOST (req, res, next, body) {
  Dev.whoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
