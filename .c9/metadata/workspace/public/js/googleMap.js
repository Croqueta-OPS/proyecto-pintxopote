{"filter":false,"title":"googleMap.js","tooltip":"/public/js/googleMap.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":1},"end":{"row":9,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":12},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":3},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":69},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":69},"end":{"row":7,"column":70}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":69},"end":{"row":7,"column":70}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":56},"end":{"row":7,"column":66}},"text":"map-canvas"},{"action":"insertText","range":{"start":{"row":7,"column":56},"end":{"row":7,"column":57}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":57},"end":{"row":7,"column":58}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":58},"end":{"row":7,"column":59}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":59},"end":{"row":7,"column":60}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":60},"end":{"row":7,"column":61}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":61},"end":{"row":7,"column":62}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":62},"end":{"row":7,"column":63}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":63},"end":{"row":7,"column":64}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":64},"end":{"row":7,"column":65}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":61}},"text":"google.maps.event.addDomListener(window, 'load', initialize);"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":11,"column":0}},"nl":"\n","lines":["function initialize() {","\t","\tvar mapOptions = {","\t\tcenter: { lat: -34.397, lng: 150.644},","\t\tzoom: 8","\t};","\t","\tvar map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);","","}",""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":31}},"text":"$(document).ready(function() {\t"},{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":25,"column":0}},"lines":["","\t$.ajax({","","\t\ttype: \"GET\",","\t\turl: \"/pintxos\",","\t\tdataType: \"json\",","\t\tsuccess: function(data){","","\t\t\tvar pintxos = \"<div class='pintxos_class'><h1>Pintxos</h1><h2>Degusta la variedad</h2><div class='articulos'>\";","","\t\t\tdata.forEach(function(element, index, array) {\t\t\t\t","\t\t\t\t","\t\t\t\tpintxos += \"<article><img src='img/\"+element.img+\".jpg'></img><h3>\"+element.nombre+\"</h3><p>\"+element.descripcion+\"</p></article>\";\t\t\t\t\t","","\t\t\t});\t\t","\t\t\t","\t\t\tpintxos += \"</div></div>\";","","\t\t\t$(\"#pintxos\").html(pintxos);","\t\t\t","\t\t}","","\t});",""]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":31}},"text":"\t\t\t$(\"#pintxos\").html(pintxos);"},{"action":"removeLines","range":{"start":{"row":10,"column":0},"end":{"row":19,"column":0}},"nl":"\n","lines":["","\t\t\tdata.forEach(function(element, index, array) {\t\t\t\t","\t\t\t\t","\t\t\t\tpintxos += \"<article><img src='img/\"+element.img+\".jpg'></img><h3>\"+element.nombre+\"</h3><p>\"+element.descripcion+\"</p></article>\";\t\t\t\t\t","","\t\t\t});\t\t","\t\t\t","\t\t\tpintxos += \"</div></div>\";",""]},{"action":"removeText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":114}},"text":"var pintxos = \"<div class='pintxos_class'><h1>Pintxos</h1><h2>Degusta la variedad</h2><div class='articulos'>\";"},{"action":"removeText","range":{"start":{"row":9,"column":3},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":26}},"text":"function initialize() {"},{"action":"insertText","range":{"start":{"row":9,"column":26},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":10,"column":0},"end":{"row":37,"column":0}},"lines":["\t\t\t\t\t","\t\t\t\t\tvar mapOptions = {","\t\t\t\t\t\tcenter:new google.maps.LatLng(43.3133505, -1.9782344),","\t\t\t\t        zoom:14,","\t\t\t\t        mapTypeControl: false,","\t\t\t\t        scrollwheel: false,","\t\t\t\t        mapTypeId:google.maps.MapTypeId.ROADMAP","\t\t\t\t\t}","\t\t\t\t\t","\t\t\t\t\tvar map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);","\t\t\t\t\t","\t\t\t\t\tvar myLatlng;","\t\t\t\t\t","\t\t\t\t\tdata.forEach(function(element, index, array) {","\t\t\t\t\t","\t\t\t\t\t\tmyLatlng = new google.maps.LatLng(element.coordX, element.coordY);","\t\t\t\t\t\t","\t\t\t\t\t\tvar marker = new google.maps.Marker({","\t\t\t\t\t\t\tposition: myLatlng,","\t\t\t\t\t\t\tmap: map,","\t\t\t\t\t\t\ttitle: element.nombre","\t\t\t\t\t\t});","\t\t\t\t\t","\t\t\t\t\t});","\t\t\t\t\t","\t\t\t\t}","\t\t\t\t\t"]},{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":65}},"text":"\t\t\t\tgoogle.maps.event.addDomListener(window, 'load', initialize);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":38,"column":0},"end":{"row":38,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":5},"end":{"row":10,"column":6}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":6},"end":{"row":10,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":7},"end":{"row":10,"column":8}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":9},"end":{"row":10,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":10},"end":{"row":10,"column":11}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":11},"end":{"row":10,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":13}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":13},"end":{"row":10,"column":14}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":14},"end":{"row":10,"column":15}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":15},"end":{"row":10,"column":16}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":16},"end":{"row":10,"column":18}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":17},"end":{"row":10,"column":19}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":18},"end":{"row":10,"column":19}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":19},"end":{"row":10,"column":20}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":22},"end":{"row":10,"column":23}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":5},"end":{"row":10,"column":23}},"text":"console.log(\"kk\");"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":18}},"text":"console.log(\"kk\");"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":64}},"text":"\t\t\tgoogle.maps.event.addDomListener(window, 'load', initialize);"},{"action":"removeLines","range":{"start":{"row":8,"column":0},"end":{"row":37,"column":0}},"nl":"\n","lines":["console.log(\"kk\");","\t\t\tfunction initialize() {","\t\t\t\t\t","\t\t\t\tvar mapOptions = {","\t\t\t\t\tcenter:new google.maps.LatLng(43.3133505, -1.9782344),","\t\t\t        zoom:14,","\t\t\t        mapTypeControl: false,","\t\t\t        scrollwheel: false,","\t\t\t        mapTypeId:google.maps.MapTypeId.ROADMAP","\t\t\t\t}","\t\t\t\t","\t\t\t\tvar map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);","\t\t\t\t","\t\t\t\tvar myLatlng;","\t\t\t\t","\t\t\t\tdata.forEach(function(element, index, array) {","\t\t\t\t","\t\t\t\t\tmyLatlng = new google.maps.LatLng(element.coordX, element.coordY);","\t\t\t\t\t","\t\t\t\t\tvar marker = new google.maps.Marker({","\t\t\t\t\t\tposition: myLatlng,","\t\t\t\t\t\tmap: map,","\t\t\t\t\t\ttitle: element.nombre","\t\t\t\t\t});","\t\t\t\t","\t\t\t\t});","\t\t\t\t","\t\t\t}","\t\t\t\t"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":26},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":3},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":26}},"text":"function initialize() {"},{"action":"insertText","range":{"start":{"row":9,"column":26},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":10,"column":0},"end":{"row":27,"column":0}},"lines":["  var mapOptions = {","    zoom: 8,","    center: new google.maps.LatLng(-34.397, 150.644)","  };","","  var map = new google.maps.Map(document.getElementById('map-canvas'),","      mapOptions);","}","","function loadScript() {","  var script = document.createElement('script');","  script.type = 'text/javascript';","  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +","      'callback=initialize';","  document.body.appendChild(script);","}",""]},{"action":"insertText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":27}},"text":"window.onload = loadScript;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":55},"end":{"row":15,"column":65}},"text":"map-canvas"},{"action":"insertText","range":{"start":{"row":15,"column":55},"end":{"row":15,"column":56}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":56},"end":{"row":15,"column":57}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":57},"end":{"row":15,"column":58}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":58},"end":{"row":15,"column":59}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":59},"end":{"row":15,"column":60}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":60},"end":{"row":15,"column":61}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":61},"end":{"row":15,"column":62}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":62},"end":{"row":15,"column":63}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":63},"end":{"row":15,"column":64}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":26}},"text":"\t\tsuccess: function(data){"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":["$(document).ready(function() {\t","","\t$.ajax({","","\t\ttype: \"GET\",","\t\turl: \"/pintxos\",","\t\tdataType: \"json\","]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":23,"column":0},"end":{"row":27,"column":0}},"nl":"\n","lines":["\t\t}","","\t});",""]},{"action":"removeText","range":{"start":{"row":22,"column":2},"end":{"row":23,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":9}},"text":"\t$.ajax({"},{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":5,"column":0}},"lines":["","\t\ttype: \"GET\",","\t\turl: \"/pintxos\",","\t\tdataType: \"json\","]},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":26}},"text":"\t\tsuccess: function(data){"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":24},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":1},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":1},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":2},"end":{"row":30,"column":3}},"text":"\t"},{"action":"insertText","range":{"start":{"row":30,"column":3},"end":{"row":31,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":31,"column":0},"end":{"row":35,"column":0}},"lines":["\t\t}","","\t});",""]},{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":2},"end":{"row":35,"column":3}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":1},"end":{"row":35,"column":2}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":35,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":3},"end":{"row":34,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":31}},"text":"$(document).ready(function() {\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":35,"column":3},"end":{"row":36,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":0},"end":{"row":37,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":9,"column":0}},"nl":"\n","lines":["$(document).ready(function() {\t","","$.ajax({","","type: \"GET\",","url: \"/pintxos\",","dataType: \"json\",","success: function(data){","\t"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":23,"column":0},"end":{"row":28,"column":0}},"nl":"\n","lines":["\t\t\t","}","","});",""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":3}},"text":"\t\t\t"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":27},"end":{"row":19,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":27},"end":{"row":19,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":34},"end":{"row":17,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":68},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":68},"end":{"row":7,"column":69}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":68},"end":{"row":7,"column":69}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":24},"end":{"row":11,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":63},"end":{"row":14,"column":82}},"text":"callback=initialize"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":23}},"text":"\t'callback=initialize';"},{"action":"removeText","range":{"start":{"row":14,"column":84},"end":{"row":14,"column":85}},"text":"+"},{"action":"removeText","range":{"start":{"row":14,"column":84},"end":{"row":15,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":83},"end":{"row":14,"column":84}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":83},"end":{"row":14,"column":84}},"text":";"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":84},"end":{"row":14,"column":84},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415562071697,"hash":"184c66dfc26e8d9dcfe7a8c3a6cb105a7c99c03b"}