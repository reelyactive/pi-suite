/*
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */

var server = require('hlc-server');


// User-configurable: port and password
var options = { httpPort: 80, password: "admin" };

// See hlc-server documentation for additional options
var app = new server(options);
 
// Expect a BLE-capable Raspberry Pi, listen on the integrated radio
app.bind( { protocol: "hci", path: null } );

// Output event stream via socket.io
app.addNotificationService( { service: "websocket", namespace: "/events" } );

// Log the events to file
app.addNotificationService( { service: "logfile", logfileName: "eventlog" } );

// Friendly console message of what to do next
console.log('\r\nBrowse to http://localhost and query the receiver id of your Pi,\r\nwhich should be listed below.\r\n');


