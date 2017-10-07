var SearchView = Backbone.View.extend({

  el: '.search',
  template: templateURL('src/templates/search.html'),

  render: function() {
    this.$el.html(this.template());
  },

  events: {
    'click .btn': function() {
      this.collection.search(this.$el.find('input').val());
    },

    'keyup': function(e) {
      if (e.keyCode === 13) {
        this.collection.search(this.$el.find('input').val());
      }
    }
  }

});
