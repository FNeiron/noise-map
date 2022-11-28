function init() {
    var data = ymaps.geoXml.load("https://raw.githubusercontent.com/FNeiron/map-noise/e932336062558228cd92b215dad834c1779b0430/data.kml?token=GHSAT0AAAAAAB3HMHI45SDMF5QHAQDEGATQY4ERLQQ");
    let map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    })

    data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
    });

    circle = new ymaps.Circle([[53.23668610165901,50.203182910530764], 100], null, { draggable: true });
    circle.events.add('drag', function () {
        // Объекты, попадающие в круг, будут становиться красными.
        var objectsInsideCircle = objects.searchIntersect(circle);
        objectsInsideCircle.setOptions({fillColor: '#ff001a'});
        // Оставшиеся объекты - синими.
        objects.remove(objectsInsideCircle).setOptions({fillColor: '#0081ff'});
    });
    map.geoObjects.add(circle);
}

ymaps.ready(init)