var timerId;

// ボックスを表示して、タイマーを開始
function startQuiz() {
    document.getElementById("quizBox").style.display = "block"; // クイズボックスを表示
    timerId = setTimeout( out , 5000 ); // タイマーを開始
    document.getElementById("btnStart").disabled = true; // 開始ボタンを無効化
}

// ボックスを消して、タイマーを終了
function quit() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    clearTimeout( timerId ); // タイマーを終了
    document.getElementById("btnStart").disabled = false; // 開始ボタンを有効化
}

// 最初に戻る
function restart() {
    document.getElementById("ictBox").style.display = "none"; // 不正解ボックスを消す
    document.getElementById("crtBox").style.display = "none"; // 正解ボックスを消す
    document.getElementById("outBox").style.display = "none"; // 時間切れボックスを消す
    document.getElementById("btnStart").disabled = false; // 開始ボタンを有効化
}


// 結果(時間切れ)
function out() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    document.getElementById("outBox").style.display = "block"; // 時間切れボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}

// 結果1(不正解)
function ans1() {
    document.getElementById("quizBox").style.display = "none"; // ボックスを消す
    document.getElementById("ictBox").style.display = "block"; // 不正解ボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}

// 結果2(不正解)
function ans2() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    document.getElementById("ictBox").style.display = "block"; // 不正解ボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}

// 結果3(正解)
function ans3() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    document.getElementById("crtBox").style.display = "block"; // 正解ボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}

// 結果4(不正解)
function ans4() {
    document.getElementById("quizBox").style.display = "none"; // クイズボックスを消す
    document.getElementById("ictBox").style.display = "block"; // 不正解ボックスを表示
    clearTimeout( timerId ); // タイマーを終了
}
