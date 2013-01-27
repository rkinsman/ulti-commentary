var app = app || {};

(function(){
  'use strict';

  app.analysis = Backbone.model.extend({
    
    defaults : {
      owner : "",
      createDate : new Date(),
      discussion : []
    },

    initialize : function(){
      console.log('Initializing analysis');
    },

    newComment : function(){
      //create new comment and add to analysis' discussion
    }

  });

}());
