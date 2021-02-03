require("dotenv").config();
const { Reshuffle } = require("reshuffle");
const { TwitterConnector } = require("reshuffle-twitter-connector");

(async () => {
  const app = new Reshuffle();
  const twitter = new TwitterConnector(app, {
    customerKey: process.env.TWITTER_CUSTOMER_KEY,
    customerSecret: process.env.TWITTER_CUSTOMER_SECRET,
  });

  app.start(8000);
})().catch(console.error);
