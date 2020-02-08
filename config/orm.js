const connection = require('./connection');
// const burgers = require('../public/assets/js/burgers');
const orm = {
    selectAll: (cb)=>{
        connection.query(`SELECT * FROM burgers`, function(err, data){
                if(err){
                    throw err;
                }
                cb(data)
        })
    },
    insertOne: (newBurger, cb) => {
        connection.query(`INSERT INTO burgers (name) VALUES ('${newBurger}')`, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: (id, cb) => {
        connection.query(`UPDATE burgers SET devoured = TRUE WHERE id = ${id}`, function(err, res) {
            if (err)throw err;
            cb(res);
        })
    }
}


module.exports = orm
