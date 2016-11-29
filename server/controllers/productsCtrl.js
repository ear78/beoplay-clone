var app = require('../server');
var db = app.get('db');

module.exports = {
    getAllProducts: function(req,res){
        db.get_all_products(function(err, products){
            if(err){
                res.status(402).json(err);
            }
            else {
                res.status(200).json(products);
            }
        })
    },
    getIdProducts: function(req,res){
        // console.log('id',req.params.id);
        db.get_id_products([req.params.id], function(err, product){
            if(err){
                res.status(402).json(err);
            }
            else{
                res.status(200).json(product);
            }
        })
    }
}
