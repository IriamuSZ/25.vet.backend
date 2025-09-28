/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `specie` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_of_birth` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Owner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("id") SELECT "id" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("breed", "id", "name", "ownerId") SELECT "breed", "id", "name", "ownerId" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
