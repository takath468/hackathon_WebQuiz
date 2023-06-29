'use strict'

//各クラスの読み込み
const http = require('http');
const fs = require('fs');
const url = require('url');



//変数の定義
//httpサーパーのポート設定
const port = 8000;



//functionの定義
//htmlファイルの読み込み
function readWebFile(src){
    return fs.readFileSync(src);
}


//httpサーバーの起動、処理
http.createServer((request,response)=>{
    const url_parts = url.parse(request.url)
    switch (url_parts.pathname) {
        case '/':
        case '/index.html':
            console.log('index.html');
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(readWebFile("./site/index.html"));
            response.end();
            break;
        case '/css/style.css':
            console.log('style.css');
            response.writeHead(200, {
                "Content-Type": "text/css"
            });
            response.write(readWebFile("./site/css/style.css"));
            response.end();
            break;
        case '/js/main.js':
            console.log('main.js');
            response.writeHead(200, {
                "Content-Type": "text/javascript"
            });
            response.write(readWebFile("./site/js/main.js"));
            response.end();
            break;
            default:
            console.log('no page');
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end();
            break;
    }
}).listen(port);
