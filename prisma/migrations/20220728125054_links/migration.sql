/*
  Warnings:

  - You are about to alter the column `title` on the `Links` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(101)`.
  - Made the column `category` on table `Links` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Links` MODIFY `title` VARCHAR(101) NOT NULL,
    MODIFY `link` VARCHAR(400) NULL,
    MODIFY `category` VARCHAR(20) NOT NULL DEFAULT 'text';
