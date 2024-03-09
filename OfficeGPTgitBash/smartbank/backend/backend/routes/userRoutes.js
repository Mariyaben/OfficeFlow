const express = require("express")
const router =  express.Router()
const { registerUser, createUser, bhimPay} = require("../controllers/userControllers")
const { protect } = require("../middleware/authMiddleware")

router.post('/register',registerUser)
router.post('/creator',createUser)
router.post("/bhimPay",protect,bhimPay)
// router.get('/' ,protect,allUsers) // Route for /user/ post and get
// router.post('/login',authUser) // Route for /user/login/ post and get
  
module.exports = router;