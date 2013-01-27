var app = app || {};

(function(){
  'use strict';

  app.Video = Backbone.model.extend({

    defaults : {
      id : "",
      title : "",
      owner : "",
      analysisList : []
    },

    initialize : function(){
      console.log('Initializing video');
    },

    newAnalysis : function(){
      //create analysis model and add it to video's analysisList 
    },

  });

}());
