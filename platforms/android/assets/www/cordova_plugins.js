cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.websocket.WebSocket/www/phonegap-websocket.js",
        "id": "org.apache.cordova.plugin.websocket.WebSocket.websocket",
        "clobbers": [
            "WebSocket"
        ]
    }
]
});