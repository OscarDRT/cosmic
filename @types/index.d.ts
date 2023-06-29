type Planet = {
  id: number;
  name: string;
  description: string;
  image: string;
  mass: Mass;
  gravity: Gravity;
  day: Day;
  escVelocity: EscVelocity;
  meanTemp: MeanTemp;
  distanceFromSun: DistanceFromSun;
};

type SimplePlanet = Pick<Planet, "id" | "name" | "image">;

type Mass = {
  value: number;
  unit: string;
};

type Gravity = {
  value: number;
  unit: string;
};

type Day = {
  value: number;
  unit: string;
};

type EscVelocity = {
  value: number;
  unit: string;
};

type MeanTemp = {
  value: number;
  unit: string;
};

type DistanceFromSun = {
  value: number;
  unit: string;
};
