# cinema-Guru
rmllbrathnayaka@gmail.com Lahiru Rathnayaka lahirutech IA4

This is the initial attemp on bulding a twitteer chat bot that automatically tweet when a subscribed youtube channel post new videos
## Getting Started
This bot has two functioning parts
1. Feeding the twitter bot with new youtube URLs=>
2. Automatic tweeting with the new video links=> 

### Prerequisites
Things you need to install the software 

You need to have a Twitter profile to run the app

Install Node.js and npm
You can Download and install it from [here](https://nodejs.org/en/)
note that when you download node.js it automatically downloads and install npm

### Installing
Note that to receive the notofications from the youtube the application should be hosted on a live server.But we can test our twitter bot on a local machine.

1. clone this repo on to your local machine
```git clone https://github.com/codezilla2018/cinema-Guru.git```

2. Navigate to the project folder and install these dependecis
    Install Express
    You can install express using this command
    ```npm install express```

    Install Twit
    You can install Twit using this command 
    ```npm install twit```
    You can find the documentation about this package from [here](https://www.npmjs.com/package/twit)

    Install pubsubhubbub
    ```npm install pubsubhubbub```
You can find the documentation about this package from [here](https://www.npmjs.com/package/pubsubhubbub)

3. After that You have to add the configuration keys to the downloaded app
    1. Visit to [apps.twitter.con](https://apps.twitter.com) and sign in
    2. select Create a application and fill the credentials (for that you need to have phone number verified twitter account)
    You add your twitter profile URL if you dont have a website
    3. Select create your twitter application
    4. And select the tab "keys and access tokens" on the top and get your credentials
    5. click create my access token button at the bottom to generate access_token and access_token_secret
    6. fill the config.js file in the app with the keys you received

4. run ```node postwitter.js`` on the command line

## Deployment

You can deploy this bot in horeku for free.
documentation to deploy a app in horeku can be found in [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) 

## Subscribe to Push Notifications (Youtube Data API)
To receive the push notifications from the Youtube you have to follow the steps in the official Youtube API documentation [here](https://developers.google.com/youtube/v3/guides/push_notifications) 

#what is the call back url
It is the url of your deployed heroku app
You can get the url by typing ```heroku open``` on Heroku Cli
and automatically tou will load your call back url on browser

##testing wether deployed horeku app receive call backs from the youtube API
After fillineg and submiting the callBack url and Topic url in [here](https://pubsubhubbub.appspot.com/subscribe) a

Your deployed app will receive a GET request which can be viewed from the heroku console
like this
![screenshot_1](https://user-images.githubusercontent.com/19344653/40498277-361e4f94-5f9c-11e8-908e-0802a078f01b.jpg)


## Built With

* [Node.js](https://nodejs.org/en/) - The web framework used
* [heroku](https://heroku.com) - Deployment server
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

