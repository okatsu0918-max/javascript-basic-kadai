// 今日の日時を表す Date オブジェクトを作成
const today = new Date();

// 年・月・日を MDN のメソッドで取得
const year  = today.getFullYear();     // 例: 2025
const month = today.getMonth() + 1;    // 0-11 なので +1 → 1-12
const day   = today.getDate();         // 1-31

// 指定のフォーマットでコンソールへ出力
console.log(`${year}年${month}月${day}日`);
