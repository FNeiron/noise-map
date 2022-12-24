var dataj = 'https://gitcdn.link/cdn/FNeiron/noise-map/feature/dataj.geojson?token=GHSAT0AAAAAAB3HMHI5BADBXZXOLXHKU62OY4ETUXA';
var date = 'https://raw.githubusercontent.com/FNeiron/noise-map/feature/KSR_01-12-2022_23-32-49.kml?token=GHSAT0AAAAAAB3HMHI4NEWZEDSXVSXYZH2MY4RSAOQ'
function init() {
    var map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    }),
    circle = new ymaps.Circle([[53.23668610165901,50.203182910530764], 100], null, { draggable: true });
    
    document.getElementById('mark').addEventListener("click", function(){
        if (document.getElementById("mark").checked) map.geoObjects.options.set('opacity', '1');
        else {map.geoObjects.options.set('opacity', '0'); circle.options.set('opacity', '0');}
    })

    circle.events.add('drag', function () {
        var objectsInsideCircle = ymaps.geoQuery(map.geoObjects).searchIntersect(circle);
        //objectsInsideCircle.setOptions({fillColor: '#000000'});
        var object_ts = objectsInsideCircle.search('properties.description == "ТЦ"');
        var object_road6 = objectsInsideCircle.search('properties.description == "Дорога 6"');
        var object_road4 = objectsInsideCircle.search('properties.description == "Дорога 4"');
        var object_road2 = objectsInsideCircle.search('properties.description == "Дорога 2"');
        //let noise_sum = object_ts.getLength()*10 + object_road2.getLength()*2 + object_road4.getLength()*4 + object_road6.getLength()*6 + 5;
        
        let noise_sum = 0;
        if (document.getElementById("night").checked)
            noise_sum = 20 * Math.log10(10**(object_ts.getLength()*5.0/20)+10**(object_road6.getLength()*60./20)+
            10**(object_road4.getLength()*55/20)+10**(object_road2.getLength()*50.3/20)+10**((36.8+Math.random())/20));
        else
            noise_sum = 20 * Math.log10(10**(object_ts.getLength()*30.0/20)+10**(object_road6.getLength()*63.7/20)+
            10**(object_road4.getLength()*61.5/20)+10**(object_road2.getLength()*57.3/20)+10**((49.0+Math.random()*10)/20));
        document.getElementById("noise").innerText = "Шум: " + (noise_sum.toFixed(3) > 75 ? (69 + Math.random() + 6 * !document.getElementById("night").checked * Math.random()).toFixed(3) : noise_sum.toFixed(3)) + "dB";
        console.log(noise_sum);
    });
    map.geoObjects.add(circle);
    var data = ymaps.geoXml.load('https://10store.ru/kkk.kml');
        data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
        map.geoObjects.options.set('opacity', '0');
    });
}

ymaps.ready(init)