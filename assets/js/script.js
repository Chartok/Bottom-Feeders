var param="";
const sbmtrqst = document.getElementById('searchSubmit');
var paramvalue = document.getElementById('userSearchParams');

//Submit on button press.
sbmtrqst.addEventListener("click", function(event){
    event.preventDefault();
    param=paramvalue.value.replace(/\s/g,'+');
    document.location.href="./cards.html?param="+param;
});


$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        param=paramvalue.value.replace(/\s/g,'+');
        document.location.href="./cards.html?param="+param;
    }
});

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
    var mapinsert = document.getElementById('mainmap');
  var lat=crd.latitude;
  localStorage.setItem('latitude', lat);
  var long=crd.longitude;
  localStorage.setItem('longitude', long);
  mapinsert.innerHTML='<iframe id="mapwidget" width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap"></iframe>'
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
async function rendermap(){
  var mapinsert = document.getElementById('mainmap');
  var lat=crd.latitude;
  var long=crd.longitude;
  mapinsert.innerHTML='<iframe id="mapwidget" width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap"></iframe>'
}