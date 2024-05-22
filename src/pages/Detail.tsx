import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CarDetails {
  id: string;
  name: string;
  imageUri: string;
  color: string;
  seats: number;
  fuelType: string;
  productionYear: number;
  rentPrice: number;
  createdAt: string;
}

const fetchDetail = async (id: string): Promise<CarDetails> => {
  const response = await axios.get<CarDetails>(`/vehicle/${id}`);
  return response.data;
};

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: carDetails } = useQuery({
    queryKey: ["detail", id],
    queryFn: ({ queryKey }) => {
      const [, queryId] = queryKey;
      return fetchDetail(queryId as string);
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">
          {carDetails?.name}
        </h1>
        <img
          src={carDetails?.imageUri}
          alt={carDetails?.name}
          className="w-full max-w-md object-cover mb-4"
        />
      </div>

      <div className="flex flex-col justify-between items-start">
        <p className="text-xl">
          <strong>Color:</strong> {carDetails?.color}
        </p>
        <p className="text-xl">
          <strong>Seats:</strong> {carDetails?.seats}
        </p>
        <p className="text-xl">
          <strong>Fuel Type:</strong> {carDetails?.fuelType}
        </p>
        <p className="text-xl">
          <strong>Production Year:</strong> {carDetails?.productionYear}
        </p>
        <p className="text-xl">
          <strong>Rent Price:</strong> ${carDetails?.rentPrice} per day
        </p>
      </div>
    </div>
  );
};

export default CarDetail;
