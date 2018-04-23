
const config = {
    apiKey: process.env.API_KEY || "AIzaSyAnJuqRrV8dkmpCdW4NL6NbI1s0tMN9niE",
    authDomain: process.env.AUTH_DOMAIN || "almundo-cfe92.firebaseapp.com",
    databaseURL: process.env.DATA_BASE_URL ||"https://almundo-cfe92.firebaseio.com",
    projectId: process.env.PROJECT_ID || "almundo-cfe92",
    storageBucket: process.env.STORAHE_BUCKET || "almundo-cfe92.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID || "757080340971",
    apiUrl: process.env.API_URL || 'http://localhost:3001'
}

export default config