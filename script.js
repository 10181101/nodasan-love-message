// 表示するメッセージの配列
const messages = [
    "今日も一日、頑張りましょう！",
    "小さな一歩が大きな成果につながります。",
    "自分を信じて、挑戦してみましょう。",
    "新しい発見があるかもしれませんね。",
    "笑顔を忘れずに！",
    "素晴らしい一日になりますように。"
];

// HTML要素を取得
const messageText = document.getElementById('message-text');
const nextButton = document.getElementById('next-button');

// 現在表示されているメッセージのインデックスを保持
let currentIndex = -1;

// ランダムなメッセージを表示する関数
function displayRandomMessage() {
    let newIndex;
    do {
        // 現在のインデックスと異なる新しいランダムなインデックスを生成
        newIndex = Math.floor(Math.random() * messages.length);
    } while (newIndex === currentIndex); // 前と同じメッセージが表示されるのを防ぐ

    // 新しいインデックスを保存し、メッセージを更新
    currentIndex = newIndex;
    messageText.textContent = messages[currentIndex];
}

// ボタンにクリックイベントを設定
nextButton.addEventListener('click', displayRandomMessage);

// ページ読み込み時に最初のメッセージを表示
window.addEventListener('load', displayRandomMessage);