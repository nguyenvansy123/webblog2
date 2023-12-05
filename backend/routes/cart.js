const express = require("express");
const router = express.Router();
const { requireSigin, userMiddleware } = require("../common-middleware");
const { addItemToCart, getCartItems, removeCartItems } = require("../controllers/cart");

router.get("/user/getCartItems", requireSigin, userMiddleware, getCartItems)
router.post("/user/cart/addtocart", requireSigin, userMiddleware, addItemToCart)
router.post("/user/cart/removeItem", requireSigin, userMiddleware, removeCartItems);

module.exports = router;