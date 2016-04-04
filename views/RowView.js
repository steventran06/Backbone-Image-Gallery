var RowView = Backbone.View.extend({
  tagName: 'tr',

  rowTemplate: _.template('<td class="img-title"><%=title%></td>'),
  
  render: function() {
    this.$el.html(this.rowTemplate(this.model.attributes));
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