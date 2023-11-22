const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let instance = null;

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE, 
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err){
        console.log(err.message);
    }
    console.log('db' + connection.state);
})

class DbService{
    static getDbServiceInstance(){
        if (!instance) {
            instance = new DbService();
        }
        return instance;
    }

    async getAllData(){
        try{
            const response = await new Promise((resolve, reject)  => {
                const query="SELECT * FROM events;";
                connection.query(query, (err, SpeechRecognitionResultList) => {
                    if (err) reject(new Error(error.message));
                    resolve(results);  
                })

            });

            console.log(response);
            return response;

        }catch(error){
            console.log(error); 
        }
    }
}

module.exports.DbService;