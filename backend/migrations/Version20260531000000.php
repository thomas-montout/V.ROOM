<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260531000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Convert vehicle.price from VARCHAR to DOUBLE PRECISION to match entity';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vehicle ALTER COLUMN price TYPE DOUBLE PRECISION USING price::double precision');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE vehicle ALTER COLUMN price TYPE VARCHAR(255) USING price::varchar');
    }
}
