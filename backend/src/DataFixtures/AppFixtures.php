<?php

namespace App\DataFixtures;

use App\Entity\NewVehicle;
use App\Entity\UsedVehicle;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // ---------------------------------------------------
        // 1. BMW NEUVE (NewVehicle)
        // ---------------------------------------------------
        $bmwNew = new NewVehicle();
        
        // Infos générales
        $bmwNew->setBrand('BMW');
        $bmwNew->setModel('X5 M Competition');
        $bmwNew->setPrice(145000); 
        
        // Caractéristiques techniques
        $bmwNew->setType('SUV');
        $bmwNew->setEnergy('Essence');
        $bmwNew->setGearbox('Automatique');
        $bmwNew->setNbDoors(5);
        $bmwNew->setNbPlace(5);
        $bmwNew->setHorses(625); // Puissance réelle du X5 M Competition
        
        // Spécifique véhicule NEUF
        $bmwNew->setWarranty(36); // 3 ans de garantie

        $manager->persist($bmwNew);


        // ---------------------------------------------------
        // 2. BMW D'OCCASION 1 (UsedVehicle)
        // ---------------------------------------------------
        $bmwUsed1 = new UsedVehicle();
        
        $bmwUsed1->setBrand('BMW');
        $bmwUsed1->setModel('Série 3 320d');
        $bmwUsed1->setPrice(28000); 
        
        $bmwUsed1->setType('Berline');
        $bmwUsed1->setEnergy('Diesel');
        $bmwUsed1->setGearbox('Manuelle');
        $bmwUsed1->setNbDoors(4);
        $bmwUsed1->setNbPlace(5);
        $bmwUsed1->setHorses(190);
        $bmwUsed1->setGeneralState("Bon");
        $bmwUsed1->setNbPreviousOwner(2);

        
        // Spécifique véhicule D'OCCASION
        $bmwUsed1->setMileage(65000); // 65 000 km

        $manager->persist($bmwUsed1);


        // ---------------------------------------------------
        // 3. BMW D'OCCASION 2 (UsedVehicle)
        // ---------------------------------------------------
        $bmwUsed2 = new UsedVehicle();
        
        $bmwUsed2->setBrand('BMW');
        $bmwUsed2->setModel('M2 CS');
        $bmwUsed2->setPrice(85000); 
        
        $bmwUsed2->setType('Coupé');
        $bmwUsed2->setEnergy('Essence');
        $bmwUsed2->setGearbox('Automatique');
        $bmwUsed2->setNbDoors(2); // Un coupé a 2 portes
        $bmwUsed2->setNbPlace(4); // et 4 places
        $bmwUsed2->setHorses(450);
        $bmwUsed2->setGeneralState("Excellent");
        $bmwUsed2->setNbPreviousOwner(1);
        
        $bmwUsed2->setMileage(15000); // 15 000 km
        
        $manager->persist($bmwUsed2);

        // ---------------------------------------------------
        // SAUVEGARDE EN BASE DE DONNÉES
        // ---------------------------------------------------
        $manager->flush();
    }
}