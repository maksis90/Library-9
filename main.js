
        var map,
            image = 'images/icon-location.png',
            coordinates = {lat: 49.595455, lng: 34.526106};

        function initMap() { 
            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 19
            });
        
        var marker = new google.maps.Marker({
        position: coordinates,
        map: map,   
       icon: image,
       animation: google.maps.Animation.BOUNCE
});

}        


      