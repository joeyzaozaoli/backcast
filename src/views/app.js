var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.currentVideo = this.videos.at(0);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new SearchView().render();
    new VideoPlayerView({model: this.currentVideo}).render();
    new VideoListView({collection: this.videos}).render();
  },

  template: templateURL('src/templates/app.html')

});
