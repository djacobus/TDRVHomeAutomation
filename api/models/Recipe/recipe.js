/**
 * Recipe/recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  meta: {
    schemaName: 'recipe'
  },
  attributes: {
    title:{
      type:'string',
      required:true
    },
    directions:{
      type:'string',
      required:true
    },
    difficulty:{
      type:'integer',
      required:true
    }
  }
};

