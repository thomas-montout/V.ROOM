<?php

namespace App\Entity;

use App\Repository\UsedVehicleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsedVehicleRepository::class)]
class UsedVehicle extends Vehicle
{

    #[ORM\Column]
    private ?int $mileage = null;

    #[ORM\Column(length: 255)]
    private ?string $generalState = null;

    #[ORM\Column]
    private ?int $nbPreviousOwner = null;

    public function getMileage(): ?int
    {
        return $this->mileage;
    }

    public function setMileage(int $mileage): static
    {
        $this->mileage = $mileage;

        return $this;
    }

    public function getGeneralState(): ?string
    {
        return $this->generalState;
    }

    public function setGeneralState(string $generalState): static
    {
        $this->generalState = $generalState;

        return $this;
    }

    public function getNbPreviousOwner(): ?int
    {
        return $this->nbPreviousOwner;
    }

    public function setNbPreviousOwner(int $nbPreviousOwner): static
    {
        $this->nbPreviousOwner = $nbPreviousOwner;

        return $this;
    }
}
