<?php

namespace App\Controller\Api;

use App\Repository\VehicleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/vehicles', name: 'api_vehicles_')]
class VehicleController extends AbstractController
{
    #[Route('', name: 'index', methods: ['GET'])]
    public function index(
        VehicleRepository $vehicleRepository, 
        Request $request,
        SerializerInterface $serializer
    ): JsonResponse
    {
        $brand = $request->query->get('brand');

        if ($brand) {
            $vehicles = $vehicleRepository->findBy(['brand' => $brand]);
        } else {
            $vehicles = $vehicleRepository->findAll();
        }
        
        // Sérialise explicitement avec le groupe
        $json = $serializer->serialize(
            $vehicles, 
            'json',
            ['groups' => 'vehicle:read']
        );
        
        return new JsonResponse($json, 200, [], true); 
    }
}