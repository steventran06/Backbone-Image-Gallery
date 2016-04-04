var TableView = Backbone.View.extend({
  tagName: 'div',
  className: 'col-sm-6',
  
  render: function() {
    this.$el.html('<th>Images</th>');
    this.collection.each(function(image) {
      this.$el.append(new RowView({model: image}).$el);
    }, this);

    return this;
  },

  addImage: function(newImage) {
    this.add(newImage);
    this.render();
  },
  
  initialize: function() {
    this.render();
  }
  
});
