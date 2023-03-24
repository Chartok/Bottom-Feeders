const querystring = window.location.search;
const urlParam = new URLSearchParams(querystring);
const param=urlParam.get('param')
const foodselect=urlParam.get('foodterm')
var paramvalue = document.getElementById('mapwidget');
var lat = localStorage.getItem('latitude');
var long= localStorage.getItem('longitude');
var coords = lat+","+long;
var reversegeo = {};
var address = "";
var hasgeolocdata='center="+lat+","+long+"&'
var near=localStorage.getItem("searchableaddress");
console.log(lat);
console.log(long);
console.log(foodselect);
if(lat !== ""&&long!==""){
  paramvalue.src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&q="+foodselect+"+"+param+"+near+"+near+"&"+hasgeolocdata+"zoom=13";
}
if(lat==""||long==""&&near!==""){
  paramvalue.src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&q="+foodselect+"+"+param+"+near+"+near+"&zoom=13";
}
else{
  paramvalue.src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDaVpz6lQ5ZUpxt0KgWKTuHehzCxbeFlM4&q="+foodselect+"+"+param+"&zoom=13";
}



// Reverse-Geocoding 
var revgeo=function(repo){
  fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+lat+"&lon="+long+"&apiKey=dbd8f8a8f2164fac9dc4014ea219bc4a").then(function(response){
    if(response.ok){
        response.json().then(function(data){
            reversegeo=data;
            console.log(reversegeo);
            address = reversegeo.features[0].properties.formatted;
            localStorage.setItem("address",address);
            var inptaddy = address.replace(/\s/g,'+');
            localStorage.setItem("searchableaddress",inptaddy);
        })
    }
  })
}
revgeo();

