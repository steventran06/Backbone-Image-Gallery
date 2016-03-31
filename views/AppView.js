// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  tagName: 'div',
  className: 'row',

  initialize: function(params) {
    this.tableView = new TableView({collection: this.model.get('collection')});
    this.imageView = new ImageView({model: this.model.get('currentImage')});

    this.model.on('change:currentImage', function(model) {
      this.imageView.setImage(model.get('currentImage'));
    }, this);

  },

  render: function() {
    return this.$el.html([
      '<h1>Photo Gallery</h1>',
      this.tableView.$el,
      this.imageView.$el,
    ]);
  }

});
