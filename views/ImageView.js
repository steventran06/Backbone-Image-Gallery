var ImageView = Backbone.View.extend({

  el: '<img>',

  initialize: function() {
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('image') : '').addClass('col-sm-6');
  }
  
});
