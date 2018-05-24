var pubSubHubbub = require("pubsubhubbub");
//setting the date
var date=new Date();
var Twit = require('twit');
//setting up the configuration file
var config=require('./config');
//twitter api configuration keys
var T = new Twit(config);
console.log("started");
//receive notifications
var pubSubSubscriber = pubSubHubbub.createServer('https://cinema2.herokuapp.com');
var topic = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UCc2j-7dkYX1vjIKOjCO6zAw";
var hub = "http://pubsubhubbub.appspot.com/";

pubSubSubscriber.on("subscribe", function(data){
    console.log(data.topic + " subscribed");
});

pubSubSubscriber.listen(process.env.PORT || 8080);

 ("listen", function(){
    pubSubSubscriber.subscribe(topic, hub, function(err){
        if(err){
            console.log("Failed subscribing");
        }
    });
});

// fetch the recieved xml file and append the new url to the array 
    //code come here

url=['https://www.youtube.com/watch?v=ka_5cFW8kMU'];

//setting up the interval to tweet 1 hour
tweetit();
setInterval(tweetit, 1000*60*60);
function tweetit(){
    var tweet={
        status:'view the trailer '+url[0]+ date
    }
    T.post('statuses/update',tweet,tweeted);
    
    function tweeted(err,data,response){
    if(err){
        console.log(err);
    }   else{
        console.log("it worked");
        }
    }

}
