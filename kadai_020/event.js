'use strict';

// 画面から要素を取得して定数に代入（合格基準①）
const text = document.getElementById('text');
const btn  = document.getElementById('btn');

// ボタンクリック時に文字を書き換える（合格基準②）
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});
