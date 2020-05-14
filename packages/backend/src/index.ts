import { Logger } from "@study-buddy/common";

import app from "./Server";
import { sequelize } from "./db/database";
import School from "./db/models/school";
import Course from "./db/models/course";

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
  const [sampleUniFake]: [School, boolean] = await School.findOrCreate({
    where: {
      display_name: "Fake University",
    },
  });
  await Promise.all([
    sampleUniFake.createCourse({
      course_number: "ABC 123",
      course_title: "A Boring Course",
      is_active: true,
    }),
    sampleUniFake.createCourse({
      course_number: "DEF 456",
      course_title: "Another Boring Course",
      is_active: true,
    }),
    sampleUniFake.createCourse({
      course_number: "GHI 789",
      course_title: "The Most Boring Course",
      is_active: true,
    }),
  ]);

  // create uni
  const [sampleUniPSU]: [School, boolean] = await School.findOrCreate({
    where: {
      ipeds: "196246",
      display_name: "SUNY Plattsburgh",
      is_verified: true,
      website: "https://www.plattsburgh.edu/",
    },
  });
  await Promise.all([
    sampleUniPSU.createCourse({
      course_number: "CSC 152",
      course_title: "Computer Security and Society",
      is_active: true,
    }),
    sampleUniPSU.createCourse({
      course_number: "CSC 123",
      course_title: "Discrete Math & Computer Applications",
      is_active: true,
    }),
    sampleUniPSU.createCourse({
      course_number: "CSC 221",
      course_title: "Intro to Programming",
      is_active: true,
    }),
  ]);
})();
