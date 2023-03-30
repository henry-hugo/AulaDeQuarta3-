//declarar uma funçao getlocation responsavel por obter a localizaçao
var lat;
var lon;

function getLocation(){
    //testa localizaçao
    if(!navigator.geolocation){
    return null;
    }
    //se passar pelo erro pegamos a localizaçao
    navigator.geolocation.getCurrentPosition(function(pos){
        //a seguir vamos selecionar o elemento do html com id lat e atualizar o seu conteudo de texto(innerText) com a leitura do objeto
        lat =  document.getElementById("lat").innerText=pos.coords.latitude;

        lon =  document.getElementById("lon").innerText=pos.coords.longitude;

        initMap();
    }) 
}
    function initMap() {
        // The location of Uluru
        const uluru = { lat: lat, lng: lon };
        
        // The map, centered at Uluru
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
        }    
getLocation();























