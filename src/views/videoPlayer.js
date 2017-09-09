var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  template: templateURL('src/templates/videoPlayer.html'),

  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
  },

  initialize: function() {
    this.collection.on('select', function(video) {
      this.model = video;
      this.render();
    }, this);
  }

});
