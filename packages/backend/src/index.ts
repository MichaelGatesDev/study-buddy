import app from "./Server";
import { sequelize } from "./db/database";
import { Logger } from "@study-buddy/common";

// i2YuoFnmtPE4_8TjLgAUO4YB

(async (): Promise<void> => {
  // Start the server
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    Logger.info("Express server started on port: " + port);
  });

  try {
    // Force create creation (i.e. clears data every load, should be used in dev only)
    await sequelize.sync({ force: false });

    // Connect ot the database
    await sequelize.authenticate();
    Logger.info("Database connection has been established successfully.");
  } catch (error) {
    // console.error(error);
    Logger.error("Unable to connect to the database! Reason: " + error?.message);
  }
})();
