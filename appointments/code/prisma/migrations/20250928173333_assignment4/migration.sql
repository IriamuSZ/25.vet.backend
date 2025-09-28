/*
  Warnings:

  - You are about to drop the `TheDate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `breed` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `theDateId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Timeslot` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Timeslot` table. All the data in the column will be lost.
  - You are about to drop the column `starttime` on the `Timeslot` table. All the data in the column will be lost.
  - Added the required column `appointmentDate` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Timeslot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Timeslot` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TheDate";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "petId" INTEGER NOT NULL,
    "appointmentDate" DATETIME NOT NULL,
    "timeslotId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    CONSTRAINT "Appointment_timeslotId_fkey" FOREIGN KEY ("timeslotId") REFERENCES "Timeslot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("id", "timeslotId") SELECT "id", "timeslotId" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE TABLE "new_Timeslot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL
);
INSERT INTO "new_Timeslot" ("id") SELECT "id" FROM "Timeslot";
DROP TABLE "Timeslot";
ALTER TABLE "new_Timeslot" RENAME TO "Timeslot";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
