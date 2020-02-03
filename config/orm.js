const connection = require('./connection');

// functions to write:
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
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
        connection.query(`INSERT INTO burgers ('name'), (${newBurger.name})`, function(err, data) {
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
