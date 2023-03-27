// var param="";
// const sbmtrqst = document.getElementById('searchSubmit');
// var paramvalue = document.getElementById('userSearchParams');
// var freqest = document.getElementById('food');
// console.log(freqest);

// //Submit on button press.
// sbmtrqst.addEventListener("click", function(event){
//     event.preventDefault();
//     param=paramvalue.value.replace(/\s/g,'+');
//     frequestval=freqest.value;
//     document.location.href="./cards.html?param="+param+"&foodterm="+frequestval;
// });


// $(document).on("keypress", "input", function(e){
//     if(e.which == 13){
//         var inputVal = $(this).val();
//         param=paramvalue.value.replace(/\s/g,'+');
//         frequestval=freqest.value;
//         document.location.href="./cards.html?param="+param+"&foodterm="+frequestval;
//     }
// });

// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
  
//   function success(pos) {
//     const crd = pos.coords;
//   var mapinsert = document.getElementById('mainmap');
//   var lat=crd.latitude;
//   localStorage.setItem('latitude', lat);
//   var long=crd.longitude;
//   localStorage.setItem('longitude', long);
//   var updatelocation = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap';
//   mapinsert.innerHTML='<iframe class="cell float-center" height="800px" style="border:0" loading="lazy" allow = "fullscreen" src='+updatelocation+'></iframe>'
//   //document.getElementById('mainmap').src = updatelocation;
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);
  
// async function rendermap(){
//   var mapinsert = document.getElementById('mainmap');
//   var lat=crd.latitude;
//   var long=crd.longitude;
//   mapinsert.innerHTML='<iframe class="cell" height="800px" style="border:0" loading="lazy" allow = "fullscreen" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap"></iframe>'
// }



var map;
var service;
var infowindow;

function initialize() {

    var pyrmont = new google.maps.LatLng(8.9806, 38.7578);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    })

    var input = document.getElementById('userSearchParams');

    let autocomplete = new google.maps.places.Autocomplete(input)

    autocomplete.bindTo('bounds', map)

    let marker = new google.maps.Marker({
        map: map
    })

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        let place = autocomplete.getPlace()
        console.log(place)
        console.log(place.photos[0].getUrl())

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport)
        } else {
            map.setCenter(place.geometry.location)
            map.setZoom(17)
        }
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)

        let request = {
            location: place.geometry.location,
            radius: '5000',
            type: ['restaurant']
        }

        service = new google.maps.places.PlacesService(map)
        service.nearbySearch(request, callback)

    })

}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}


function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title:place.name,
        label:place.name
    });

    google.maps.event.addListener(marker, 'click', function () {

        window.open(place.photos[0].getUrl(), "_blank");
    });
}

google.maps.event.addDomListener(window, 'load', initialize)


//display current day & time into this format by using moment js
$("#currentDay").text(moment().format("YYYY"));