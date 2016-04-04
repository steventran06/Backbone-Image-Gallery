// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  tagName: 'div',
  className: 'row',

  initialize: function(params) {
    this.addPhotoView = new AddPhotoView({collection: this.model.get('collection')});
    this.tableView = new TableView({collection: this.model.get('collection')});
    this.imageView = new ImageView({model: this.model.get('currentImage')});

    this.model.on('change:currentImage', function(model) {
      this.imageView.setImage(model.get('currentImage'));
    }, this);

  },

  render: function() {
    return this.$el.html([
      '<h1>Photo Gallery</h1>',
      this.addPhotoView.$el,
      this.tableView.$el,
      this.imageView.$el,
    ]);
  }

});
