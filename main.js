/*
 * Blank IoT Node.js starter app.
 *
 * Use this template to start an IoT Node.js app on any supported IoT board.
 * The target board must support Node.js. It is helpful if the board includes
 * support for I/O access via the MRAA and UPM libraries.
 *
 * https://software.intel.com/en-us/xdk/docs/lp-xdk-iot
 */


// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


var mraa = require("mraa") ;

// add any UPM requires that you need
// and the rest of your app goes here
// see the samples for more detailed examples

console.log("Printing MRAA details...");
console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel

var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {
    console.log("Ready to blink!");
    
  var led = new five.Led(0);
  led.blink(500);
});