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
		const bookRank = book.rank;
		console.log(bookRank);

		const bookTitle = book.book_details[0].title;
		console.log(bookTitle);

		const isbns = book.isbns[0].isbn10;
		console.log(isbns);

		const bookInfo = book.book_details[0];
		console.log(bookInfo);
		console.log('-----------------');
		displayBestSellers(bookRank, bookTitle, isbns, bookInfo);
	});
};

const displayBestSellers = (bookRank, bookTitle, isbns, bookInfo) => {
	const rank = $('<h2>').text(bookRank);
	const title = $('<h3>').text(bookTitle);
	const author = $('<h3>').text(bookInfo.author);
	const description = $('<p>').text(bookInfo.description);
	const isbn = $('<h4>').text(isbns);
	const hr = $('<hr>');
	$('#main').append(rank, title, author, description, isbn, hr);
	getBookCover(isbns);
};

function getBookCover(isbns) {
	console.log(isbns);
	const api_key = 'AIzaSyDLV4A-Go0DkpGmeUDWRHOexpLnIUP28v4';
	const queryURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbns + '&key=' + api_key;
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
		console.log(response);
	});
}
