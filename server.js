
var express = require('express'),
	customer = require('./api/customer'),
	order = require('./api/order'),
	product = require('./api/product'),
	supplier = require('./api/supplier');

var app = express();

// Logging
app.use(function(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
});

// API Customer
app.get('/api/customer', customer.findAll);
app.get('/api/customer/:id', customer.findById);
app.post('/api/customer', customer.add);
app.put('/api/customer/:id', customer.update);
app.delete('/api/customer/:id', customer.delete);

// API Order
app.get('/api/order', order.findAll);
app.get('/api/order/:id', order.findById);
app.post('/api/order', order.add);
app.put('/api/order/:id', order.update);
app.delete('/api/order/:id', order.delete);

// API Product
app.get('/api/product', product.findAll);
app.get('/api/product/:id', product.findById);
app.post('/api/product', product.add);
app.put('/api/product/:id', product.update);
app.delete('/api/product/:id', product.delete);

// API Supplier
app.get('/api/supplier', supplier.findAll);
app.get('/api/supplier/:id', supplier.findById);
app.post('/api/supplier', supplier.add);
app.put('/api/supplier/:id', supplier.update);
app.delete('/api/supplier/:id', supplier.delete);

// Site Directory
app.use(express.static('public'));

app.use(function(req, res){
	res.sendfile(__dirname + '/public');
})

app.listen(process.env.port || 8000);