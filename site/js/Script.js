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
const q1 = "問題：<br>次のうち、日本の最南端に位置する都道府県はどれでしょうか？<br><br>選択肢：<br>1. 鹿児<br>2. 沖<br>3. 高<br>4. 熊本県<br>";
const q2 = "問題：<br>地球上で最も大きな洋はどれでしょうか？<br><br>選択肢：<br>1. 太平洋<br>2. 大西洋<br>3. インド洋<br>4. 北極海<br>";
const q3 = "問題：<br>酸素の化学記号は何でしょうか？<br><br>選択肢：<br>1. H<br>2. O<br>3. C<br>4. O2<br>";
const q4 = "問題：<br>次のうち、植物の一部ではないものはどれでしょうか？<br><br>選択肢：<br>1. 花<br>2. 葉<br>3. 根<br>4. 羽毛<br>";
const q5 = "問題：<br>光速はおおよそ秒速何キロメートルですか？<br><br>選択肢：<br>1. 10,000キロメートル<br>2. 100,000キロメートル<br>3. 300,000キロメートル<br>4. 500,000キロメートル<br>";
const q6 = "問題：<br>日本の最も高い山は次のうちどれでしょうか？<br><br>選択肢：<br>1. 羅臼岳<br>2. 富士山<br>3. 立山<br>4. 焼岳<br>";
const q7 = "問題：<br>水は何度で沸騰するでしょうか？<br><br>選択肢：<br>1. 50度<br>2. 70度<br>3. 90度<br>4. 100度<br>";
const q8 = "問題：<br>次のうち、生命の維持に欠かせない基本的な栄養素はどれでしょうか？<br><br>選択肢：<br>1. 糖<br>2. 脂肪<br>3. タンパク質<br>4. ビタミン<br>";
const q9 = "問題：<br>地球の自転周期はおおよそ何時間ですか？<br><br>選択肢：<br>1. 12時間<br>2. 24時間<br>3. 36時間<br>4. 48時間<br>";
const q10 = "問題：<br>次のうち、太陽系の中で最も内側に位置する惑星はどれでしょうか？<br><br>選択肢：<br>1. 地球<br>2. 金星<br>3. 火星<br>4. 木星<br>";



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
    // 正解の番号を取得、c_ansに代入
    document.getElementById("quizBox").innerHTML = q1;
    c_ans = 2;

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
    // 正解の番号を取得、c_ansに代入


    // 現在が10問目未満
    if(cnt < 10) {
        cnt++;
        switch (cnt){
            case 2:
                document.getElementById("quizBox").innerHTML = q2;
                c_ans = 1;
                break;
            case 3:
                document.getElementById("quizBox").innerHTML = q3;
                c_ans = 2;
                break;
            case 4:
                document.getElementById("quizBox").innerHTML = q4;
                c_ans = 4;
                break;
            case 5:
                document.getElementById("quizBox").innerHTML = q5;
                c_ans = 3;
                break;
            case 6:
                document.getElementById("quizBox").innerHTML = q6;
                c_ans = 2;
                break;
            case 7:
                document.getElementById("quizBox").innerHTML = q7;
                c_ans = 4;
                break;
            case 8:
                document.getElementById("quizBox").innerHTML = q8;
                c_ans = 3;
                break;
            case 9:
                document.getElementById("quizBox").innerHTML = q9;
                c_ans = 2;
                break;
            case 10:
                document.getElementById("quizBox").innerHTML = q10;
                c_ans = 2;
                break;
        }
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
