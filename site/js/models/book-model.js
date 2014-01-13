var app = app || {};

app.Book = Backbone.Model.extend({

	// idAttribute: '_id',
	
    defaults: {
        coverImage: 'img/placeholder.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }, 

    parse: function( response ) {

    	// map mismatched attributes in responses
	    response.id = response._id;
	    return response;
	}
});