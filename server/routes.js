const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
router.get('/users', controller.users.get);

router.post('/users', controller.users.post);



module.exports = router;
