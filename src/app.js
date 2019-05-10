const express = require('express');
const bodyParser = require('body-parser');

const v1Routes = require('./v1/routes');
const middleware = require('./common/middleware');
const { port } = require('./common/config');
const { syncOpenApi2and3Docs } = require('./common/utils');

syncOpenApi2and3Docs();

const app = express();

app.use('/docs', express.static('docs'));

app.use(bodyParser.json());
app.use('/api/v1/', v1Routes);
app.use(middleware.errorHandler.handleErrors);

app.listen(port, () => {
    console.log(`App running on ${port}`);
});

module.exports = app;
