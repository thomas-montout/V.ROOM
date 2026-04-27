<?php

namespace App\Entity;

use App\Repository\VehicleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VehicleRepository::class)]
#[ORM\InheritanceType('JOINED')] // Dit à Doctrine de lier les tables
#[ORM\DiscriminatorColumn(name: 'dtype', type: 'string')] // Ajoute une colonne secrète pour différencier les véhicules
#[ORM\DiscriminatorMap(['used' => UsedVehicle::class, 'new' => NewVehicle::class])] // Liste des classes filles
abstract class Vehicle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $brand = null;

    #[ORM\Column(length: 255)]
    private ?string $model = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $energy = null;

    #[ORM\Column(length: 255)]
    private ?string $gearbox = null;

    #[ORM\Column]
    private ?int $nbDoors = null;

    #[ORM\Column]
    private ?int $nbPlace = null;

    #[ORM\Column]
    private ?int $horses = null;

    #[ORM\Column]
    private ?float $price = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): static
    {
        $this->brand = $brand;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getEnergy(): ?string
    {
        return $this->energy;
    }

    public function setEnergy(string $energy): static
    {
        $this->energy = $energy;

        return $this;
    }

    public function getGearbox(): ?string
    {
        return $this->gearbox;
    }

    public function setGearbox(string $gearbox): static
    {
        $this->gearbox = $gearbox;

        return $this;
    }

    public function getNbDoors(): ?int
    {
        return $this->nbDoors;
    }

    public function setNbDoors(int $nbDoors): static
    {
        $this->nbDoors = $nbDoors;

        return $this;
    }

    public function getNbPlace(): ?int
    {
        return $this->nbPlace;
    }

    public function setNbPlace(int $nbPlace): static
    {
        $this->nbPlace = $nbPlace;

        return $this;
    }

    public function getHorses(): ?int
    {
        return $this->horses;
    }

    public function setHorses(int $horses): static
    {
        $this->horses = $horses;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }
}
