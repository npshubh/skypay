'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('operator', {
  attributes: ['firstName', 'lastName', 'roleId', 'email']
});
