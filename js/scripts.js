// YOUR SCRIPTS GO HERE
$.simpleWeather({
  location: 98926,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display weather
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.temp').text(weather.temp);
    $('.thumb img').attr('src', weather.image);
  },
  error: function(error){
    console.log('No Weather Found');
  }
});$.simpleWeather({
  location: 98926,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display weather
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.temp').text(weather.temp);
    $('.thumb img').attr('src', weather.image);
  },
  error: function(error){
    console.log('No Weather Found');
  }
});