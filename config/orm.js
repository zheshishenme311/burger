const connection = require('./connection')


module.exports = {
    create: function(val, cb){
        connection.query(`INSERT INTO burgers SET ?`, val, function(err, data){
            if(err){
                console.log(err)
                throw err;
            }
            console.log(data)
            cb(data)
        })
    },
    getAll: function(cb){
        connection.query('SELECT * FROM burgers', function(err, data){
            cb(data)
        })
    },
    update: function(id, cb){
        connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?',id, function(err, data){
            cb(data)
        })
    }
}