const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const router = express.Router();

const swaggerDoc = YAML.load(path.join(__dirname, '../public/swagger.yml'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/redoc.html'));
});

router.get('/swagger/raw', (req, res) => {
    res.json(swaggerDoc);
});

const options = {
    // explorer: true,
};
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

module.exports = router;