import { Link } from "react-router-dom";
import type { Vehicle } from "../store/useVehicleStore";

type Props = {
  car: Vehicle;
};

function HomeCard({ car }: Props) {
  const label = `${car.brand} ${car.model}`;
  const cover = car.images?.[0] ? `/cars/${car.images[0]}` : "";
  return (
    <div className="relative overflow-hidden rounded-sm shadow-md border border-gray-200 h-80">
      <img
        src={cover}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute" />
      <div className="relative z-10 flex h-full flex-row items-end justify-between p-4">
        <span className="text-black text-lg font-bold mb-2">{label}</span>
        <Link
          to={`/product/${car.id}`}
          className="inline-block w-fit bg-[#c40000] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#a30000] transition-colors"
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
