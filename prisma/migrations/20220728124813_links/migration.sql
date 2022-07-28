-- AlterTable
ALTER TABLE `Links` MODIFY `link` VARCHAR(200) NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `category` VARCHAR(191) NULL DEFAULT 'text';
