{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":106,"column":8},"end":{"row":125,"column":99},"action":"insert","lines":["// Makes a link the Tweet clickable","    var turl = tweet.text.match( /(http|https|ftp):\\/\\/[^\\s]*/i )","    if ( turl != null ) {","      turl = tweet.text.replace( turl[0], '<a class=\"tweets\" href=\"'+turl[0]+'\" target=\"new\">'+turl[0]+'</a>' );","    } else {","      turl = tweet.text;","    }","","    var mediaUrl;","    // Does the Tweet have an image attached?","    if ( tweet.entities['media'] ) {","      if ( tweet.entities['media'][0].type == \"photo\" ) {","        mediaUrl = tweet.entities['media'][0].media_url;","      } else {","        mediaUrl = null;","      }","    }","","    // Send the Tweet to the browser","    io.sockets.emit('stream',turl, tweet.user.screen_name, tweet.user.profile_image_url, mediaUrl);"],"id":26}],[{"start":{"row":107,"column":0},"end":{"row":107,"column":2},"action":"insert","lines":["  "],"id":27},{"start":{"row":108,"column":0},"end":{"row":108,"column":2},"action":"insert","lines":["  "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"insert","lines":["  "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":2},"action":"insert","lines":["  "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":2},"action":"insert","lines":["  "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":2},"action":"insert","lines":["  "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":2},"action":"insert","lines":["  "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"insert","lines":["  "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"insert","lines":["  "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":2},"action":"insert","lines":["  "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":2},"action":"insert","lines":["  "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":2},"action":"insert","lines":["  "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":2},"action":"insert","lines":["  "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":2},"action":"insert","lines":["  "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":2},"action":"insert","lines":["  "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":2},"action":"insert","lines":["  "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":2},"action":"insert","lines":["  "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":2},"action":"insert","lines":["  "]},{"start":{"row":126,"column":0},"end":{"row":126,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":107,"column":0},"end":{"row":107,"column":2},"action":"insert","lines":["  "],"id":28},{"start":{"row":108,"column":0},"end":{"row":108,"column":2},"action":"insert","lines":["  "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"insert","lines":["  "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":2},"action":"insert","lines":["  "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":2},"action":"insert","lines":["  "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":2},"action":"insert","lines":["  "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":2},"action":"insert","lines":["  "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"insert","lines":["  "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"insert","lines":["  "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":2},"action":"insert","lines":["  "]},{"start":{"row":118,"column":0},"end":{"row":118,"column":2},"action":"insert","lines":["  "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":2},"action":"insert","lines":["  "]},{"start":{"row":120,"column":0},"end":{"row":120,"column":2},"action":"insert","lines":["  "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":2},"action":"insert","lines":["  "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":2},"action":"insert","lines":["  "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":2},"action":"insert","lines":["  "]},{"start":{"row":124,"column":0},"end":{"row":124,"column":2},"action":"insert","lines":["  "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":2},"action":"insert","lines":["  "]},{"start":{"row":126,"column":0},"end":{"row":126,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":102,"column":14},"end":{"row":103,"column":0},"action":"insert","lines":["",""],"id":29},{"start":{"row":103,"column":0},"end":{"row":103,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":103,"column":8},"end":{"row":104,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":104,"column":0},"end":{"row":104,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":104,"column":8},"end":{"row":104,"column":9},"action":"insert","lines":["c"],"id":31}],[{"start":{"row":104,"column":9},"end":{"row":104,"column":10},"action":"insert","lines":["o"],"id":32}],[{"start":{"row":104,"column":10},"end":{"row":104,"column":11},"action":"insert","lines":["n"],"id":33}],[{"start":{"row":104,"column":11},"end":{"row":104,"column":12},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":104,"column":12},"end":{"row":104,"column":13},"action":"insert","lines":["o"],"id":35}],[{"start":{"row":104,"column":13},"end":{"row":104,"column":14},"action":"insert","lines":["l"],"id":36}],[{"start":{"row":104,"column":14},"end":{"row":104,"column":15},"action":"insert","lines":["e"],"id":37}],[{"start":{"row":104,"column":15},"end":{"row":104,"column":16},"action":"insert","lines":["."],"id":38}],[{"start":{"row":104,"column":16},"end":{"row":104,"column":17},"action":"insert","lines":["l"],"id":39}],[{"start":{"row":104,"column":17},"end":{"row":104,"column":18},"action":"insert","lines":["o"],"id":40}],[{"start":{"row":104,"column":18},"end":{"row":104,"column":19},"action":"insert","lines":["g"],"id":41}],[{"start":{"row":104,"column":19},"end":{"row":104,"column":21},"action":"insert","lines":["()"],"id":42}],[{"start":{"row":104,"column":20},"end":{"row":104,"column":22},"action":"insert","lines":["\"\""],"id":43}],[{"start":{"row":104,"column":21},"end":{"row":104,"column":22},"action":"insert","lines":["s"],"id":44}],[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"insert","lines":["o"],"id":45}],[{"start":{"row":104,"column":23},"end":{"row":104,"column":24},"action":"insert","lines":["c"],"id":46}],[{"start":{"row":104,"column":24},"end":{"row":104,"column":25},"action":"insert","lines":["k"],"id":47}],[{"start":{"row":104,"column":25},"end":{"row":104,"column":26},"action":"insert","lines":["e"],"id":48}],[{"start":{"row":104,"column":26},"end":{"row":104,"column":27},"action":"insert","lines":["t"],"id":49}],[{"start":{"row":104,"column":27},"end":{"row":104,"column":28},"action":"insert","lines":["s"],"id":50}],[{"start":{"row":104,"column":28},"end":{"row":104,"column":29},"action":"insert","lines":[" "],"id":51}],[{"start":{"row":104,"column":29},"end":{"row":104,"column":30},"action":"insert","lines":["h"],"id":52}],[{"start":{"row":104,"column":30},"end":{"row":104,"column":31},"action":"insert","lines":["a"],"id":53}],[{"start":{"row":104,"column":31},"end":{"row":104,"column":32},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":104,"column":32},"end":{"row":104,"column":33},"action":"insert","lines":["f"],"id":55}],[{"start":{"row":104,"column":33},"end":{"row":104,"column":34},"action":"insert","lines":["a"],"id":56}],[{"start":{"row":104,"column":34},"end":{"row":104,"column":35},"action":"insert","lines":["l"],"id":57}],[{"start":{"row":104,"column":35},"end":{"row":104,"column":36},"action":"insert","lines":["l"],"id":58}],[{"start":{"row":104,"column":36},"end":{"row":104,"column":37},"action":"insert","lines":["a"],"id":59}],[{"start":{"row":104,"column":37},"end":{"row":104,"column":38},"action":"insert","lines":["d"],"id":60}],[{"start":{"row":104,"column":38},"end":{"row":104,"column":39},"action":"insert","lines":["o"],"id":61}],[{"start":{"row":104,"column":41},"end":{"row":104,"column":42},"action":"insert","lines":[";"],"id":62}],[{"start":{"row":129,"column":7},"end":{"row":131,"column":2},"action":"remove","lines":["","  \t","  "],"id":63}],[{"start":{"row":55,"column":64},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":64}],[{"start":{"row":56,"column":0},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":65}],[{"start":{"row":57,"column":0},"end":{"row":61,"column":3},"action":"insert","lines":["app.use(function(req, res, next) {","  res.header(\"Access-Control-Allow-Origin\", \"*\");","  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");","  next();","});"],"id":66}],[{"start":{"row":59,"column":95},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":67},{"start":{"row":60,"column":0},"end":{"row":60,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":60,"column":2},"end":{"row":62,"column":63},"action":"insert","lines":["res.header('Access-Control-Allow-Origin', 'example.com');","    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');","    res.header('Access-Control-Allow-Headers', 'Content-Type');"],"id":68}],[{"start":{"row":60,"column":45},"end":{"row":60,"column":52},"action":"remove","lines":["example"],"id":69},{"start":{"row":60,"column":45},"end":{"row":60,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":["h"],"id":70}],[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["e"],"id":71}],[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["p"],"id":72}],[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":["i"],"id":73}],[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["n"],"id":74}],[{"start":{"row":60,"column":51},"end":{"row":60,"column":52},"action":"insert","lines":["t"],"id":75}],[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":["x"],"id":76}],[{"start":{"row":60,"column":53},"end":{"row":60,"column":54},"action":"insert","lines":["o"],"id":77}],[{"start":{"row":60,"column":54},"end":{"row":60,"column":55},"action":"insert","lines":["p"],"id":78}],[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["o"],"id":79}],[{"start":{"row":60,"column":45},"end":{"row":60,"column":46},"action":"insert","lines":["h"],"id":80}],[{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":["t"],"id":81}],[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["t"],"id":82}],[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["p"],"id":83}],[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":[":"],"id":84}],[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["/"],"id":85}],[{"start":{"row":60,"column":51},"end":{"row":60,"column":52},"action":"insert","lines":["/"],"id":86}],[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":["w"],"id":87}],[{"start":{"row":60,"column":53},"end":{"row":60,"column":54},"action":"insert","lines":["w"],"id":88}],[{"start":{"row":60,"column":54},"end":{"row":60,"column":55},"action":"insert","lines":["w"],"id":89}],[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["w"],"id":90}],[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"remove","lines":["w"],"id":91}],[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["."],"id":92}],[{"start":{"row":60,"column":56},"end":{"row":60,"column":57},"action":"insert","lines":["z"],"id":93}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":94}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":20},"action":"insert","lines":["require('newrelic');"],"id":95}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"insert","lines":["var "],"id":96}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":6},"action":"insert","lines":["ne"],"id":97}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":10},"action":"insert","lines":["wrel"],"id":98}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":13},"action":"insert","lines":["ic "],"id":99}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["="],"id":100}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":101}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["c"],"id":102}],[{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["o"],"id":103}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["n"],"id":104}],[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["s"],"id":105}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["o"],"id":106}],[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["l"],"id":107}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["e"],"id":108}],[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["."],"id":109}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["l"],"id":110}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["o"],"id":111}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["g"],"id":112}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":13},"action":"insert","lines":["()"],"id":113}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["c"],"id":114}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["o"],"id":115}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["n"],"id":116}],[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["f"],"id":117}],[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["i"],"id":118}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["g"],"id":119}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["D"],"id":120}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["B"],"id":121}],[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["."],"id":122}],[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["u"],"id":123}],[{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["r"],"id":124}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["l"],"id":125}],[{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":[";"],"id":126}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":722.5,"scrollleft":0,"selection":{"start":{"row":137,"column":69},"end":{"row":137,"column":73},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":0},"timestamp":1458081599210,"hash":"32074d73c5580fb19730dce0f37beb5181f89868"}