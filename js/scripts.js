// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// Sidr Drawer
// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})

// Get and store gps lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.iamhere').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
$.simpleWeather({
  location: location,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    
    //Change "Here" to city name
    $('#one .cityName').text(weather.city);
    
    //display today
    $('#one .day0 .low').text(weather.low);
    $('#one .day0 .high').text(weather.high);
    $('#one .day0 .humidity').text(weather.humidity);
    $('#one .day0 img').attr('src', weather.image);
    
    // forecast Day One
    $('#one .day1 .low').text(weather.forecast[1].low);
    $('#one .day1 .high').text(weather.forecast[1].high);
    $('#one .day1 img').attr('src', weather.forecast[1].image);
    
    //forecast Day Two
    $('#one .day2 .low').text(weather.forecast[2].low);
    $('#one .day2 .high').text(weather.forecast[2].high);
    $('#one .day2 img').attr('src', weather.forecast[2].image);
    
    //forecast Day Three
    $('#one .day3 .low').text(weather.forecast[3].low);
    $('#one .day3 .high').text(weather.forecast[3].high);
    $('#one .day3 img').attr('src', weather.forecast[3].image);

    //forecast Day Four
    $('#one .day4 .low').text(weather.forecast[4].low);
    $('#one .day4 .high').text(weather.forecast[4].high);
    $('#one .day4 img').attr('src', weather.forecast[4].image);
    
    console.log(weather.forecast[0].text);
  },
  error: function(error){
    console.log('OH NO! NO WEATHER! What will you do????');
  }
});
}

//Cheney Weather
$.simpleWeather({
  location: 99004,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display today
    $('#two .day0 .low').text(weather.low);
    $('#two .day0 .high').text(weather.high);
    $('#two .day0 .humidity').text(weather.humidity);
    $('#two .day0 img').attr('src', weather.image);
    
    // forecast Day One
    $('#two .day1 .low').text(weather.forecast[1].low);
    $('#two .day1 .high').text(weather.forecast[1].high);
    $('#two .day1 img').attr('src', weather.forecast[1].image);
    
    //forecast Day Two
    $('#two .day2 .low').text(weather.forecast[2].low);
    $('#two .day2 .high').text(weather.forecast[2].high);
    $('#two .day2 img').attr('src', weather.forecast[2].image);
    
    //forecast Day Three
    $('#two .day3 .low').text(weather.forecast[3].low);
    $('#two .day3 .high').text(weather.forecast[3].high);
    $('#two .day3 img').attr('src', weather.forecast[3].image);
    
    //forecast Day Four
    $('#two .day4 .low').text(weather.forecast[4].low);
    $('#two .day4 .high').text(weather.forecast[4].high);
    $('#two .day4 img').attr('src', weather.forecast[4].image);
    
    console.log(weather.forecast[0].text);
  },
  error: function(error){
    console.log('OH NO! NO WEATHER! What will you do????');
  }
});

//Spokane Weather
$.simpleWeather({
  location: 83864,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display today
    $('#three .day0 .low').text(weather.low);
    $('#three .day0 .high').text(weather.high);
    $('#three .day0 .humidity').text(weather.humidity);
    $('#three .day0 img').attr('src', weather.image);
    
    // forecast Day One
    $('#three .day1 .low').text(weather.forecast[1].low);
    $('#three .day1 .high').text(weather.forecast[1].high);
    $('#three .day1 img').attr('src', weather.forecast[1].image);
    
    //forecast Day Two
    $('#three .day2 .low').text(weather.forecast[2].low);
    $('#three .day2 .high').text(weather.forecast[2].high);
    $('#three .day2 img').attr('src', weather.forecast[2].image);
    
    //forecast Day Three
    $('#three .day3 .low').text(weather.forecast[3].low);
    $('#three .day3 .high').text(weather.forecast[3].high);
    $('#three .day3 img').attr('src', weather.forecast[3].image);
    
    //forecast Day Four
    $('#three .day4 .low').text(weather.forecast[4].low);
    $('#three .day4 .high').text(weather.forecast[4].high);
    $('#three .day4 img').attr('src', weather.forecast[4].image);
    
    console.log(weather.forecast[0].text);
  },
  error: function(error){
    console.log('OH NO! NO WEATHER! What will you do????');
  }
});

//Samuels Weather
$.simpleWeather({
  location: 83864,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display today
    $('#four .day0 .low').text(weather.low);
    $('#four .day0 .high').text(weather.high);
    $('#four .day0 .humidity').text(weather.humidity);
    $('#four .day0 img').attr('src', weather.image);
    
    // forecast Day One
    $('#four .day1 .low').text(weather.forecast[1].low);
    $('#four .day1 .high').text(weather.forecast[1].high);
    $('#four .day1 img').attr('src', weather.forecast[1].image);
    
    //forecast Day Two
    $('#four .day2 .low').text(weather.forecast[2].low);
    $('#four .day2 .high').text(weather.forecast[2].high);
    $('#four .day2 img').attr('src', weather.forecast[2].image);
    
    //forecast Day Three
    $('#four .day3 .low').text(weather.forecast[3].low);
    $('#four .day3 .high').text(weather.forecast[3].high);
    $('#four .day3 img').attr('src', weather.forecast[3].image);
    
    //forecast Day Four
    $('#four .day4 .low').text(weather.forecast[4].low);
    $('#four .day4 .high').text(weather.forecast[4].high);
    $('#four .day4 img').attr('src', weather.forecast[4].image);
    
    console.log(weather.forecast[0].text);
  },
  error: function(error){
    console.log('OH NO! NO WEATHER! What will you do????');
  }
});

//Samuels Weather
$.simpleWeather({
  location: 83864,
  unit: 'f',
  success: function(weather){
    //weather check
    console.log(weather)
    //display today
    $('#five .day0 .low').text(weather.low);
    $('#five .day0 .high').text(weather.high);
    $('#five .day0 .humidity').text(weather.humidity);
    $('#five .day0 img').attr('src', weather.image);
    
    // forecast Day One
    $('#five .day1 .low').text(weather.forecast[1].low);
    $('#five .day1 .high').text(weather.forecast[1].high);
    $('#five .day1 img').attr('src', weather.forecast[1].image);
    
    //forecast Day Two
    $('#five .day2 .low').text(weather.forecast[2].low);
    $('#five .day2 .high').text(weather.forecast[2].high);
    $('#five .day2 img').attr('src', weather.forecast[2].image);
    
    //forecast Day Three
    $('#five .day3 .low').text(weather.forecast[3].low);
    $('#five .day3 .high').text(weather.forecast[3].high);
    $('#five .day3 img').attr('src', weather.forecast[3].image);
    
    //forecast Day Four
    $('#five .day4 .low').text(weather.forecast[4].low);
    $('#five .day4 .high').text(weather.forecast[4].high);
    $('#five .day4 img').attr('src', weather.forecast[4].image);
    
    console.log(weather.forecast[0].text);
  },
  error: function(error){
    console.log('OH NO! NO WEATHER! What will you do????');
  }
});

//Hide button after click
$(".iamhere").click(function(){
    $(".iamhere").hide();
});

   
  
    