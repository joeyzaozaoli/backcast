var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY
      },

      success: function(results) {
        console.log('get success', results);
        this.parse(results);
      },

      error: function(error) {
        console.log('get failure', error);
      }
    });
  },

  parse: function(results) {
    return results.items;
  }

});

