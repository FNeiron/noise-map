function calculating_noise(map, circle) {
    var objectsInsideCircle = ymaps.geoQuery(map.geoObjects).searchIntersect(circle);
    //objectsInsideCircle.setOptions({fillColor: '#000000'});
    var object_ts = objectsInsideCircle.search('properties.description == "ТЦ"');
    var object_road6 = objectsInsideCircle.search('properties.description == "Дорога 6"');
    var object_road4 = objectsInsideCircle.search('properties.description == "Дорога 4"');
    var object_road2 = objectsInsideCircle.search('properties.description == "Дорога 2"');
    //let noise_sum = object_ts.getLength()*10 + object_road2.getLength()*2 + object_road4.getLength()*4 + object_road6.getLength()*6 + 5;
        
    let Del = [3, 2.5, 2, 1.8, 1.5, 1.2, 1, 0.8, 0.6, 0.5];

    let noise_sum = document.getElementById("night").checked ? 36.8 : 40;
    //console.log(object_ts, object_road6, object_road4, object_road2);
    let delta = 0
    let flag1 = 1;
    let flag2 = 1;
    let flag3 = 1;
    let flag4 = 1;
    if (!document.getElementById("night").checked) {
        for (let i = 0; i < 4; i++) {
            if (object_road6.getLength() > 0 && flag4) {
                for (let k = object_road6.getLength(); k > 0; k--) {
                    if (noise_sum < 64) {
                        delta = 64 - noise_sum;
                        noise_sum = 64;
                    }
                    else delta = noise_sum - 64;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                    noise_sum += Del[f];             
                }
                flag4 = 0;
            }
            else if (object_road4.getLength() > 0 && flag3) {
                for (let k = object_road4.getLength(); k > 0; k--) {
                    if (noise_sum < 61) {
                        delta = 61 - noise_sum;
                        noise_sum = 61;
                    }
                    else delta = noise_sum - 61;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                    noise_sum += Del[f];             
                }
                flag3 = 0;
            }
            else if (object_road2.getLength() > 0 && flag2) {
                for (let k = object_road2.getLength(); k > 0; k--) {
                    if (noise_sum < 57.3) {
                        delta = 57.3 - noise_sum;
                        noise_sum = 57.3;
                    }
                    else delta = noise_sum - 57.3;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                        noise_sum += Del[f];             
                }
                flag2 = 0;
            }
            else if (object_ts.getLength() > 0 && flag1) {
                if (noise_sum < 38) {
                    delta = 38 - noise_sum;
                    noise_sum = 38;
                }
                else delta = noise_sum - 38;

                let f = Math.round(delta);
                if (f == 10)
                    noise_sum += 0.4;
                else if (f > 10 && f < 15)
                    noise_sum += 0.3;
                else if (f == 15)
                    noise_sum += 0.2;
                else if (f > 15 && f < 20)
                    noise_sum += 0.1;
                else if (f >= 20)
                    noise_sum += 0;
                else
                    noise_sum += Del[f];

                flag1 = 0;
            }
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            if (object_road6.getLength() > 0 && flag4) {
                for (let k = object_road6.getLength(); k > 0; k--) {
                    if (noise_sum < 63) {
                        delta = 63 - noise_sum;
                        noise_sum = 63;
                    }
                    else delta = noise_sum - 63;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                    noise_sum += Del[f];             
                }
                flag4 = 0;
            }
            else if (object_road4.getLength() > 0 && flag3) {
                for (let k = object_road4.getLength(); k > 0; k--) {
                    if (noise_sum < 53) {
                        delta = 53 - noise_sum;
                        noise_sum = 53;
                    }
                    else delta = noise_sum - 53;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                    noise_sum += Del[f];             
                }
                flag3 = 0;
            }
            else if (object_road2.getLength() > 0 && flag2) {
                for (let k = object_road2.getLength(); k > 0; k--) {
                    if (noise_sum < 45) {
                        delta = 45 - noise_sum;
                        noise_sum = 45;
                    }
                    else delta = noise_sum - 45;
    
                    let f = Math.round(delta);
                    if (f == 10)
                        noise_sum += 0.4;
                    else if (f > 10 && f < 15)
                        noise_sum += 0.3;
                    else if (f == 15)
                        noise_sum += 0.2;
                    else if (f > 15 && f < 20)
                        noise_sum += 0.1;
                    else if (f >= 20)
                        noise_sum += 0;
                    else
                        noise_sum += Del[f];             
                }
                flag2 = 0;
            }
            else if (object_ts.getLength() > 0 && flag1) {
                if (noise_sum < 36) {
                    delta = 36 - noise_sum;
                    noise_sum = 36;
                }
                else delta = noise_sum - 36;

                let f = Math.round(delta);
                if (f == 10)
                    noise_sum += 0.4;
                else if (f > 10 && f < 15)
                    noise_sum += 0.3;
                else if (f == 15)
                    noise_sum += 0.2;
                else if (f > 15 && f < 20)
                    noise_sum += 0.1;
                else if (f >= 20)
                    noise_sum += 0;
                else
                    noise_sum += Del[f];

                flag1 = 0;
            }
        }
    }


    // if (document.getElementById("night").checked)
    //     noise_sum = 20 * Math.log10(10**(object_ts.getLength()*5.0/20)+10**(object_road6.getLength()*60./20)+
    //     10**(object_road4.getLength()*55/20)+10**(object_road2.getLength()*50.3/20)+10**((36.8+Math.random())/20));
    // else
    //     noise_sum = 20 * Math.log10(10**(object_ts.getLength()*30.0/20)+10**(object_road6.getLength()*63.7/20)+
    //     10**(object_road4.getLength()*61.5/20)+10**(object_road2.getLength()*57.3/20)+10**((49.0+Math.random()*10)/20));
    
    document.getElementById("noise").innerText = "Шум: " + noise_sum + "dB";
    console.log(noise_sum);
}


function init() {
    var map = new ymaps.Map('map', {
        center: [53.23668610165901,50.203182910530764],
        zoom: 15
    }),
    circle = new ymaps.Circle([[53.23668610165901,50.203182910530764], 100], null, { draggable: true });
    
    calculating_noise(map, circle);
    
    document.getElementById('mark').addEventListener("click", function(){
        if (document.getElementById("mark").checked) map.geoObjects.options.set('opacity', '1');
        else {map.geoObjects.options.set('opacity', '0'); circle.options.set('opacity', '1');}
    });

    document.getElementById('night').addEventListener("click", function(){
        calculating_noise(map, circle);
    });

    circle.events.add('drag', function () {
        calculating_noise(map, circle);
    });
    circle.options.set('zIndex', 1000)
    map.geoObjects.add(circle);
    var data = ymaps.geoXml.load('https://10store.ru/kkk.kml');
        data.then(function(res) {
        // Добавление объектов на карту.
        map.geoObjects.add(res.geoObjects);
        map.geoObjects.options.set('opacity', '0');
    });
}

ymaps.ready(init)