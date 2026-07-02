<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Add the missing "video" column on the vehicle table
 * (the entity declares it but no prior migration created it).
 */
final class Version20260702130000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add video column to vehicle';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vehicle ADD video VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vehicle DROP video');
    }
}
