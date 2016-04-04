var ImageView = Backbone.View.extend({
  
  tagName: 'div',
  className: 'row',

  template: _.template('<div class="col-sm-6"><img src="<%= image %>"><p><%= title %></p><p><%= rating %> out of 5</p><select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>'),

  events: {
    'change select': 'changeRating',
    
  },

  initialize: function() {
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  changeRating: function(option) {
    this.model.changeRating(option.currentTarget.value);
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
  
});
