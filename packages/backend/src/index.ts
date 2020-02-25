import './LoadEnv'; // Must be the first import
import app from './Server';
import { logger } from './shared/Logger';

import { sequelize } from "./db/database";

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});