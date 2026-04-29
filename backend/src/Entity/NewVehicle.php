<?php

namespace App\Entity;

use App\Repository\NewVehicleRepository;
use Symfony\Component\Serializer\Attribute\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NewVehicleRepository::class)]
class NewVehicle extends Vehicle
{

    #[ORM\Column]
    #[Groups(['vehicle:read'])]
    private ?int $warranty = null;
    

    public function getWarranty(): ?int
    {
        return $this->warranty;
    }

    public function setWarranty(int $warranty): static
    {
        $this->warranty = $warranty;

        return $this;
    }
}
