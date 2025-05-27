const admin = require('firebase-admin');
const serviceAccount = require('../../firebase-config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecosortify-459004-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();
async function loginUser(token) {

    const decoded = await admin.auth().verifyIdToken(token);
    const { uid, name, picture, email, email_verified } = decoded;

    return {
        user: {
            uid,
            name,
            picture,
            email,
            email_verified,
            token: token
        },
    };
}

async function checkToken(token) {
    await admin.auth().verifyIdToken(token);
}

async function getChatHistory(uid) {
    const ref = db.ref(`chatbot/${uid}`);
    const snapshot = await ref.once('value');
    const chat = snapshot.val();

    return chat
}

async function saveChatHistory(uid, chat) {
    const ref = db.ref(`chatbot/${uid}`);
    await ref.set(chat); 
}


module.exports = { loginUser, checkToken, getChatHistory, saveChatHistory}