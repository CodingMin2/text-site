const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// 정적 파일 경로 설정
const buildDirectory = path.join('C:', 'Users', 'user', 'Desktop', 'Hello world', 'build');
app.use(express.static(buildDirectory));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

// MariaDB 연결 설정
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'rudals3324', // 실제 코드에서는 보안을 위해 이 방법을 사용하지 마세요.
    database: 'NewUserList'
});

// 데이터베이스 연결
db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Database connected!');
});

app.use(bodyParser.json());

const saltRounds = 10;

// 회원가입 라우트
app.post('/signup', (req, res) => {
    const { username, email, password, phone } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error hashing password');
            return;
        }
        const query = "INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)";
        db.query(query, [username, email, hash, phone], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal server error');
            } else {
                res.send('Signup successful!');
            }
        });
    });
});

// 로그인 라우트
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';

    db.query(query, [username], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
            return;
        }

        if (results.length > 0) {
            const user = results[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error comparing passwords');
                } else if (isMatch) {
                    res.send('Login successful!');
                } else {
                    res.status(401).send('Incorrect username or password');
                }
            });
        } else {
            res.status(401).send('Incorrect username or password');
        }
    });
});

app.listen(5000, '0.0.0.0', () => {
    console.log('Server is running');
});
