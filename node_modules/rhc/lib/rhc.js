/**
 * A port of Openshift's `rhc` command line tool to node.js
 * @author TBD
 */
var rhc = function (setup) {
    //process array of setup vars, command line args, config files
    // establish a consistent internal variable configuration
    if (!(this instanceof rhc)) {
        return new rhc(setup);
    }
};

rhc.prototype = {
    //shared functions and static vars
};

(function(){
  // init()
}());

module.exports = rhc;
