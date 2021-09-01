const router = require('express').Router();
const controller = require('./controllers');

// Connect controller methods to their corresponding routes
// user routes
router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

// event routes
router.get('/events/:eventName', controller.events.get);

router.get('/events', controller.events.getAll);

router.post('/events', controller.events.post);

router.get('/events/user/:email/', controller.events.getUserEvents);

router.get('/users/:eventName/', controller.users.getAttendees);

// riders routes

router.get('/riders/:eventName', controller.riders.getAll); // get all riders for a specific event

router.get('/riders/:eventName/:driverEmail', controller.riders.get); // get all riders belonging to a specific driver for a specific event

router.post('/riders', controller.riders.post); // create a new entry for a rider for a specific event

router.put('/riders', controller.riders.put); // update a rider's driver for a specific event

// drivers routes


module.exports = router;
