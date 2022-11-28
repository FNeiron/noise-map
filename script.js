function init() {
    var data = ymaps.geoXml.load("https://disk.yandex.ru/d/e-BDI6fBL4BX1g");
    let map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    })

    data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
    });
}



ymaps.ready(init)