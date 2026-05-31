<?php

namespace App\Entity;

use App\Repository\UsedVehicleRepository;
use Symfony\Component\Serializer\Attribute\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsedVehicleRepository::class)]
class UsedVehicle extends Vehicle
{

    #[ORM\Column]
    #[Groups(['vehicle:read'])]
    private ?int $mileage = null;

    #[ORM\Column(length: 255)]
    #[Groups(['vehicle:read'])]
    private ?string $generalState = null;

    #[ORM\Column]
    #[Groups(['vehicle:read'])]
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
