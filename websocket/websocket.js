'use strict'
//各クラスの読み込み
const http = require('http');
const fs = require('fs');

//httpサーパーのポート設定
const port = 8000;


//htmlファイルの読み込み
fs.readFile('index.html', 'utf-8', function(err, content){
    processFile(content);
    if(err) throw console.log(err);
});

//非同期通信の処理
function processFile(content){
    http.createServer((request, response) => {
        response.writeHead(200, {
            "Content-type": "text/html"
        });
        response.end(content);
        console.log("Sent a response");
    }).listen(port);
    console.log("The server has started and is listening on port number:" + port)
};



