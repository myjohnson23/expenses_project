var app = app || {};
var active = active || {};

//blueprints
app.model = Backbone.Model.extend();
app.collection = Backbone.Collection.extend({
  model: app.model,
  url: '/api/expense'
});
app.modelView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#expenses-template').html());
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});
app.collectionView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync', function() {
      that.render();
    });
    this.collection.fetch();
    this.$el.html('');
  },
  render: function() {
    var collection = this.collection.models;
    for (var model in collection) {
      new app.modelView({
        el: $('#expenses-list'),
        model: collection[model]
      });
    }
  }
});
//end blueprints

$(document).ready(function(event){
  active.collection = new app.collection();
  active.collectionView = new app.collectionView({
    collection: active.collection,
    el: $('#expenses-list')
  });

});

jQuery(function() {
    var shortDateFormat = 'dd/MM/yyyy';
    var longDateFormat  = 'dd/MM/yyyy HH:mm:ss';

    jQuery(".shortDateFormat").each(function (idx, elem) {
        if (jQuery(elem).is(":input")) {
            jQuery(elem).val(jQuery.format.date(jQuery(elem).val(), shortDateFormat));
        } else {
            jQuery(elem).text(jQuery.format.date(jQuery(elem).text(), shortDateFormat));
        }
    });
  });
