var Timeliner = require('Timeliner-Core');
var redis = require('redis');
var redisClient = redis.createClient();
var indexer = Timeliner.createIndexer({
    indexRedisClient: redisClient
});

var onIndex = function onIndex() {
    console.log('onIndex', arguments);
}

indexer.index({
    text: "Lorem ipsum dolor sit amet",
    id:   process.hrtime()[0]
}, onIndex);
