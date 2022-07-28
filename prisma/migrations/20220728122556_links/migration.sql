-- CreateTable
CREATE TABLE `Links` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
