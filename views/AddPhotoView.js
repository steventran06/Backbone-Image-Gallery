var AddPhotoView = Backbone.View.extend({
  
  tagName: 'div',
  className: 'row',

  mode: RowModel,

  template: _.template('<div class="col-sm-6"><form>Image Link:<input type="text" class="image-source">Title:<input type="text" class="title"><input type="submit"></input></form></div>'),

  events: {
    'submit': 'addPhoto',
  },

  initialize: function() {
    this.render();
  },


  addPhoto: function(input) {
    input.preventDefault();

    var imageSource = $(".image-source").val();
    var title = $(".title").val();
    // console.log(imageSource);

    var newImage = new RowModel();
    newImage.set("image", imageSource);
    newImage.set("title", title);

    this.collection.add(newImage);
  },

  render: function() {
    return this.$el.html(this.template);
  }
  
});
