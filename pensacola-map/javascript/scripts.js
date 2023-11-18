document.addEventListener('DOMContentLoaded', function () {
    var pcolaMap = L.map('pcolaMap').setView([30.410827, -87.217688], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/katewiggins/clp2vc4z100z901qj0nwvamml/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F0ZXdpZ2dpbnMiLCJhIjoiY2xwMnY4MmEyMHVyMzJqcXZhaHdlNDdsNiJ9.4LAeA2wROtnu_UVAgWWdXg', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(pcolaMap);

    // Now, add a marker to the map
    var marker = L.marker([30.420617, -87.220481], {zoom: 14.69}).addTo(pcolaMap);
    marker.bindPopup("Five Sisters Blues Cafe").openPopup();

    var marker = L.marker([30.413820, -87.216419], {zoom: 15.30}).addTo (pcolaMap);
    marker.bindPopup("Dog House Deli").openPopup();

    var marker = L.marker([30.425470, -87.204543], {zoom: 14.83}).addTo(pcolaMap);
    marker.bindPopup("O'Zone Pizza Pub").openPopup();

    var marker = L.marker([30.404701, -87.212611], {zoom: 15.31}).addTo(pcolaMap);
    marker.bindPopup("Jaco's Bayfront Bar & Grille").openPopup();
});
 









