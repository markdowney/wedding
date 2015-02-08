

Template.map.rendered = function(){
    // __loadGoogleMaps();
    var mapOptions = {
        center: new google.maps.LatLng(
            this.data.coord.lat,
            this.data.coord.lng
        ),
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
    
    var map = new google.maps.Map(this.$('.map-canvas')[0],mapOptions);

    var theMarker = new google.maps.Marker({
        map:map, draggable:false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(this.data.coord.lat, this.data.coord.lng),
        title: this.data.name
    });

    var infowindow = new google.maps.InfoWindow({
      content: this.data.name
    });

    infowindow.open(map, theMarker);

    // var partyCoord = {
    //     lat : '44.65628',
    //     lng : '-1.246141'
    // };

    // var thePartyMarker = new google.maps.Marker({
    //     map:map, draggable:false,
    //     animation: google.maps.Animation.DROP,
    //     position: new google.maps.LatLng(partyCoord.lat, partyCoord.lng)
    // });

    // var partyWindow = new google.maps.InfoWindow({
    //   content: 'Soirée'
    // });

    // partyWindow.open(map, thePartyMarker);
};
