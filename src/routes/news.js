const express = require('express');
const router = express.Router();

//import

const newsController = require('../app/controllers/NewsController');

// newsController.index()

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
