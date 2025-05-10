"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const restaurants = [
  {
    name: "The Lark",
    image: "/images/restaurants/placeholder.svg",
    description: "Contemporary American cuisine in the Funk Zone",
    studentDeal: "10% off with UCSB ID",
  },
  {
    name: "Mesa Verde",
    image: "/images/restaurants/placeholder.svg",
    description: "Plant-based Mediterranean fusion",
    studentDeal: "Happy Hour 3-6pm daily",
  },
  {
    name: "Arigato Sushi",
    image: "/images/restaurants/placeholder.svg",
    description: "Premium sushi & Japanese cuisine",
    studentDeal: "Student Night Wednesdays - 15% off",
  },
  {
    name: "Los Agaves",
    image: "/images/restaurants/placeholder.svg",
    description: "Authentic Mexican cuisine",
    studentDeal: "Taco Tuesday - $2 tacos",
  },
];

export function RestaurantShowcase() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (restaurantName: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [restaurantName]: true,
    }));
  };

  return (
    <div className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Popular Santa Barbara Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-orange-100">
                  {!imageErrors[restaurant.name] ? (
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(restaurant.name)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">🍽️</div>
                        <p className="text-orange-800 font-medium">
                          {restaurant.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-orange-900">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{restaurant.description}</p>
                  <div className="mt-3 bg-orange-100 p-2 rounded-md">
                    <p className="text-orange-800 text-sm font-medium">
                      Student Deal: {restaurant.studentDeal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
