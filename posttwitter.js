console.log("started");
var Twit = require('twit');
//twitter api configuration keys
var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  
  // optional HTTP request timeout to apply to all requests.
});
//setting up the interval to tweet 1 hour
setInterval(tweetit, 1000*60*60);
function tweetit(){
    var tweet={
        status:'#travel sri lanka and follow celontravelstyles on instagram'
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
