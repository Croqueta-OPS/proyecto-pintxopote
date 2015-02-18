{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":95,"column":16},"end":{"row":95,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":17},"end":{"row":95,"column":18},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":36},"end":{"row":100,"column":37},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":37},"end":{"row":100,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":38},"end":{"row":100,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":39},"end":{"row":100,"column":40},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":40},"end":{"row":100,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":0},"end":{"row":101,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":2},"end":{"row":102,"column":0},"action":"insert","lines":["",""]},{"start":{"row":102,"column":0},"end":{"row":102,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":2},"end":{"row":102,"column":4},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":4},"end":{"row":102,"column":6},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":6},"end":{"row":102,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":7},"end":{"row":102,"column":8},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":8},"end":{"row":102,"column":10},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":9},"end":{"row":102,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":10},"end":{"row":102,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":11},"end":{"row":102,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":13},"end":{"row":102,"column":14},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":14},"end":{"row":104,"column":7},"action":"insert","lines":["","        ","      }"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":7},"end":{"row":104,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":8},"end":{"row":104,"column":9},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":9},"end":{"row":104,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":10},"end":{"row":104,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":11},"end":{"row":104,"column":12},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":12},"end":{"row":106,"column":7},"action":"insert","lines":["","        ","      }"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":3},"end":{"row":126,"column":99},"action":"remove","lines":["// Makes a link the Tweet clickable","    var turl = tweet.text.match( /(http|https|ftp):\\/\\/[^\\s]*/i )","    if ( turl != null ) {","      turl = tweet.text.replace( turl[0], '<a class=\"tweets\" href=\"'+turl[0]+'\" target=\"new\">'+turl[0]+'</a>' );","    } else {","      turl = tweet.text;","    }","","    var mediaUrl;","    // Does the Tweet have an image attached?","    if ( tweet.entities['media'] ) {","      if ( tweet.entities['media'][0].type == \"photo\" ) {","        mediaUrl = tweet.entities['media'][0].media_url;","      } else {","        mediaUrl = null;","      }","    }","","    // Send the Tweet to the browser","    io.sockets.emit('stream',turl, tweet.user.screen_name, tweet.user.profile_image_url, mediaUrl);"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":12},"end":{"row":105,"column":0},"action":"insert","lines":["",""]},{"start":{"row":105,"column":0},"end":{"row":105,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":8},"end":{"row":106,"column":0},"action":"insert","lines":["",""]},{"start":{"row":106,"column":0},"end":{"row":106,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":8},"end":{"row":125,"column":99},"action":"insert","lines":["// Makes a link the Tweet clickable","    var turl = tweet.text.match( /(http|https|ftp):\\/\\/[^\\s]*/i )","    if ( turl != null ) {","      turl = tweet.text.replace( turl[0], '<a class=\"tweets\" href=\"'+turl[0]+'\" target=\"new\">'+turl[0]+'</a>' );","    } else {","      turl = tweet.text;","    }","","    var mediaUrl;","    // Does the Tweet have an image attached?","    if ( tweet.entities['media'] ) {","      if ( tweet.entities['media'][0].type == \"photo\" ) {","        mediaUrl = tweet.entities['media'][0].media_url;","      } else {","        mediaUrl = null;","      }","    }","","    // Send the Tweet to the browser","    io.sockets.emit('stream',turl, tweet.user.screen_name, tweet.user.profile_image_url, mediaUrl);"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":2},"action":"insert","lines":["  "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":2},"action":"insert","lines":["  "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"insert","lines":["  "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":2},"action":"insert","lines":["  "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":2},"action":"insert","lines":["  "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":2},"action":"insert","lines":["  "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":2},"action":"insert","lines":["  "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"insert","lines":["  "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"insert","lines":["  "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":2},"action":"insert","lines":["  "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":2},"action":"insert","lines":["  "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":2},"action":"insert","lines":["  "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":2},"action":"insert","lines":["  "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":2},"action":"insert","lines":["  "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":2},"action":"insert","lines":["  "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":2},"action":"insert","lines":["  "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":2},"action":"insert","lines":["  "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":2},"action":"insert","lines":["  "]},{"start":{"row":126,"column":0},"end":{"row":126,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":0},"end":{"row":107,"column":2},"action":"insert","lines":["  "]},{"start":{"row":108,"column":0},"end":{"row":108,"column":2},"action":"insert","lines":["  "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"insert","lines":["  "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":2},"action":"insert","lines":["  "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":2},"action":"insert","lines":["  "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":2},"action":"insert","lines":["  "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":2},"action":"insert","lines":["  "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"insert","lines":["  "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"insert","lines":["  "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":2},"action":"insert","lines":["  "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":2},"action":"insert","lines":["  "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":2},"action":"insert","lines":["  "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":2},"action":"insert","lines":["  "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":2},"action":"insert","lines":["  "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":2},"action":"insert","lines":["  "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":2},"action":"insert","lines":["  "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":2},"action":"insert","lines":["  "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":2},"action":"insert","lines":["  "]},{"start":{"row":126,"column":0},"end":{"row":126,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":14},"end":{"row":103,"column":0},"action":"insert","lines":["",""]},{"start":{"row":103,"column":0},"end":{"row":103,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":8},"end":{"row":104,"column":0},"action":"insert","lines":["",""]},{"start":{"row":104,"column":0},"end":{"row":104,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":8},"end":{"row":104,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":9},"end":{"row":104,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":10},"end":{"row":104,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":11},"end":{"row":104,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":12},"end":{"row":104,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":13},"end":{"row":104,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":14},"end":{"row":104,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":15},"end":{"row":104,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":16},"end":{"row":104,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":17},"end":{"row":104,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":18},"end":{"row":104,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":19},"end":{"row":104,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":20},"end":{"row":104,"column":22},"action":"insert","lines":["\"\""]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":21},"end":{"row":104,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":23},"end":{"row":104,"column":24},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":24},"end":{"row":104,"column":25},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":25},"end":{"row":104,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":26},"end":{"row":104,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":27},"end":{"row":104,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":28},"end":{"row":104,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":29},"end":{"row":104,"column":30},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":30},"end":{"row":104,"column":31},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":31},"end":{"row":104,"column":32},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":32},"end":{"row":104,"column":33},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":33},"end":{"row":104,"column":34},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":34},"end":{"row":104,"column":35},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":35},"end":{"row":104,"column":36},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":36},"end":{"row":104,"column":37},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":37},"end":{"row":104,"column":38},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":38},"end":{"row":104,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":41},"end":{"row":104,"column":42},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":129,"column":7},"end":{"row":131,"column":2},"action":"remove","lines":["","  \t","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":64},"end":{"row":56,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":0},"end":{"row":57,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":0},"end":{"row":61,"column":3},"action":"insert","lines":["app.use(function(req, res, next) {","  res.header(\"Access-Control-Allow-Origin\", \"*\");","  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");","  next();","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":95},"end":{"row":60,"column":0},"action":"insert","lines":["",""]},{"start":{"row":60,"column":0},"end":{"row":60,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":2},"end":{"row":62,"column":63},"action":"insert","lines":["res.header('Access-Control-Allow-Origin', 'example.com');","    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');","    res.header('Access-Control-Allow-Headers', 'Content-Type');"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":45},"end":{"row":60,"column":52},"action":"remove","lines":["example"]},{"start":{"row":60,"column":45},"end":{"row":60,"column":46},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":51},"end":{"row":60,"column":52},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":53},"end":{"row":60,"column":54},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":54},"end":{"row":60,"column":55},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":45},"end":{"row":60,"column":46},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":51},"end":{"row":60,"column":52},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":53},"end":{"row":60,"column":54},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":54},"end":{"row":60,"column":55},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":56},"end":{"row":60,"column":57},"action":"insert","lines":["z"]}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":1860,"scrollleft":0,"selection":{"start":{"row":139,"column":0},"end":{"row":139,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":{"row":108,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1424288218981,"hash":"fe2a3d18f7e8e2d50b6e1122cfde7dc1f82cf450"}