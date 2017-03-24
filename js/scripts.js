// YOUR SCRIPTS GO HERE

// Sidr Drawer
// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})

//Simple Weather
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