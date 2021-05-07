const mongoose = require('mongoose');

const config = require('../config')

class MongoDB {

    constructor(){
        this.gracesfullyClosingConnection = false;
        this.mongoose = mongoose;
        this.dbConfig = config.db;
    }
   
    connectToDB = () => {

        this.mongoose.connection.on('disconnected', () => { 
            if(!this.gracesfullyClosingConnection){
                throw ('MongoDB Disconnected Exception') 
            }
        });
    
        this.mongoose.connection.on('error', err => {  
            throw (err) } 
        );
    
        return this.mongoose.connect(this.dbConfig.mongoUri, this.dbConfig.options);
    }
    
    closeDBConnection = async () => {

        this.gracesfullyClosingConnection = true;

        await this.mongoose.connection.close();

    }
}

module.exports = new MongoDB();