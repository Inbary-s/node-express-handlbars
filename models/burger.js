const orm = require('../config/orm')

// call the ORM functions using burger specific input for the ORM
const burger = {
    getAll: function(cb){
        orm.selectAll(function(res){
            cb(res)
        })
    },
    insertOne: function(data, cb){
        orm.insertOne(data, function(res){
            cb(res)
        })
    },
    update: function(cb){
        orm.updateOne(function(res){
            cb(res)
        })
    }
}
module.exports = burger