var timerId;

var ans;
var cnt = 2;
var c_num = 0;
var i;
var c_ans = 1;


// // ボックスを表示して、タイマーを開始
// function startQuiz() {
//     document.getElementById("quizBox").style.display = "block"; // クイズボックスを表示
//     timerId = setTimeout( out , 10000 ); // タイマーを開始
//     document.getElementById("btnStart").disabled = true; // 開始ボタンを無効化
// }


function startQuiz() {
    // カウントボックスを表示
    document.getElementById("countBox").style.display = "block";
    // クイズボックスを表示
    document.getElementById("quizBox").style.display = "block";
    // タイマーを開始
    timerId = setTimeout( out , 10000 );
    // 開始ボタンを無効化
    document.getElementById("btnStart").disabled = true;
    // 正解を1～4でランダムに決定
}

// クイズを9問実施
for(i = 1; i < 9; i++ ) {
    // 正解を1～4でランダムに決定
    var min = 1 ;
    var max = 4 ;
    // var c_ans = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    
    // 
    function ans(num) {
        // 引数を解答に代入
        ans = num;
        // 
        if(ans == c_ans) {
            c_num++;
            // カウント
            document.getElementById("countBox").textContent = "正解！" + cnt;
        }
        else {
            // カウント
            document.getElementById("countBox").textContent = "不正解！" + cnt;
        }
        cnt++;
        // 正解なら正解数をカウント
    }
}

function ans(num) {
    // クイズボックスを消す
    document.getElementById("quizBox").style.display = "none";
    // 終了ボックスを表示
    document.getElementById("endBox").style.display = "block";
    // タイマーを終了
    clearTimeout( timerId );

    if(ans == c_ans) {
        c_num++;
    }

}


// ボックスを消して、タイマーを終了
// function quit() {
//     document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
//     clearTimeout( timerId ); // タイマーを終了
//     document.getElementById("btnStart").disabled = false; // 開始ボタンを有効化
// }

// 時間切れ
function out() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    document.getElementById("outBox").style.display = "block"; // 時間切れボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}

// 結果
function result() {
    // 終了ボックスを消す
    document.getElementById("endBox").style.display = "none";
    // 結果ボックスを表示
    document.getElementById("resultBox").style.display = "block";
}
