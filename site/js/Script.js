// タイマー
let timerId;
// index.htmlにおけるプレイヤー名
let rgt_name = "あいうえお";

// 問題数カウント
let cnt = 1;
// 正解数カウント
let c_crt = 0;

// 1～4でランダムな数字取得用
const min = 1 ;
const max = 4 ;



// 登録ボタンの処理
function name_rgt() {
    rgt_name = document.getElementById("name_get").value;

    if (rgt_name == "") {
        //条件に一致する場合(プレイヤー名が空の場合)
        alert("名前を入力してください");//エラーメッセージを出力
        return false;//送信ボタン本来の動作をキャンセル
    }
    else{
        //条件に一致しない場合(プレイヤー名が入力されている場合)
        // ページ遷移すると変数に代入された値は消える。フォームの値をクエリパラメータとしてURLに付加。
        window.location.href = "quiz.html?rgt_name=" + encodeURIComponent(rgt_name);
        return false;    // デフォルトのフォーム送信をキャンセルするために必要
    }
}

// quiz.htmlでクエリパラメータを取得し、rgt_nameの値を渡す
const params = new URLSearchParams(window.location.search);
// quiz.htmlのプレイヤー名
let p_name = params.get("rgt_name");

// 登録名の反映
document.getElementById("firstBox").innerHTML = p_name + "さんようこそ！<br>クイズを始めるには右下のボタンを押してください。<br>";
// 登録名の表示
document.getElementById("firstBox").style.display = "block";




// 始めるボタンの処理
function startQuiz() {
    // 状態ボックスを表示
    document.getElementById("stateBox").style.display = "block";
    // 1問目の問題文を取得、quizBoxの中身を書き換え
    
    // クイズボックスを表示
    document.getElementById("quizBox").style.display = "block";
    // 解答ボックスを表示
    document.getElementById("answerBox").style.display = "block";
    // タイマーを開始
    timerId = setTimeout( out , 10000 );
    // 開始ボタンを無効化
    document.getElementById("btnStart").disabled = true;
}

// クイズに1～4の数字で解答
function ans(num) {
    // 正解を1～4でランダムに決定
    let c_ans = 1;
    c_ans = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    // 正解の番号を取得、c_ansに代入


    // 現在が10問目未満
    if(cnt < 10) {
        cnt++;
        // 正解の場合→正解表示＆正解数カウント＆現在何問目か表示
        if (num == c_ans) {
            document.getElementById("stateBox").innerHTML = "制限時間：10秒<br>現在" + cnt + "/10問目<br>正解！";
            c_crt++;
        }
        // 正解の場合→不正解表示＆現在何問目か表示
        else {
            document.getElementById("stateBox").innerHTML = "制限時間：10秒<br>現在" + cnt + "/10問目<br>不正解！";
        }
    }

    // 10問終了したとき
    else {
        // カウントリセット
        cnt = 1;
        // 状態ボックスを消す
        document.getElementById("stateBox").style.display = "none";
        // クイズボックスを消す
        document.getElementById("quizBox").style.display = "none";
        // 解答ボックスを消す
        document.getElementById("answerBox").style.display = "none";
        // 終了ボックスを表示
        document.getElementById("endBox").style.display = "block";
        // 結果確認ボックスを表示
        document.getElementById("seeresultBox").style.display = "block";
        // タイマーを終了
        clearTimeout( timerId );
    }
}

// 時間切れ
function out() {
    // カウントリセット
    cnt = 1;
    // 状態ボックスを消す
    document.getElementById("stateBox").style.display = "none";
    // クイズボックスを消す
    document.getElementById("quizBox").style.display = "none";
    // 解答ボックスを消す
    document.getElementById("answerBox").style.display = "none";
    // 時間切れボックスを表示
    document.getElementById("outBox").style.display = "block";
    // 結果確認ボックスを表示
    document.getElementById("seeresultBox").style.display = "block";
     // タイマーを終了
    clearTimeout( timerId );
}

// 結果
function result() {
    // 終了ボックスを消す
    document.getElementById("endBox").style.display = "none";
    // 時間切れボックスを消す
    document.getElementById("outBox").style.display = "none";
    // 結果確認ボックスを消す
    document.getElementById("seeresultBox").style.display = "none";
    // 結果ボックスの値を更新
    document.getElementById("resultBox").textContent = p_name + "さんの結果は" + c_crt + "問正解です。";
    // 結果ボックスを表示
    document.getElementById("resultBox").style.display = "block";
    // 戻るボックスを表示
    document.getElementById("restartBox").style.display = "block";
}

// 「始める」に戻る
function restart() {
    // カウントリセット
    c_crt = 0;
    // 戻るボックスを消す
    document.getElementById("restartBox").style.display = "none";
    // 結果ボックスを消す
    document.getElementById("resultBox").style.display = "none";
    // 状態ボックスをリセット
    document.getElementById("stateBox").innerHTML = "制限時間：10秒<br>現在" + cnt + "問目<br>";
    // 開始ボタンを有効化
    document.getElementById("btnStart").disabled = false;
}
