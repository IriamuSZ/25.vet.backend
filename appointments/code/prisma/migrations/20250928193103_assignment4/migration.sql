-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timeslot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "starttime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL
);
INSERT INTO "new_Timeslot" ("endTime", "id", "starttime") SELECT "endTime", "id", "starttime" FROM "Timeslot";
DROP TABLE "Timeslot";
ALTER TABLE "new_Timeslot" RENAME TO "Timeslot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
