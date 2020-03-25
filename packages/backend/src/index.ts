import "./LoadEnv"; // Must be the first import
import app from "./Server";
import { logger } from "./shared/Logger";
import { sequelize } from "./db/database";

(async (): Promise<void> => {
  // Start the server
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    logger.info("Express server started on port: " + port);
  });

  try {
    // Force create creation (i.e. clears data every load, should be used in dev only)
    await sequelize.sync({ force: false });

    // Connect ot the database
    await sequelize.authenticate();
    logger.info("Database connection has been established successfully.");
  } catch (error) {
    // console.error(error);
    logger.error(
      "Unable to connect to the database! Reason: " + error?.message
    );
  }
})();
