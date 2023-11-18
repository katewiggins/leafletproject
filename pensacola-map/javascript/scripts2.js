document.addEventListener('DOMContentLoaded', function () {
    var floridaMap = L.map('floridaMap').setView([28.317234, -83.718943], 5.78);

    L.tileLayer('https://api.mapbox.com/styles/v1/katewiggins/clp2vc4z100z901qj0nwvamml/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2F0ZXdpZ2dpbnMiLCJhIjoiY2xwMnY2MDBvMGkwYTJzcDJqanhqdDFqMCJ9.KcJ6KJ_L74ZdBVqGpuX7sw', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(floridaMap);

    for (let i = 0; i < places.length; i++) {
        L.marker([places[i].lat, places[i].long])
            .bindPopup('<h1>' + places[i].college + '</h1>' + '<p>' + places[i].city + '</p>').addTo(floridaMap);
    }
    
    
    
    
    
});
