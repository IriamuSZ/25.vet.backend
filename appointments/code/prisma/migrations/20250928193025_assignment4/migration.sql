/*
  Warnings:

  - You are about to drop the column `startTime` on the `Timeslot` table. All the data in the column will be lost.
  - Added the required column `starttime` to the `Timeslot` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Timeslot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "starttime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL
);
INSERT INTO "new_Timeslot" ("endTime", "id") SELECT "endTime", "id" FROM "Timeslot";
DROP TABLE "Timeslot";
ALTER TABLE "new_Timeslot" RENAME TO "Timeslot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
