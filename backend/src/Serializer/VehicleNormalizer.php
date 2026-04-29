<?php

namespace App\Serializer;

use App\Entity\Vehicle;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class VehicleNormalizer implements NormalizerInterface
{
    private ?ObjectNormalizer $normalizer = null;

    public function __construct()
    {
    }

    private function getNormalizer(): ObjectNormalizer
    {
        if ($this->normalizer === null) {
            $this->normalizer = new ObjectNormalizer();
        }
        return $this->normalizer;
    }

    public function normalize($object, $format = null, array $context = []): array
    {
        // Ajoute automatiquement le groupe 'vehicle:read' au contexte
        $context['groups'] ??= ['vehicle:read'];
        
        return $this->getNormalizer()->normalize($object, $format, $context);
    }

    public function supportsNormalization($data, $format = null, array $context = []): bool
    {
        return $data instanceof Vehicle;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [Vehicle::class => true];
    }
}
