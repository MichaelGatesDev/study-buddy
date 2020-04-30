import { Logger } from "@study-buddy/common";
import app from "./Server";
import { sequelize } from "./db/database";
import School from "./db/models/School";
import { add_course } from "./db/models/Course";

// i2YuoFnmtPE4_8TjLgAUO4YB

(async (): Promise<void> => {
  // Start the server
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    Logger.info("Express server started on port: " + port);
  });

  try {
    await sequelize.sync({ force: true });

    // Connect to the database
    await sequelize.authenticate();
    Logger.info("Database connection has been established successfully.");
  } catch (error) {
    // console.error(error);
    Logger.error("Unable to connect to the database! Reason: " + error?.message);
  }

  School.findOrCreate({
    where: {
      ipeds: "196246",
      name: "SUNY Plattsburgh",
      verified: true,
      website: "https://www.plattsburgh.edu/",
    },
  }).then(async (result: [School, boolean]) => {
    const school = result[0];
    const created = result[1];
    if (created) {
      console.log("Created entry for SUNY Plattsburgh");
    }
    await add_course(school.id, "CSC 152", "Computer Security and Society");
    await add_course(school.id, "CSC 123", "Discrete Math & Computer Applications");
    await add_course(school.id, "CSC 221", "Intro to Programming");
  });
})();
