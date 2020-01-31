import './LoadEnv'; // Must be the first import
import app from './Server';
import { logger } from './shared/Logger';

import { User } from "@study-buddy/common";
console.log({} as User);

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
