angular.module( "giphySearch" )
	.service( "gifService", function( $http ) {

		var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

		// Example 1
		// this.getData = function( giphSearch ) {
		// 	console.log( giphSearch );
		// 	return
		// 	$http( {
		// 		// function returns a promise
		// 		method: 'GET',
		// 		url: baseUrl + giphSearch,
		// 	} ).then( function( response ) {
		// 		// .then called when data comes back
		// 		// everything inside is the promise fulfilled
		// 		console.log( response.data );
		// 		var giphResponse = response.data.data;
		// 		console.log( giphResponse );
		// 		return giphResponse;
		// 	} );
		// };
		this.getData = function(giphSearch) {
		console.log(giphSearch);
		return $http({
  method: 'GET',
  url: baseUrl + giphSearch
}).then(function successCallback(response) {
	console.log(response.data);
	var giphResponse = response.data.data;
	console.log(giphResponse);
	return giphResponse;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
		console.log('error', error);
  });
		};


		// Example 2
		this.getGiphy = function( gifSearch ) {
			return $http.get( baseUrl + gifSearch )
				.then( function( response ) {
					return response.data;
				} )
		}

	} );
