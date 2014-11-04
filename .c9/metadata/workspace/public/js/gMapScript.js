{"changed":true,"filter":false,"title":"gMapScript.js","tooltip":"/public/js/gMapScript.js","value":"function initialize() {\n\t\t\t\t\n    var mapProp = {\n        center:new google.maps.LatLng(43.3133505, -1.9782344),\n        zoom:14,\n        mapTypeControl: false,\n        scrollwheel: false,\n        mapTypeId:google.maps.MapTypeId.ROADMAP\n    };\n    \n    var map=new google.maps.Map(document.getElementById(\"googleMap\"), mapProp);\n    \n}\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);","undoManager":{"mark":16,"position":22,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":23}},"text":"function initialize() {"},{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":14,"column":0}},"lines":["\t\t\t\t","\t\t\t\tvar mapProp = {","\t\t\t\t\tcenter:new google.maps.LatLng(43.3133505, -1.9782344),","\t\t\t\t\tzoom:14,","\t\t\t\t\tmapTypeControl: false,","\t\t\t\t\tscrollwheel: false,","\t\t\t\t\tmapTypeId:google.maps.MapTypeId.ROADMAP","\t\t\t\t};","\t\t\t\t","\t\t\t\tvar map=new google.maps.Map(document.getElementById(\"googleMap\"), mapProp);","\t\t\t","\t\t\t}","\t\t\t"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":64}},"text":"\t\t\tgoogle.maps.event.addDomListener(window, 'load', initialize);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":4}},"text":"    "},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":61},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":8},"end":{"row":4,"column":44}},"text":"center: {lat: -34.397, lng: 150.644}"},{"action":"insertText","range":{"start":{"row":4,"column":44},"end":{"row":5,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":36}},"text":"center: {lng: 150.644, lat: -34.397}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":4},"end":{"row":5,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":44},"end":{"row":4,"column":45}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":61},"end":{"row":3,"column":62}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":45}},"text":"        center: {lng: 150.644, lat: -34.397},"},{"action":"removeText","range":{"start":{"row":4,"column":7},"end":{"row":4,"column":45}},"text":" center: {lat: -34.397, lng: 150.644},"},{"action":"removeText","range":{"start":{"row":4,"column":7},"end":{"row":5,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":5},"end":{"row":4,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":4},"end":{"row":4,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":62},"end":{"row":4,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":62},"end":{"row":3,"column":62},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415098905550}