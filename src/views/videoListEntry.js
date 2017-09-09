var VideoListEntryView = Backbone.View.extend({

  template: templateURL('src/templates/videoListEntry.html'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  events: {
    'click': function() {
      this.model.select();
    }
  }

});
