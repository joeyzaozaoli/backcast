var SearchView = Backbone.View.extend({

  el: '.search',
  template: templateURL('src/templates/search.html'),

  render: function() {
    this.$el.html(this.template());
  }

});
