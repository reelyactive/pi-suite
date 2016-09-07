/*
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */

var server = require('hlc-server');


// User-configurable: port and password
var options = { httpPort: 80, password: "admin", useCors: true };

// See hlc-server documentation for additional options
var app = new server(options);
 
// OPTIONAL: Expect a BLE-capable Raspberry Pi, listen on the integrated radio
app.bind( { protocol: "hci", path: null } );

// OPTIONAL: Listen for a reelyActive starter kit on the USB port
//app.bind( { protocol: "serial", path: "auto" } );

// OPTIONAL: Forward the event stream to Pareto
//app.addNotificationService( { service: "barnaclesrest",
//                              hostname: "pareto.reelyactive.com" } );

// OPTIONAL: Log the events to file
//app.addNotificationService( { service: "logfile", logfileName: "eventlog" } );

// Friendly console message of what to do next
console.log('\r\nThe receiver id of your Pi should be listed below.\r\nBrowse to your Pi via its IP address, for instance http://127.0.0.1');


