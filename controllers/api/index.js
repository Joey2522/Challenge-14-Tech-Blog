const router = require('express').Router();

const blogRoutes = require('./blog');

router.use('/blog', blogRoutes);

module.exports = router;