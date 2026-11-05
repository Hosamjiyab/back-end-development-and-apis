const express = require('express');
const app = express();
const port = 3000;

// 1 & 2. مسار الصفحة الرئيسية GET /
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 3. مسار الهوايات GET /hobbies
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// 4. مسار المهارات GET /skills
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// 5. مسار ملف التعريف بصيغة JSON GET /api/profile
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// تشغيل الخادم على المنفذ 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});