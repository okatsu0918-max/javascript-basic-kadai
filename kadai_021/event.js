// 画面から取得したHTML要素を定数に代入（合格基準①）
const btn  = document.getElementById('btn');
const text = document.getElementById('text');

// クリック後に2秒待って文言を変更（合格基準②：非同期の利用）
btn.addEventListener('click', async () => {
  // 多重クリック防止&状態表示（任意）
  btn.disabled = true;
  const prev = text.textContent;
  text.textContent = '処理中…';

  // 2秒待つ（async/awaitを使った非同期待機）
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 文言を書き換え
  text.textContent = 'ボタンをクリックしました';

  // 必要なら再クリック可能にする
  btn.disabled = false;
});
