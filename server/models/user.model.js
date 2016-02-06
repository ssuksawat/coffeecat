'use strict';

const mongoose = require('mongoose');
const encrypt = require('../utilities/encryption');

const userSchema = mongoose.Schema({
    firstName: { type:String, required:'{PATH} is required!' },
    lastName: { type:String, required:'{PATH} is required!' },
    username: {
        type: String,
        required: '{PATH} is required!',
        unique: true
    },
    salt: { type:String, required:'{PATH} is required!' },
    hashedPwd: { type:String, required:'{PATH} is required!' },
    roles: [String]
});
userSchema.methods = {
    authenticate: function (password) {
      return encrypt.hashPwd(this.salt, password) === this.hashedPwd;
    },
    hasRole: function (role) {
      return this.roles.indexOf(role) > -1;
    }
};
userSchema.plugin(require('./plugins/timestamp.plugin'));

mongoose.model('User', userSchema);
