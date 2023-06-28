'use strict'
//各クラスの読み込み
const http = require('http');
const fs = require('fs');

//MIMEタイプの設定用変数
const mime = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript"
}

//httpサーパーのポート設定
const port = 8000;

//htmlファイルの読み込み
fs.readFile('site/index.html', 'utf-8', function(err, content){
    processFile(content);
    if(err) throw console.log(err);
});



//非同期通信の処理
function processFile(content){
    http.createServer((request, response) => {
        response.writeHead(200, {
            "Content-type": main[p]
        });
        console.log("Sent a response");
        response.end(content);
    }).listen(port);
    console.log("The server has started and is listening on port number:" + port)
};





