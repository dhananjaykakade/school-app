"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: string;
};

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/schools");
        const data = await res.json();
        setSchools(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading schools...</p>;
  }

  if (schools.length === 0) {
    return <p className="text-center mt-10">No schools found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Schools Directory</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((school) => (
          <Card
            key={school.id}
            className="shadow-lg hover:shadow-xl transition rounded-2xl"
          >
            <CardHeader>
              <div className="relative w-full h-48">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">
                {school.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{school.address}</p>
              <p className="text-sm text-gray-800 font-medium mt-1">
                {school.city}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
