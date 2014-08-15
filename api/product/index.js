var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('northwind', server);

db.open(function(err, db){
	if(!err){
		console.log('Connected to Northwind database');
		db.collection('products', {strict: true}, function(err, collection){
			if(err){
				console.log('The product collection does not exist');
			}
		});
	}
});

exports.findById = function(req, res){
	var id = req.params.id;
	console.log("Retrieving product: " + id);
	db.collection('products', function(err, collection){
		collection.findOne({'ProductID':id}, function(err, item){
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	console.log("Retrieving products");
	db.collection('products', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.add = function(req, res) {
	var product = req.body;
	console.log('Adding product: ' + JSON.stringify(product));
	db.collection('products', function(err, collection) {
		collection.insert(product, {safe:true}, function(err, result) {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}
		});
	});
}
 
exports.update = function(req, res) {
	var id = req.params.id;
	var product = req.body;
	console.log('Updating Product: ' + id);
	console.log(JSON.stringify(product));
	db.collection('products', function(err, collection) {
		collection.update({'_id':id}, product, {safe:true}, function(err, result) {
			if (err) {
				console.log('Error updating product: ' + err);
				res.send({'error':'An error has occurred'});
			} else {
				console.log('' + result + ' document(s) updated');
				res.send(wine);
			}
		});
	});
}
 
exports.delete = function(req, res) {
	var id = req.params.id;
	console.log('Deleting product: ' + id);
	db.collection('products', function(err, collection) {
		collection.remove({'_id':id}, {safe:true}, function(err, result) {
			if (err) {
				res.send({'error':'An error has occurred - ' + err});
			} else {
				console.log('' + result + ' document(s) deleted');
				res.send(req.body);
			}
		});
	});
}