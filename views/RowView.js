var RowView = Backbone.View.extend({
  tagName: 'tr',

  imgTemplateBasic: _.template('<td class="img-title"><%=title%></td>'),

  imgTemplateWithImage: _.template('<td class="img-title"><%=title%></td><td><img src="<%=image%>"></td>'),
  
  render: function() {
    var imgTemplate = this.model.get('displayInfo') ? this.imgTemplateWithImage : this.imgTemplateBasic;
    this.$el.html(imgTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
    this.model.on('toggle:image', this.render, this);
  },

  events: {
    'click': function() {
      this.model.toggleImage();
    }
  }
});