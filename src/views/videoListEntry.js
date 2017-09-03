var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  events: {
    'click': function() {
      this.model.select();
    }
  }

});
