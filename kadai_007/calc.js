// ここに 1 以上の正の整数をセットして動作確認します
let num = 15; // 例: 15 →「3と5の倍数です」、9 →「3の倍数です」など

// （安全策）不正値ガード：整数かつ 1 以上でない場合は警告表示
if (!Number.isInteger(num) || num < 1) {
  console.log("num には 1 以上の正の整数を入れてください。");
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}
