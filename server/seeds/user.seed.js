'use strict';

const User = require('mongoose').model('User');
const encrypt = require('../utilities/encryption');

module.exports = UserSeed;

function UserSeed() {

  // create Admin user
  const admin = {
    firstName: 'Catmin',
    lastName: 'User',
    username: 'catmin',
    password: '',
    salt: encrypt.createSalt(),
    roles: ['ADMIN']
  };
  admin.password = encrypt.hashPwd(admin.salt, 'catmin');

  User.find({}).exec()
    .then(collection => {
      if (collection.length > 0) { return; }
      User.create(admin);
      console.log('User seeded');
    });
}
