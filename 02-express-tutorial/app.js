const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href='/api/products'>Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const {id} = req.params
  const singleProduct = products.find(
    (product) => product.id === +id
  );
  if(!singleProduct) {
    return res.status(404).send("Product not found")
  }
  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log(`server listening on port 5000...`);
});
