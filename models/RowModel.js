var RowModel = Backbone.Model.extend({

  toggleImage: function() {
    this.trigger('imageswap', this);
  },

  changeRating: function(newRating) {
    this.set('rating', newRating);
  }

});
