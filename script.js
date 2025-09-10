// 表示するメッセージの配列
const messages = [
    "今日も一日、頑張りましょう！",
    "今日も大好きです。",
    "おはようございます、今日も良い日でありますように。",
    "ニコニコ笑顔で、いってらっしゃい。",
    "一度きりの人生。それが私たちのすべてだ-ジャンヌ・ダルク-",
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