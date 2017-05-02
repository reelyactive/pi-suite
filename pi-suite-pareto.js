/*
 * Copyright reelyActive 2016-2017
 * We believe in an open Internet of Things
 */

var server = require('hlc-server');
var os = require('os');


// User-configurable: port and password
var options = { httpPort: 80, password: "admin", useCors: true };

// See hlc-server documentation for additional options
var app = new server(options);
 
// Listen for a reelyActive starter kit on the USB port
app.bind( { protocol: "serial", path: "auto" } );

// Forward the event stream to Pareto
app.addNotificationService( { service: "barnaclesrest",
                              hostname: "pareto.reelyactive.com" } );

// OPTIONAL: Log the events to file
//app.addNotificationService( { service: "logfile", logfileName: "eventlog" } );

// Friendly console message of the IP address(es) of the Pi
var networkInterfaces = os.networkInterfaces();
console.log('\r\n*************************************************************');
if(networkInterfaces.hasOwnProperty('wlan0')) {
  console.log('Browse to your Pi at http://' +
              networkInterfaces.wlan0[0].address);
}
if(networkInterfaces.hasOwnProperty('eth0')) {
  console.log('Browse to your Pi at http://' +
              networkInterfaces.eth0[0].address);
}
console.log('Visit your Pareto dashboard at https://pareto.reelyactive.com');
console.log('*************************************************************\r\n');
