var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(function(video) {
      var entryView = new VideoListEntryView({model: video}).render();
      this.$el.append(entryView);
    }, this);
  },

  template: templateURL('src/templates/videoList.html')

});
