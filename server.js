'use strict'
const express = require( 'express');
// const cors = require( 'cors');
const config = require( './config.js');
const home_route = require('./routes/home_router.js');
const project_route = require('./routes/project_router.js');
const practices_route = require('./routes/Practices/practices_dragonflies_router.js');
const openSource_route = require('./routes/OpenSource/openSource_router.js')
const contact_form_route = require('./routes/contact_form_route.js');
const practice_habitat = require('./routes/Practices/practice_habitat.js');
const practice_vision = require('./routes/Practices/pratice_vision.js');

// const errorHandler = require('./middleware/errorHandler.js')

const app = express();
app.use(express.json());
// app.use(cors());
app.use(home_route.routes);
app.use(project_route.routes);
app.use(practices_route.routes);
app.use(openSource_route.routes);
app.use(contact_form_route.routes);
app.use(practice_habitat.routes);
app.use(practice_vision.routes);
// app.use(errorHandler);



app.listen(config.port, ()=>{
    console.log(`server is running ${config.port}`);
})