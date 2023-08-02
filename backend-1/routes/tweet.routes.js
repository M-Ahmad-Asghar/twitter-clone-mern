const express = require("express");

const tweetController = require("../controllers/tweet.controller");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router();

router
  .route("/")
  .get(tweetController.getAllTweets)
  .post(verifyJWT, tweetController.createTweet);

router
  .route("/:id")
  .get(tweetController.getTweetById)
  .delete(verifyJWT, tweetController.deleteTweet);

router.route("/like/:tweetId").put(verifyJWT, tweetController.likeTweet);

router
  .route("/bookmark/:tweetId")
  .put(verifyJWT, tweetController.bookmarkTweet);

router.route("/replies/:parentTweetId").get(tweetController.getReplies);

module.exports = router;
