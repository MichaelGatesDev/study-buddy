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

  // Force create creation (i.e. clears data every load, should be used in dev only)
  await sequelize.sync({ force: true });

  // Connect ot the database
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection has been established successfully.");
      return null;
    })
    .catch((err: any) => {
      console.error("Unable to connect to the database:", err);
    });
})();
