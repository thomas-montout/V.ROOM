<?php

namespace App\Controller\Api;

use App\Repository\VehicleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/vehicles', name: 'api_vehicles_')]
class VehicleController extends AbstractController
{
    #[Route('', name: 'index', methods: ['GET'])]
    public function index(VehicleRepository $vehicleRepository): JsonResponse
    {
        // Récupère tous les véhicules (neufs et occasions)
        $vehicles = $vehicleRepository->findAll();
        
        // Transforme le tableau d'objets en JSON et le renvoie
        return $this->json($vehicles);
    }
}