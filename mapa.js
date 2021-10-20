//import { latLng } from "leaflet"
//const tilesProvider = 'https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png',{
let map = L.map('map').setView([5.337750,-72.395860],5.3)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}'.png,{
    attribution: '&copy; <a href = "https://www.openstreetmap.org/copyriht">OpenStreetMap</a> contributors'
}).addTo(map);
    
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);


//let map = L.map('map').setview([5.337750,-72.395860],6)
//let map = L.map('map').setView([5.337750,-72.395860], 13)

//L.tileLayer(tilesProvider, {
    //maxZoom: 18
//}).addTo(map);

document.getElementById('select_location').addEventListener('change', function(e){
    let coords= e.target.value.split(",");
    map.flyTo(coords,13);
})
//Add BaseMap
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
maxZoom: 19
},
//add MiniMaP Plugin

var minimap = new.L.Control.MiniMap(carto_light,
    {
        toggleDisplay:true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);
//ADD SCALE
new.L.Control.scale ({imperial: false}).addTo(map);
// POP-UP CONFIGURE
function popup(feature,layer){
    if(feature.properties && feature.properties.codigo){
        layer.bindPopup("<strong>codigo: </strong>" + feature.properties.codigo + "<co/>" + "<strong>manzana_co: </strong>" + feature.properties.manzana_co);
    }
    //if(feature.properties && feature.properties.codigo){
        //layer.bindPopup("<strong>codigo: </strong>" + feature.properties.codigo + "<co/>" + "<strong>shape_area: </strong>" + feature.properties.shape_area);
}
//ADD GEOJSON
L.geoJSON(codigo)=addTo(map);
var ucodigo = L.geoJSON(codigo,{
    onEachFeature: popup 
}).addTo(map);

//!-->L.geoJSON(shape_area)=addTo(map);
//var shape_area = L.geoJSON(shape_area,{
    //onEachFeature: popup 
//}).addTo(map);
-->//
//ADD marker 
let marker = L.marker([5.337750, -72.395860]).addTo(map)

let iconMarker = L.icon ({
    iconUrl: 'marker.png.png', 
    iconSize: [60,60],
    iconAnchor: [30,60]
    })
    //ADD marker
let marker2 = L.marker([5.338566321313695,-72.39553570747375],{ icon: iconMarker}).addTo(map)
//Event create
mapa.doubleClickZoom.enable()
mapa.on('dblclick', e => {
let latLng = map.mouseEventToLatLng(e.originalEvent)
L.marker([latLng.lat, latLng.lng], {icon: iconMarker}).addTo(map)
})
//Navigator Function
navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { coords } = pos
      console.log(coords)
      L.marker([coords.latitude, coords.longitude], { icon: iconMarker}).addTo.(mapa)
    },  
    (err) => {
        console.log(err)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
)
  
    
   // console.log(coords)
    //L.marker([coords.latitude, coords.longitude], { icon: iconMarker}).addTo(map)
  //},
  //(err) = {
   // console.log(err)
 // },
  //{
    
    
  //}



//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);


