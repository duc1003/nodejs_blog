const express = require('express');
const morgan = require('morgan');
                                const { engine } = require('express-handlebars');
          const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

// app.use(express.static(path.join('blog/', '')));
                                                  app.use(express.static(path.join('D:/Chuyên ngành/backend/blog/', '')));

app.use(
    express.urlencoded({
                                  extended: true,
    }),
);
// get data
app.use(express.json());

// use express to get data because if data haven't to be form-submit so be fetch, axios, json, XMLHttpRequest

// morgan
app.use(morgan('combined'));

// express-handlebars
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
