import { Logger } from "@study-buddy/common";

import app from "./Server";
import { sequelize } from "./db/database";
import School from "./db/models/school";
import Course from "./db/models/course";

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
    return;
  }

  // create uni
  const [sampleUniFake] = await School.findOrCreate({
    where: {
      display_name: "Fake University",
    },
  });
  // add courses
  await Course.findOrCreate({
    where: { school_id: sampleUniFake.id, course_number: "ABC 123", course_title: "A Boring Course", is_active: true },
  });
  await Course.findOrCreate({
    where: { school_id: sampleUniFake.id, course_number: "DEF 456", course_title: "Another Boring Course", is_active: true },
  });
  await Course.findOrCreate({
    where: { school_id: sampleUniFake.id, course_number: "GHI 789", course_title: "The Most Boring Course", is_active: true },
  });

  // create uni
  const [sampleUniPSU] = await School.findOrCreate({
    where: {
      ipeds: "196246",
      display_name: "SUNY Plattsburgh",
      is_verified: true,
      website: "https://www.plattsburgh.edu/",
    },
  });
  // add courses
  await Course.findOrCreate({
    where: { school_id: sampleUniPSU.id, course_number: "CSC 152", course_title: "Computer Security and Society", is_active: true },
  });
  await Course.findOrCreate({
    where: { school_id: sampleUniPSU.id, course_number: "CSC 123", course_title: "Discrete Math & Computer Applications", is_active: true },
  });
  await Course.findOrCreate({
    where: { school_id: sampleUniPSU.id, course_number: "CSC 221", course_title: "Intro to Programming", is_active: true },
  });
})();
