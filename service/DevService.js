'use strict';


/**
 * Trả về danh sách bài đăng đầy đủ.
 *
 * p Integer Page *:* `Trang cần gọi đến` (optional)
 * s Integer Size *:* `Số lượng bài đăng muốn lấy trên một trang` (optional)
 * no response value expected for this operation
 **/
exports.apostsGET = function(p,s) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Đăng nhập trả về chuỗi token
 *
 * body Object 
 * no response value expected for this operation
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Xóa bài đăng theo ID, thao tác chỉ Admin.
 *
 * id Integer ID of Post
 * no response value expected for this operation
 **/
exports.postIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lấy bài post theo ID
 *
 * id Integer Post ID
 * no response value expected for this operation
 **/
exports.postIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cập nhật bài đăng theo ID, chỉ dành cho Admin/Manager
 *
 * id Integer ID of post
 * no response value expected for this operation
 **/
exports.postIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lấy danh sách bài đăng của người dùng đã được duyệt và chưa bán.
 *
 * p Integer Page *:* `Trang cần gọi đến` (optional)
 * s Integer Size *:* `Số lượng bài đăng muốn lấy trên một trang` (optional)
 * no response value expected for this operation
 **/
exports.postsGET = function(p,s) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Trả về toàn bộ quyền có thể cấp, chỉ `Admin`
 *
 * no response value expected for this operation
 **/
exports.roleGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Tạo mới quyền, chỉ `Admin`
 *
 * body Role 
 * no response value expected for this operation
 **/
exports.rolePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Xóa một role theo ID
 * Xóa `ROLE` theo id, chỉ `Admin`
 *
 * roleID Integer 
 * no response value expected for this operation
 **/
exports.roleRoleIDDELETE = function(roleID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Chỉnh sửa ROLE theo tên ROLE đó
 * Chỉnh sửa `ROLE` theo `roleKey`, chỉ `Admin`
 *
 * body Role 
 * roleKey String 
 * no response value expected for this operation
 **/
exports.roleRoleKeyPUT = function(body,roleKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Kiểm tra quyền được cấp của người dùng đã đăng ký.
 * Trả về `Roles`, `Permission` của người dùng. Chỉ `Admin` hoặc `Manager` 
 *
 * username String 
 * no response value expected for this operation
 **/
exports.rolesGET = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lấy danh sách toàn bộ người dùng đã đăng ký
 * List of `user` already registered, only `Admin`
 *
 * no response value expected for this operation
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Xóa người dùng theo username
 *
 * username String 
 * no response value expected for this operation
 **/
exports.userUsernameDELETE = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body User  (optional)
 * username String 
 * no response value expected for this operation
 **/
exports.userUsernamePUT = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Kiểm tra chuỗi token
 * Kết quả trả về là tên người dùng theo token đó.
 *
 * body String 
 * no response value expected for this operation
 **/
exports.whoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

