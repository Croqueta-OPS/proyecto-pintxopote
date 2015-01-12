$(document).ready(function() {
    
    var moment = require("moment"),
        googleapis = require("googleapis"),
        googleCal = googleapis.calendar("v3");
        var serviceEmail = "********@developer.gserviceaccount.com",
        serviceKeyFile = "./key.pem";
    
    var authClient = new googleapis.auth.JWT(
            serviceEmail,
            serviceKeyFile,
            null,
            ["https://www.googleapis.com/auth/calendar"]
    );

    authClient.authorize(function (err, tokens) {
        alert("kk");
        if (err) {
            console.log(err);
        } 
        else {
            
            googleCal.events.list({
                auth: authClient,
                calendarId: "aartxi@gmail.com",
                fields: {
                    items: ["end","start","summary"]
                }
            }, function (err, CL) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(CL);
                }
            });
            
        }
        
    });

});