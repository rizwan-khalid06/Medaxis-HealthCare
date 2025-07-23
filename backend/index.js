const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const secretKey = 'your_jwt_secret_key';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medaxis'
});

db.connect((err) => {
    if (err) {
        console.log("Connection Failed");
    } else {
        console.log("Connection Successful");
    }
});

// ========== Auth Routes ==========

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
        if (err) return res.status(500).send({ message: 'Registration failed' });
        res.status(200).send({ message: 'User registered successfully' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM user WHERE email = ?', [email], (err, result) => {
        if (err) return res.status(500).send({ message: 'Login failed' });
        if (result.length === 0) return res.status(404).send({ message: 'User not found' });

        const user = result[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, name: user.name }, secretKey, { expiresIn: '1h' });
        res.status(200).send({ token, name: user.name });
    });
});

// ========== JWT Middleware ==========

const verifyJWT = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send({ message: 'No token provided' });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'Unauthorized' });
        req.userId = decoded.id;
        req.userName = decoded.name;
        next();
    });
};

// ========== Chat Routes ==========

// Save chat with description and precautions
app.post('/save-chat', verifyJWT, (req, res) => {
    const { user_input, bot_response, description, precautions } = req.body;
    const userId = req.userId;

    const precautionsJSON = precautions ? JSON.stringify(precautions) : null;

    db.query(
        'INSERT INTO chat_history (user_id, user_input, bot_response, description, precautions, timestamp) VALUES (?, ?, ?, ?, ?, NOW())',
        [userId, user_input, bot_response, description || null, precautionsJSON],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: 'Failed to save chat' });
            }
            res.status(200).send({ message: 'Chat saved successfully' });
        }
    );
});

// Fetch chat history
app.get('/chat-history', verifyJWT, (req, res) => {
    const userId = req.userId;

    db.query(
        'SELECT user_input, bot_response, description, precautions FROM chat_history WHERE user_id = ? ORDER BY timestamp DESC',
        [userId],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: 'Failed to retrieve chat history' });
            }

            // Parse precautions JSON string back into array
            const parsedResults = results.map(chat => ({
                ...chat,
                precautions: chat.precautions ? JSON.parse(chat.precautions) : []
            }));

            res.status(200).send({ history: parsedResults });
        }
    );
});

// ========== Optional: Protected Endpoint ==========

app.get('/chatbot', verifyJWT, (req, res) => {
    res.status(200).send({ message: `Welcome to the chatbot, ${req.userName}!` });
});

// ========== Start Server ==========

app.listen(8081, () => {
    console.log("Server is Running");
});
