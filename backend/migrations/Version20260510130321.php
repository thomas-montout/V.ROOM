<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260510130321 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE vehicle ADD images JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE vehicle DROP image');
        $this->addSql('ALTER TABLE vehicle ALTER price TYPE VARCHAR(255)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE vehicle ADD image VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE vehicle DROP images');
        $this->addSql('ALTER TABLE vehicle ALTER price TYPE DOUBLE PRECISION');
    }
}
