const connection = require('./connection');
// const burgers = require('../public/assets/js/burgers');
const orm = {
    selectAll: (cb)=>{
        connection.query(`SELECT * FROM burgers`, function(err, data){
                if(err){
                    console.log(err)
                    throw err;
                }
                console.log(data)
                cb(data)
        })
    },
    insertOne: (newBurger, cb) => {
        console.log("newBurger",newBurger);///
        connection.query(`INSERT INTO burgers (name) VALUES ('${newBurger}')`, function(err, data) {
            console.log(this.sql);
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: (id, cb) => {
        connection.query(`UPDATE burgers SET devoured = TRUE WHERE id = ${id}`, function(err, data) {
            if (err)throw err;
            cb(data);
        })
    }

}


module.exports = orm
