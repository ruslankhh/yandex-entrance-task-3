const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pagesRoutes = require('./pages/routes');
const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pagesRoutes);
app.use('/graphql', graphqlRoutes);

app.listen(8080, () => console.log('Express app listening on localhost:8080'));
