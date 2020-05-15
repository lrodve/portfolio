const map = L.map('map').setView([7.6446772, -66.2558632], 6);
const accessToken = "pk.eyJ1IjoibHJvZHZlIiwiYSI6ImNrNWs4aHlmODBiZTIzbG12aWxidnhjcGwifQ.HXoqQ9TrQ4imrnWVPKEzSg"
const popUp = `
        Luis Miguel Rodriguez
        <br>
        San Cristobal - Venezuela
        <br>
        inf.lrodriguez@gmail.com
`

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: `${accessToken}`
}).addTo(map);

const marker = L.marker([7.831752, -72.251823]).addTo(map);

marker.bindPopup(popUp).openPopup();