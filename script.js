function init() {
    var map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    }),
    circle = new ymaps.Circle([[53.23668610165901,50.203182910530764], 100], null, { draggable: true });
    
    map.geoObjects.forEach(element => {
        console.log(element.type);
    });

    circle.events.add('drag', function () {
        var objectsInsideCircle = ymaps.geoQuery().searchIntersect(circle);
        objectsInsideCircle.setOptions({fillColor: '#000000'});
        // Оставшиеся объекты - синими.
        //objects.remove(objectsInsideCircle).setOptions({fillColor: '#ffffff'});
    });
    map.geoObjects.add(circle);

    var data = ymaps.geoXml.load("https://gitcdn.link/cdn/FNeiron/noise-map/main/data.kml?token=GHSAT0AAAAAAB3HMHI437HKDFCKPCNMQRY6Y4ERYUQ");
        data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
    });
}

ymaps.ready(init)