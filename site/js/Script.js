var timerId;

let c_crt = 0;
var c_ans = 1;
var cnt = 1;

const min = 1 ;
const max = 4 ;



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
}


function ans(num) {
    // 正解を1～4でランダムに決定
    let c_ans = 1;
    c_ans = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    if(cnt < 10) {
        cnt++;

        if (num == c_ans) {
            document.getElementById("countBox").textContent = "現在" + cnt + "問目\n正解！";
            c_crt++;
        }

        else {
            document.getElementById("countBox").textContent = "現在" + cnt + "問目\n不正解！";
        }
    }

    else {
        // クイズボックスを消す
        document.getElementById("quizBox").style.display = "none";
        // 終了ボックスを表示
        document.getElementById("endBox").style.display = "block";
        // タイマーを終了
        clearTimeout( timerId );
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
