Template.programme.rendered = function(){
    
    var weddingCoord = {
        lat : '44.654094',
        lng : '-1.241238'
    };

    var cocktailCoord = {
        lat : '44.637908',
        lng : '-1.246317'
    };

    var partyCoord = {
        lat : '44.65628',
        lng : '-1.246141'
    };

    // __loadGoogleMaps();
    var mapOptions = {
        center: new google.maps.LatLng(
            weddingCoord.lat,
            weddingCoord.lng
        ),
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
    
    var map = new google.maps.Map(this.$('.programme-map')[0],mapOptions);

    var theWeddingMarker = new google.maps.Marker({
        map:map, draggable:false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(weddingCoord.lat, weddingCoord.lng),
        title: 'Mariage Religieux'
    });

    var theCocktailMarker = new google.maps.Marker({
        map:map, draggable:false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(cocktailCoord.lat, cocktailCoord.lng),
        title: 'Cocktail'
    });

    var thePartyMarker = new google.maps.Marker({
        map:map, draggable:false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(partyCoord.lat, partyCoord.lng),
        title: 'Soiree'
    });

    var weddingWindow = new google.maps.InfoWindow({
      content: '<strong>Mariage religieux</strong><br>Notre Dame des Flots<br>20 Boulevard de la Plage'
    });

    var cocktailWindow = new google.maps.InfoWindow({
      content: '<strong>Cocktail</strong><br>La Cabane du Mimbeau<br>28 Impasse de la Conche'
    });

    var partyWindow = new google.maps.InfoWindow({
      content: '<strong>Soirée</strong><br>Casa Maris<br>23 avenue des Ajoncs'
    });

    weddingWindow.open(map, theWeddingMarker);
    cocktailWindow.open(map, theCocktailMarker);
    partyWindow.open(map, thePartyMarker);

};
