"use strict";

var map; // Declare map globally
var mapLat = mapLat || 0; // Fallback to 0 if undefined
var mapLong = mapLong || 0; // Fallback to 0 if undefined

// Initialize the map and autocomplete functionality
function initAutocomplete() {
    map = L.map('map').setView([mapLat, mapLong], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var geocoder = L.Control.Geocoder.nominatim();

    // Check if we have coordinates to start with
    if (mapLat && mapLong) {
        showGetPosition(mapLat, mapLong, map, geocoder);
    } else {
        getLocation(map, geocoder);
    }

    // Setup autocomplete functionality
    var input = document.getElementById('autocomplete-input');
    var autocomplete = new L.Control.Geocoder(input, { geocoder: geocoder });
    autocomplete.on('select', function(e) {
        var latlng = e.latlng;
        $('#lat').val(latlng.lat);
        $('#long').val(latlng.lng);
        if (map) {
            map.setView(latlng, 13);
        }
    });

    if ($('.main-search-input-item')[0]) {
        setTimeout(function () {
            $(".leaflet-control-geocoder").prependTo("#autocomplete-container");
        }, 300);
    }
}

// Get the user's location and show it on the map
function getLocation(map, geocoder) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            showPosition(position, map, geocoder);
        }, function(error) {
            alert("Error getting location: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Display the user's position on the map
function showPosition(position, map, geocoder) {
    if (!map) {
        console.error('Map is not defined');
        return;
    }
    var latlng = L.latLng(position.coords.latitude, position.coords.longitude);
    $('#lat').val(latlng.lat);
    $('#long').val(latlng.lng);

    map.setView(latlng, 13);

    geocoder.reverse(latlng, map.options.crs.scale(map.getZoom()), function(results) {
        if (results.length > 0) {
            $('#autocomplete-input').val(results[0].name || results[0].formattedAddress || results[0].address);
        }
    });
}

// Show a specific position on the map based on given coordinates
function showGetPosition(lat, long, map, geocoder) {
    if (!map) {
        console.error('Map is not defined');
        return;
    }
    var latlng = L.latLng(lat, long);
    $('#lat').val(latlng.lat);
    $('#long').val(latlng.lng);

    map.setView(latlng, 13);

    geocoder.reverse(latlng, map.options.crs.scale(map.getZoom()), function(results) {
        if (results.length > 0) {
            $('#autocomplete-input').val(results[0].name || results[0].formattedAddress || results[0].address);
        }
    });
}

// Call initAutocomplete when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initAutocomplete();
});
