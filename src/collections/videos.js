var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY
      },

      success: (function(data) {
        console.log('get success', data);
        this.parse(data);
      }).bind(this),

      error: function(error) {
        console.log('get failure');
      }
    });
  },

  parse: function(data) {
    this.set(data.items);
    this.trigger('search', this);
    return data.items;
  }

});

