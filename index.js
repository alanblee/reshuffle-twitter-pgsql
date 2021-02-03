require("dotenv").config();
const { Reshuffle, HttpConnector } = require("reshuffle");
const { TwitterConnector } = require("reshuffle-twitter-connector");

(async () => {
  const app = new Reshuffle();

  const httpConnector = new HttpConnector(app);

  const twitter = new TwitterConnector(app, {
    customerKey: process.env.TWITTER_CUSTOMER_KEY,
    customerSecret: process.env.TWITTER_CUSTOMER_SECRET,
  });

  httpConnector.on({ method: "GET", path: "/" }, (event, app) => {
    event.res.json({ hello: "world" });
  });

  app.start(process.env.PORT || 8000);
})().catch(console.error);
