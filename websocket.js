'use strict'

//各クラスの読み込み
const http = require('http');
const fs = require('fs');
const url = require('url');



//変数の定義
//httpサーバーの作成
const server = http.createServer(httpSetting);
//httpサーパーのポート設定
const port = 8000;



//functionの定義
//htmlファイルの読み込み
function readWebFile(src) {
    fs.readFile(src, 'utf-8', function (err, content) {
        return processFile(content);
        if (err) throw console.log(err);
    });
}

//非同期通信の処理
function processFile(content) {
    return content;
};

//httpサーバーの設定
function httpSetting(request, response) {
    switch (new url(request.url).pathname) {
        case '/':
        case '/index.html':
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(readWebFile('./site/index.html'));
            response.end();
            break;
        case '/css/style.css':
            response.writeHead(200, {
                "Content-Type": "text/css"
            });
            response.write(readWebFile('./site/css/style.css'));
            response.end();
            break;
        case '/js/main.js':
            response.writeHead(200, {
                "Content-Type": "text/javascript"
            });
            response.write(readWebFile('./site/js/main.js'));
            response.end();
            break;
        default:
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('お探しのページは見つかりません。');
            break;
    }
}

server.listen(port);
console.log("The server has started and is listening on port number:" + prot);
