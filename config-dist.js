module.exports = {
    debug: false,

    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',

    keywords: [],

    valid: function(tweet) {
        return true;
    },

    respond: function(tweet) {
        return 'my response goes here';
    }
};