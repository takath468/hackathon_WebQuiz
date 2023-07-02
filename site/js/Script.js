// タイマー
let timerId;
// index.htmlにおけるプレイヤー名
let rgt_name = "";

// 問題数カウント
let cnt = 1;
// 正解数カウント
let c_crt = 0;

// 1～4でランダムな数字取得用
const min = 1 ;
const max = 4 ;

// 問題文
const q1 = "問題：\n次のうち、日本の最南端に位置する都道府県はどれでしょうか？\n\n選択肢：\n1. 鹿児\n2. 沖\n3. 高\n4. 熊本県\n正解: 2";
const q2 = "問題：\n地球上で最も大きな洋はどれでしょうか？\n\n選択肢：\n1. 太平洋\n2. 大西洋\n3. インド洋\n4. 北極海\n正解: 1";
const q3 = "問題：\n酸素の化学記号は何でしょうか？\n\n選択肢：\n1. H\n2. O\n3. C\n4. O2\n正解: 2";
const q4 = "問題：\n次のうち、植物の一部ではないものはどれでしょうか？\n\n選択肢：\n1. 花\n2. 葉\n3. 根\n4. 羽毛\n正解: 4";
const q5 = "問題：\n光速はおおよそ秒速何キロメートルですか？\n\n選択肢：\n1. 10,000キロメートル\n2. 100,000キロメートル\n3. 300,000キロメートル\n4. 500,000キロメートル\n正解: 3";
const q6 = "問題：\n日本の最も高い山は次のうちどれでしょうか？\n\n選択肢：\n1. 羅臼岳\n2. 富士山\n3. 立山\n4. 焼岳\n正解: 2";
const q7 = "問題：\n水は何度で沸騰するでしょうか？\n\n選択肢：\n1. 50度\n2. 70度\n3. 90度\n4. 100度\n正解: 4";
const q8 = "問題：\n次のうち、生命の維持に欠かせない基本的な栄養素はどれでしょうか？\n\n選択肢：\n1. 糖\n2. 脂肪\n3. タンパク質\n4. ビタミン\n正解: 3";
const q9 = "問題：\n地球の自転周期はおおよそ何時間ですか？\n\n選択肢：\n1. 12時間\n2. 24時間\n3. 36時間\n4. 48時間\n正解: 2";
const q10 = "問題：\n次のうち、太陽系の中で最も内側に位置する惑星はどれでしょうか？\n\n選択肢：\n1. 地球\n2. 金星\n3. 火星\n4. 木星\n正解: 2";


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
        // ページ遷移すると変数に代入された値は消える。フォームの値をセッションストレージに保存。
        sessionStorage.setItem("rgt_name", rgt_name);
        window.location.href = "quiz.html";
        return false;    // デフォルトのフォーム送信をキャンセルするために必要
    }
}

// quiz.htmlでストレージからrgt_nameの値を渡す
const params = sessionStorage.getItem("rgt_name");
// quiz.htmlのプレイヤー名
let p_name = params;

// quiz.htmlに遷移後、登録名反映
window.onload = function() {
// 登録名の反映
document.getElementById("firstBox").innerHTML = p_name + "さんようこそ！<br>クイズを始めるには右下のボタンを押してください。<br>";
// 登録名の表示
document.getElementById("firstBox").style.display = "block";
}


// 始めるボタンの処理
function startQuiz() {
    // 登録名を消す
    document.getElementById("firstBox").style.display = "none";
    // 状態ボックスを表示
    document.getElementById("stateBox").style.display = "block";
    // 1問目の問題文を取得、quizBoxの中身を書き換え
    document.getElementById("quizBox").innerHTML = q1;
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
    // 登録名を表示
    document.getElementById("firstBox").style.display = "block";
}
