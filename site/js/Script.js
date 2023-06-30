// タイマー
var timerId;

// 問題数カウント
let cnt = 1;
// 正解数カウント
let c_crt = 0;

// 1～4でランダムな数字取得用
const min = 1 ;
const max = 4 ;

function startQuiz() {
    // カウントボックスを表示
    document.getElementById("countBox").style.display = "block";
    // クイズボックスを表示
    document.getElementById("quizBox").style.display = "block";
    // タイマーを開始
    timerId = setTimeout( out , 10000 );
    // 開始ボタンを無効化
    document.getElementById("btnStart").disabled = true;
}


function ans(num) {
    // 正解を1～4でランダムに決定
    let c_ans = 1;
    c_ans = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    // 現在が10問目未満
    if(cnt < 10) {
        cnt++;
        // 正解の場合→正解表示＆正解数カウント＆現在何問目か表示
        if (num == c_ans) {
            document.getElementById("countBox").textContent = "現在" + cnt + "問目\n正解！";
            c_crt++;
        }
        // 正解の場合→不正解表示＆現在何問目か表示
        else {
            document.getElementById("countBox").textContent = "現在" + cnt + "問目\n不正解！";
        }
    }
    // 10問終了したとき
    else {
        // カウントリセット
        cnt = 1;
        // クイズボックスを消す
        document.getElementById("quizBox").style.display = "none";
        // 終了ボックスを表示
        document.getElementById("endBox").style.display = "block";
        // タイマーを終了
        clearTimeout( timerId );
    }
}



// 時間切れ
function out() {
    // クイズボックスを消す
    document.getElementById("quizBox").style.display = "none";
    // 時間切れボックスを表示
    document.getElementById("outBox").style.display = "block";
     // タイマーを終了
    clearTimeout( timerId );
}

// 結果
function result() {
    // クイズボックスを消す
    document.getElementById("countBox").style.display = "none";
    // 終了ボックスを消す
    document.getElementById("endBox").style.display = "none";
    // 時間切れボックスを消す
    document.getElementById("outBox").style.display = "none";
    // 結果ボックスの値を更新
    document.getElementById("resultBox").textContent = "結果は" + c_crt + "問正解です。";
    // 結果ボックスを表示
    document.getElementById("resultBox").style.display = "block";
    // 戻るボックスを表示
    document.getElementById("restartBox").style.display = "block";
}

function restart() {
    // カウントリセット
    c_crt = 0;
    // 戻るボックスを消す
    document.getElementById("restartBox").style.display = "none";
    // 結果ボックスを消す
    document.getElementById("resultBox").style.display = "none";
    // 結果ボックスをリセット
    document.getElementById("countBox").textContent = "現在1問目";
    // 開始ボタンを有効化
    document.getElementById("btnStart").disabled = false;
}
