// Node.js program to demonstrate the	
// os.hostname() method
	
// Allocating os module
const os = require('os');

// Printing os.hostname() value
if(os.hostname()) {
	var hostname = os.hostname();
	var platform = os.platform();
	var version = os.version();
	console.log("Hostname : " + String(hostname));

	console.log("Platform :" + String (platform));
		//console.log(os.cpus);
		//console.log(os.version);
}
