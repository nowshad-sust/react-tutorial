const express = require("express");
const cors = require("cors");
const data = require("./data");
const app = express();
const port = 4000;

app.use(cors());

app.get("/products", (req, res) => {
	const keyword = req.query.keyword || "";
	const results = data.filter(
		product =>
			product.title.includes(keyword) || product.brand.includes(keyword)
	);
	res.status(200).json(results);
});

app.get("/products/:id", (req, res) => {
	const result = data.find(p => p.id === parseInt(req.params.id));
	res.status(200).json(result);
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
