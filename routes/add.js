const { Router } = require("express");
const router = Router();
const server = require("../server");
router.get("/productadd", (req, res) => {
  res.render("productAdd");
});

router.post("/productadd", (req, res) => {
  const newProduct = {
    name: req.body.name,
    id: server.length + 1,
    
  };

  server.push(newProduct);

  res.redirect("/products");
});

module.exports = router;
