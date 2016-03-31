var RowModel = Backbone.Model.extend({

  toggleImage: function() {
    this.trigger('imageswap', this);
  }

});
