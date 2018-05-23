var pubSubHubbub = require("pubsubhubbub");
console.log("started");
//setting the date
var date=new Date();
var Twit = require('twit');
//twitter api configuration keys
var T = new Twit({
    consumer_key:         'BGftu8uaxE6X3EQHuOFUeHpfB',
    consumer_secret:      '0YCTvhIkSsHvAKFUlspCTZmgrNaejyuCcYzfvH7lQStL6lORqE',
    access_token:         '997930674907680768-KHft88adacdmVqcOjj05ZuuBzwsU9ly',
    access_token_secret:  '0kUT31KsrPHNAni62MiL6kMedHQ636i4uvZ7W6pFP2QRo',
    timeout_ms:           60*1000,  
  // optional HTTP request timeout to apply to all requests.
});

//receive notifications
var pubSubSubscriber = pubSubHubbub.createServer('https://cinema2.herokuapp.com');
var topic = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UCc2j-7dkYX1vjIKOjCO6zAw";
var hub = "http://pubsubhubbub.appspot.com/";

pubSubSubscriber.on("subscribe", function(data){
    console.log(data.topic + " subscribed");
});

pubSubSubscriber.listen(8080);

 ("listen", function(){
    pubSubSubscriber.subscribe(topic, hub, function(err){
        if(err){
            console.log("Failed subscribing");
        }
    });
});

//setting up the interval to tweet 1 hour
tweetit();
setInterval(tweetit, 1000*60*60);
function tweetit(){
    var tweet={
        status:'#travel sri lanka posted a new video and follow celontravelstyles on instagram '+ date
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
