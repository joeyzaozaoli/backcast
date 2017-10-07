var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.currentVideo = this.videos.at(0);
    this.render();
  },

  el: '#app',
  template: templateURL('src/templates/app.html'),

  render: function() {
    this.$el.html(this.template());

    new SearchView({collection: this.videos}).render();
    new VideoPlayerView({model: this.currentVideo, collection: this.videos}).render();
    new VideoListView({collection: this.videos}).render();
  }

});
