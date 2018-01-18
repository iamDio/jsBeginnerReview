//note that not all APIs require an api key, and if you try to access one that does without a key, you will get a 400 error "unauthorized access", or "access forbidden" something along those lines
// A response code of 200 indicates a succesful request. A response code of 500 indicates a server error and if everything is set up right according to the documentation of the API you're using, its not your fault.
const API_KEY = '1031e4b50f8e4775a69f8cb94cbd3ef3';

//this is the URL that we built using the documentation. Everything after the ? is specifing the parameters that we want in our search.
const queryURL = 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + API_KEY;

//this method will initiate an ajax call to an api
$.ajax({
	//the url is the query string that you will generate using the APIs documentation. This is where the data is coming from.
	url: queryURL,
	// As the name implies, the GET method is simply specificing that you want to GET the data from the API at the previously specified url. For this type of api call you will almost always use GET methods.
	// Later in the class we will be building our own APIs and interacting wtih a database as well as the DOM, and that's when you will use the other methods
	method: 'GET'
	// the .done method simply states "execute this callback function once the data has been fetched from the API"
}).done(function(response) {
	// here we're logging the response to make sure that the AJAX request was succesful, and to see how the response object is structured so that we can parse through it and get the specific data we wwant.
	//console.log(response);
	//rather than doing all of the parsing in this callback, we are going to write a function called parseThroughResponseObject which is going to parse through the response object to get just the data we want.
	//note that we're "passing down" the response as a parameter. Doing so will make it available when we're defining the parseThroughResponseObject function.
	parseThroughResponseObject(response);
});

// here we're defining the parseThroughResponseObject function, which we're calling in the callback of our ajax request above.
const parseThroughResponseObject = response => {
	response.results.forEach(function(book) {
		// in all of these const declarations we're looking through the response object and only referencing the data we want, and storing each piece into a variable so that we can easily reuse it later.
		// note that this function is only used to do the parsing. We're logging each variable to make sure that we're getting the desired output
		const bookRank = book.rank;
		console.log(bookRank);

		const bookTitle = book.book_details[0].title;
		console.log(bookTitle);

		const isbns = book.isbns[0].isbn10;
		console.log(isbns);

		const bookInfo = book.book_details[0];
		console.log(bookInfo);
		console.log('-----------------');
		// here we're calling the displayBestSellers function which we will use to add the information to the dom
		// not that in the function call we're adding our const variables as parameters, so that when we define the function later the data will be available.
		displayBestSellers(bookRank, bookTitle, isbns, bookInfo);
	});
};

// in this function we're creating html elements for each of the values we want to display to the page.
// this funciton runs for each one of the books in the top sellers list.
const displayBestSellers = (bookRank, bookTitle, isbns, bookInfo) => {
	const rank = $('<h2>').text(bookRank);
	const title = $('<h3>').text(bookTitle);
	// You will recall that bookInfo is referencing an object within the response object.
	// the next 2 variables are accessing the bookInfo object and taking the data we want out of it.
	// had we not stored bookInfo into its own variable to reuse, these variable declarations would have looked something like this
	// const author = $('<h3>').text(book.book_details[0].author);
	// 	const description = $('<p>').text(book.book_details[0].description);
	// as you can see our code now is a little bit easier to work with and limits our exposure to syntax errors.
	const author = $('<h3>').text(bookInfo.author);
	const description = $('<p>').text(bookInfo.description);
	const isbn = $('<h4>').text(isbns);
	const hr = $('<hr>');
	//here we're creating an image tag with a placeholder image in case the cover of the book is not available from the google api
	// note that we're using the isbns of each book to associate each image tag with one book. This allows the images that we pull from the google api to be associated with the right book
	const image = $(
		`<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png" class="book-cover" id="cover-${isbns}">`
	);
	// here we're simply aapending all of the information to the page. Notice how storing each in a variable makes it easier to reuse later.
	$('#main').append(image, rank, title, author, description, isbn, hr);
	getBookCover(isbns);

	// here we'recalling the getBookCover function which we will use to interact with the google books api.
	// the google books api requires an isbn to identify each book, therefore we're passing the isnbs variable through by adding it as a parameter, as we've done throughout this example.
};
//this function will pull data from the books api
const getBookCover = isbns => {
	//i'm using this console log to make sure that the isbn was succesfully passed down to this function
	console.log(isbns);
	const api_key = 'AIzaSyDLV4A-Go0DkpGmeUDWRHOexpLnIUP28v4';
	const queryURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbns + '&key=' + api_key;
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
		console.log(response);
		//here we're simply grabbing the image url from the response object
		const image = response.items[0].volumeInfo.imageLinks.smallThumbnail;
		//here we're selecting the #cover id which we created on line 65 const image = $(.....) in the displayBestSellers function
		//we're updating the isbns value of that id to ensure that the right image is displayed for the right book
		//we're updating the src attribute of that image tag with the link for the smallThumbnail from the response object
		$('#cover-' + isbns).attr('src', image);
		console.log(image);
	});
};
