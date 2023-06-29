import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useGetPlanet = (planetId: number) => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!planetId) return;
    const fetchPlanet = async () => {
      try {
        const { data: planetData, error } = await supabase
          .from("Planet")
          .select(
            `
            id,
            name,
            description,
            image,
            mass: Mass (value, unit),
            gravity: Gravity (value, unit),
            day: Day (value, unit),
            escVelocity: EscVelocity (value, unit),
            meanTemp: MeanTemp (value, unit),
            distanceFromSun: DistanceFromSun (value, unit)
          `
          )
          .eq("id", planetId)
          .single();

        if (error) {
          console.log("Error fetching planet: ", error);
        } else if (planetData) {
          const adjustedPlanetData = {
            ...planetData,
            mass: planetData.mass[0],
            gravity: planetData.gravity[0],
            day: planetData.day[0],
            escVelocity: planetData.escVelocity[0],
            meanTemp: planetData.meanTemp[0],
            distanceFromSun: planetData.distanceFromSun[0],
          };
          setPlanet(adjustedPlanetData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanet();
  }, [planetId]);

  return { planet, loading };
};
