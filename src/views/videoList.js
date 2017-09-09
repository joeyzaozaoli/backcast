var VideoListView = Backbone.View.extend({

  el: '.list',
  template: templateURL('src/templates/videoList.html'),

  render: function() {
    this.$el.html(this.template());

    this.$el.children().detach();
    this.collection.forEach(function(video) {
      var entryView = new VideoListEntryView({model: video}).render();
      this.$el.append(entryView);
    }, this);
  },

  initialize: function() {
    this.collection.on('sync', this.render, this);
  }

});
