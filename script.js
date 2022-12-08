var dataj = 'https://gitcdn.link/cdn/FNeiron/noise-map/feature/dataj.geojson?token=GHSAT0AAAAAAB3HMHI5BADBXZXOLXHKU62OY4ETUXA';
var date = 'https://raw.githubusercontent.com/FNeiron/noise-map/feature/KSR_01-12-2022_23-32-49.kml?token=GHSAT0AAAAAAB3HMHI4NEWZEDSXVSXYZH2MY4RSAOQ'
function init() {
    var map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    }),
    circle = new ymaps.Circle([[53.23668610165901,50.203182910530764], 100], null, { draggable: true });
    
    circle.events.add('drag', function () {
        var objectsInsideCircle = ymaps.geoQuery(map.geoObjects).searchIntersect(circle);
        //objectsInsideCircle.setOptions({fillColor: '#000000'});
        var object_ts = objectsInsideCircle.search('properties.description == "ТЦ"');
        var object_road6 = objectsInsideCircle.search('properties.description == "Дорога 6"');
        var object_road4 = objectsInsideCircle.search('properties.description == "Дорога 4"');
        var object_road2 = objectsInsideCircle.search('properties.description == "Дорога 2"');
        // if(object_ts.getLength() > 0) console.log("JOPA");
        // if(object_road2.getLength() > 0) console.log("JOPA2");
        // if(object_road4.getLength() > 0) console.log("JOPA4");
        // if(object_road6.getLength() > 0) console.log("JOPA6");
        let noise_sum = object_ts.getLength()*10 + object_road2.getLength()*2 + object_road4.getLength()*4 +
        object_road6.getLength()*6 + 5;
        document.getElementById("noise").innerText = "Шум: " + noise_sum;
        console.log(noise_sum);
    });
    map.geoObjects.add(circle);
    var data = ymaps.geoXml.load(date);
        data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
    });
}

ymaps.ready(init)