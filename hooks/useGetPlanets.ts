import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useGetPlanets = () => {
  const [planets, setPlanets] = useState<SimplePlanet[]>([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const { data: planetsData, error } = await supabase
          .from("Planet")
          .select("id, name, image");

        if (error) {
          console.log("Error fetching planets: ", error);
        } else if (planetsData) {
          setPlanets(planetsData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanets();
  }, []);

  return { planets };
};
