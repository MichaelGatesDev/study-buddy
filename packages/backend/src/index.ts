import './LoadEnv'; // Must be the first import
import app from './Server';
import { logger } from './shared/Logger';
import { sequelize } from "./db/database";
import { User } from "./db/models/user";

(async (): Promise<void> => {

    // Start the server
    const port = Number(process.env.PORT || 3000);
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });

    // Initialize database
    await sequelize.sync({ force: true });

    sequelize.authenticate().then(() => {
        console.log('Database connection has been established successfully.');

        // const user = User.create({
        //     email: "email@domain.ext",
        //     passwordHash: "hash",
        //     passwordSalt: "salt",
        //     preferredName: "john",
        //     displayName: "AwesomeDoe"
        // });
        return null;
    }).catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });

})();
