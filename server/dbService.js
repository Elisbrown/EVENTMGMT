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
    console.log('database ' + connection.state);
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
                connection.query(query, (err, _response) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);  
                })

            });

            console.log(response);
            return response;

        }catch(error){
            console.log(error); 
        }
    }
    async InsertNewEvent(title){
        try {
            const insertID = await new Promise((resolve, reject)  => {
                const query="INSERT INTO events (title) VALUES(?);";
                connection.query(query, [title],(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertID);  
                })

            });

            console.log(insertID);
            // return response;
        } catch (error) {
            console.log(error)
        }
    }
} 


module.exports.DbService;