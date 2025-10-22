// 二乗を返す関数（function 版）
function square(n) {
  return n * n;
}

// 動作確認：10 の二乗 → 100
const input = 10;
const result = square(input);
console.log(result); // 100 が表示されればOK

/* --- 参考: アロー関数で書く場合（どちらでも合格） ---
const square = (n) => n * n;
const input = 10;
console.log(square(input));
---------------------------------------------------- */
