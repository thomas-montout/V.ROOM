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
        $bmwNew->setImage('BMWX5xDrive50e.webp '); // Image du véhicule
        $bmwNew->setVideo('bmwx5xdrive50e.mp4'); // Vidéo du véhicule

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
        $bmwUsed1->setImage('BMW320dxDrive.webp'); // Image du véhicule
        $bmwUsed1->setVideo('BMW320dxDrive.mp4'); // Vidéo du véhicule

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
        $bmwUsed2->setImage('BMWM2CS.webp'); // Image du véhicule
        $bmwUsed2->setVideo('BMWM2CS.mp4'); // Vidéo du véhicule
        $bmwUsed2->setMileage(15000); // 15 000 km
        
        $manager->persist($bmwUsed2);

        // ---------------------------------------------------
        // 4. BMW NEUVE (NewVehicle) - Electrique
        // ---------------------------------------------------
        $bmwNew2 = new NewVehicle();
        
        $bmwNew2->setBrand('BMW');
        $bmwNew2->setModel('i4 eDrive40');
        $bmwNew2->setPrice(63500); 
        
        $bmwNew2->setType('Berline');
        $bmwNew2->setEnergy('Electrique');
        $bmwNew2->setGearbox('Automatique');
        $bmwNew2->setNbDoors(5);
        $bmwNew2->setNbPlace(5);
        $bmwNew2->setHorses(340);
        $bmwNew2->setWarranty(24);
        $bmwNew2->setImage('BMWi4xDrive40.webp'); // Image du véhicule
        $bmwNew2->setVideo('BMWi4xDrive40.mp4'); // Vidéo du véhicule
        $manager->persist($bmwNew2);

        // ---------------------------------------------------
        // 5. BMW NEUVE (NewVehicle) - Break sportif
        // ---------------------------------------------------
        $bmwNew3 = new NewVehicle();
        
        $bmwNew3->setBrand('BMW');
        $bmwNew3->setModel('M3 Competition Touring');
        $bmwNew3->setPrice(116000); 
        
        $bmwNew3->setType('Break');
        $bmwNew3->setEnergy('Essence');
        $bmwNew3->setGearbox('Automatique');
        $bmwNew3->setNbDoors(5);
        $bmwNew3->setNbPlace(5);
        $bmwNew3->setHorses(510);
        $bmwNew3->setWarranty(36);
        $bmwNew3->setImage('BMWM3CSTouring.webp'); // Image du véhicule
        $bmwNew3->setVideo('BMWM3CSTouring.mp4'); // Vidéo du véhicule

        $manager->persist($bmwNew3);

        // ---------------------------------------------------
        // 6. BMW D'OCCASION 3 (UsedVehicle) - Compacte
        // ---------------------------------------------------
        $bmwUsed3 = new UsedVehicle();
        $bmwUsed3->setBrand('BMW');
        $bmwUsed3->setModel('Série 1 116');
        $bmwUsed3->setPrice(25500);
        $bmwUsed3->setType('Compacte');
        $bmwUsed3->setEnergy('Essence');
        $bmwUsed3->setGearbox('Automatique');
        $bmwUsed3->setNbDoors(5);
        $bmwUsed3->setNbPlace(5);
        $bmwUsed3->setHorses(140);
        $bmwUsed3->setGeneralState("Très bon");
        $bmwUsed3->setNbPreviousOwner(1);
        $bmwUsed3->setMileage(42000);
        $bmwUsed3->setImage('BMW116.webp'); // Image du véhicule
        $bmwUsed3->setVideo('BMW116.mp4'); // Vidéo du véhicule
        $manager->persist($bmwUsed3);

        // ---------------------------------------------------
        // SAUVEGARDE EN BASE DE DONNÉES
        // ---------------------------------------------------
        $manager->flush();
    }
}