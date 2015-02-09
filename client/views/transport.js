Template.transport.rendered = function(){
    
    var trajet_end = new google.maps.LatLng(44.663554, -1.168681);
    var trajet_start = new google.maps.LatLng(44.658936, -1.165343);

    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var mapOptions = {
            zoom:15,
            center: trajet_start,
            mapTypeControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT,
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        map = new google.maps.Map(this.$(".transport-map")[0], mapOptions);
        directionsDisplay.setMap(map);
    }

    function calcRoute() {
        var start = trajet_start;
        var end = trajet_end;
        var request = {
            origin: "Gare d'Archachon, Archachon, France",
            destination: "Jetée Thiers, Archachon, France",
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }

    initialize();
    calcRoute();
};
