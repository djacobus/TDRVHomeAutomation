/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'pg_tdrvHA',
  attributes: {
    username:{
      type:'string',
      required:true
    },
    lastname:{
      type:'string'
    },
    firstname:{
      type:'string'
    },
    password:{
      type:'string'
    }
  }
};

