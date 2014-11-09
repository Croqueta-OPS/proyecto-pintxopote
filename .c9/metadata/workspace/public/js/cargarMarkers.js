{"filter":false,"title":"cargarMarkers.js","tooltip":"/public/js/cargarMarkers.js","undoManager":{"mark":89,"position":89,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":26}},"text":"function cargarMarkers() {"},{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":38,"column":0}},"lines":["\t","setTimeout(function() {","","\t$.ajax({","","\t\ttype: \"GET\",","\t\turl: \"/bares\",","\t\tdataType: \"json\",","\t\tsuccess: function(data){","\t\t\t","\t\t\tconsole.log(\"kk\");","","\t\t\tdata.forEach(function(element, index, array) {","\t\t\t\t","\t\t\t\tmyLatlng = new google.maps.LatLng(element.coordX, element.coordY);","\t\t\t\t","\t\t\t\t\tconsole.log(map.getCenter()); //verifico que el mapa esta creado siempre antes de cargar los puntos (y siempre lo esta)","","\t\t\t\t","\t\t\t\tvar marker = new google.maps.Marker({","\t\t\t\t\tposition: myLatlng,","\t\t\t\t\tmap : map,","\t\t\t\t\ttitle: element.nombre","\t\t\t\t});","\t\t\t\t","\t\t\t\tarrayBares.push(marker);","","\t\t\t});","\t\t\t","\t\t}","","\t});","","","}, 1000);","\t","}"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":23}},"text":"setTimeout(function() {"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":2,"column":0}},"nl":"\n","lines":["function cargarMarkers() {","\t"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":33,"column":0},"end":{"row":36,"column":0}},"nl":"\n","lines":["}, 1000);","\t","}"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":4},"end":{"row":31,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":4},"end":{"row":31,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":4},"end":{"row":31,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":16},"end":{"row":13,"column":17}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":16},"end":{"row":13,"column":17}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":16},"end":{"row":13,"column":17}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":17},"end":{"row":13,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":18},"end":{"row":13,"column":19}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":19},"end":{"row":13,"column":20}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":20},"end":{"row":13,"column":21}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":21},"end":{"row":13,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":22},"end":{"row":13,"column":23}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":23},"end":{"row":13,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":24},"end":{"row":13,"column":25}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":25},"end":{"row":13,"column":26}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":26},"end":{"row":13,"column":27}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":27},"end":{"row":13,"column":28}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":28},"end":{"row":13,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":28},"end":{"row":13,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":25},"end":{"row":13,"column":28}},"text":"get"},{"action":"insertText","range":{"start":{"row":13,"column":25},"end":{"row":13,"column":39}},"text":"getElementById"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":39},"end":{"row":13,"column":40}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":40},"end":{"row":13,"column":41}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":41},"end":{"row":13,"column":42}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":42},"end":{"row":13,"column":43}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":43},"end":{"row":13,"column":44}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":44},"end":{"row":13,"column":45}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":40},"end":{"row":13,"column":42}},"text":"''"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":41},"end":{"row":13,"column":42}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":42},"end":{"row":13,"column":43}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":43},"end":{"row":13,"column":44}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":44},"end":{"row":13,"column":45}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":45},"end":{"row":13,"column":46}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":46},"end":{"row":13,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":47},"end":{"row":13,"column":48}},"text":"M"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":48},"end":{"row":13,"column":49}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":49},"end":{"row":13,"column":50}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":59},"end":{"row":13,"column":61}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":3},"end":{"row":22,"column":27}},"text":"arrayBares.push(marker);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":3}},"text":"\t\t\t"},{"action":"removeText","range":{"start":{"row":20,"column":6},"end":{"row":21,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":3}},"text":"\t\t\t"},{"action":"removeText","range":{"start":{"row":20,"column":6},"end":{"row":21,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":20},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":2},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":9,"column":4}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":5}},"text":"set"},{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":12}},"text":"setTimeout"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":12},"end":{"row":9,"column":14}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":12},"end":{"row":9,"column":14}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":11},"end":{"row":9,"column":12}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":10},"end":{"row":9,"column":11}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":9},"end":{"row":9,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":8},"end":{"row":9,"column":9}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":7},"end":{"row":9,"column":8}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":7}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":4},"end":{"row":9,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":5}},"text":"set"},{"action":"insertText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":12}},"text":"setTimeout"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":12}},"text":"\tsetTimeout"},{"action":"insertText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":26}},"text":"/*setTimeout(function() {"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":2},"end":{"row":9,"column":3}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":2}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":1},"end":{"row":9,"column":5}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":5},"end":{"row":25,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":2},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":26,"column":2},"end":{"row":26,"column":12}},"text":"\t}, 2000);"},{"action":"removeText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":3}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":5}},"text":"\t    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":8},"end":{"row":15,"column":169}},"text":"console.log(document.getElementById('googleMap').getMap().getCenter()); //verifico que el mapa esta creado siempre antes de cargar los puntos (y siempre lo esta)"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":7}},"text":"    \t\t\t"},{"action":"removeText","range":{"start":{"row":13,"column":73},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":8}},"text":"    \t\t\t\t"},{"action":"removeText","range":{"start":{"row":13,"column":73},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":13,"column":73},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":5},"end":{"row":9,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":6},"end":{"row":9,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":6},"end":{"row":23,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":2}},"text":"\t\t"},{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"nl":"\n","lines":["\t\tconsole.log(\"kk\");"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":2},"end":{"row":7,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":6},"end":{"row":21,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":5},"end":{"row":21,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":6},"end":{"row":7,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":5},"end":{"row":7,"column":6}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":8},"end":{"row":21,"column":9}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":8},"end":{"row":21,"column":9}},"text":"1"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":25,"column":3},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415569859328,"hash":"d838b548c72f2de68fd88f017795e8ea8257801b"}