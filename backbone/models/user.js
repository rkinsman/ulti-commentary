var app = app || {};

(function(){
  'use stict';

  app.User = Backbone.model.extend({
  
    defaults : {
      username : 'anonymous',
      videoList : [],
      analysisList : [],
      joinDate : new Date()
    },

    initialize : function(){
      console.log('Initializing user');
    },
 
    newVideo : function(){
      //create new video and add to user's videoList
    },

    newAnalysis : function(){
      //create new analysis and add to user's analysisList
    },

  });

}());
