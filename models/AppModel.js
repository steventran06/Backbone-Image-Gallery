var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentImage', new RowModel());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.collection.on('imageswap', function(image) {
      this.set('currentImage', image);
    }, this);

    params.collection.on('ratingchange', function(rating) {
      this.rating.set("rating", 8);
    }, this);
  }

});
