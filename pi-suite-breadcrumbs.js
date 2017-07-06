/*
 * Copyright reelyActive 2017
 * We believe in an open Internet of Things
 */

var server = require('hlc-server');
var os = require('os');


// User-configurable: port and password
var options = { httpPort: 80, password: "admin", useCors: true };

// See hlc-server documentation for additional options
var app = new server(options);
 
// Listen for reelceivers on a Reel-Pi HAT
app.bind( { protocol: "serial", path: "/dev/serial0" } );

// Listen for GPS on USB
app.addGPSListener( { path: "/dev/ttyUSB0" } );

// Forward the breadcrumbs to a remote server (specify the uri!)
app.addNotificationService( { service: "breadcrumbs",
                              uri: "http://localhost:3000/breadcrumbs",
                              systemName: 'mobile-pi',
                              updateMilliseconds: 60000,
                              properties: [ 'rssi' ] } );

// OPTIONAL: Log the events to file
//app.addNotificationService( { service: "logfile", logfileName: "eventlog" } );

// Friendly console message of the IP address(es) of the Pi
var networkInterfaces = os.networkInterfaces();
console.log('\r\n*******************************************');
if(networkInterfaces.hasOwnProperty('wlan0')) {
  console.log('Browse to your Pi at http://' +
              networkInterfaces.wlan0[0].address);
}
if(networkInterfaces.hasOwnProperty('eth0')) {
  console.log('Browse to your Pi at http://' +
              networkInterfaces.eth0[0].address);
}
console.log('*******************************************\r\n');
