const weight = 68;   // 体重(kg)
const height = 1.7;  // 身長(m)

const bmi = weight / (height * height);

// コンソールにも表示（課題どおり）
console.log(bmi);
console.log(bmi.toFixed(2));

// 画面に表示
const out = document.getElementById('out');
out.textContent = `体重: ${weight}kg
身長: ${height}m
BMI : ${bmi.toFixed(2)}`;
