const router = require('express').Router();
const courseRoutes = require('./thoughtRoutes');
const studentRoutes = require('./userRoutes');

router.use('/thoughts', courseRoutes);
router.use('/users', studentRoutes);

module.exports = router;