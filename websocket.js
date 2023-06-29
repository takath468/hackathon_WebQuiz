'use strict'

//各クラスの読み込み
const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');

//変数の定義
//httpサーパーのポート設定
const port = 8000;
//各ファイルのデータ読み込んでレンダリングをする
const index = fs.readFileSync('./index.html', 'UTF-8');
const style = fs.readFileSync('./css/common.css', 'UTF-8');
const js = fs.readFileSync('./js/Script.js', 'UTF-8');


//functionの定義

//httpサーバーの起動、処理
http.createServer((request, response) => {
    const url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
        case '/':
        case '/index.html':
            console.log('htmlが読み込まれました');
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(ejs.render(index));
            response.end();
            break;
        case '/css/common.css':
            console.log('cssが読み込まれました');
            response.writeHead(200, {
                "Content-Type": "text/css"
            });
            response.write(ejs.render(style));
            response.end();
            break;
        case '/js/Script.js':
            console.log('jsが読み込まれました');
            response.writeHead(200, {
                "Content-Type": "text/javascript"
            });
            response.write(ejs.render(js));
            response.end();
            break;
        default:
            console.log('no page');
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.end("404 Not Found");
            break;
    }
}).listen(port);
