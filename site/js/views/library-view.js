var app = app || {};

app.LibraryView = Backbone.View.extend({
    
    el: '#books',

    events:{
        'click #add':'addBook'
    },
    
    initialize: function() {
        this.collection = new app.Library();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render );
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    addBook: function( e ) {

        e.preventDefault(); // prevent submit and page reload

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {

            // skip fields with no value to apply defaults
            if( $( el ).val() != '' )
            {
                // id in DOM match associated property names, so use them
                formData[ el.id ] = $( el ).val();
            }
        });

        this.collection.create( formData );
    },
});