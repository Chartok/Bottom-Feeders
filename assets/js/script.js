var param="";
const sbmtrqst = document.getElementById('searchSubmit');
var paramvalue = document.getElementById('userSearchParams');
var freqest = document.getElementById('food');
console.log(freqest);


//Submit on button press.
sbmtrqst.addEventListener("click", function(event){
    event.preventDefault();
    param=paramvalue.value.replace(/\s/g,'+');
    frequestval=freqest.value;
    document.location.href="./cards.html?param="+param+"&foodterm="+frequestval;
});


$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        param=paramvalue.value.replace(/\s/g,'+');
        frequestval=freqest.value;
        document.location.href="./cards.html?param="+param+"&foodterm="+frequestval;
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
  var updatelocation = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap';
  mapinsert.innerHTML='<iframe class="cell float-center" height="800px" style="border:0" loading="lazy" allow = "fullscreen" src='+updatelocation+'></iframe>'
  //document.getElementById('mainmap').src = updatelocation;
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
async function rendermap(){
  var mapinsert = document.getElementById('mainmap');
  var lat=crd.latitude;
  var long=crd.longitude;
  mapinsert.innerHTML='<iframe class="cell" height="800px" style="border:0" loading="lazy" allow = "fullscreen" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&center='+lat+','+long+'&zoom=13&maptype=roadmap"></iframe>'
}

