import { ActivityIndicator, Image, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import { useEffect, useMemo } from "react";
import { AnimatedView } from "../../components/AnimatedView";
import { Container } from "../../components/Container";

import { Header } from "../../components/Header";
import { HorizontalPlanetList } from "../../components/HorizontalPlanetList";
import { PlanetOfDay } from "../../components/PlanetOfDay";
import { SolarSystemDescription } from "../../components/PlanetOfDay/SolarSystemDescription";
import { useGetPlanet } from "../../hooks/useGetPlanet";
import { useGetPlanets } from "../../hooks/useGetPlanets";

export default function TabOneScreen() {
  const { theme } = useDripsyTheme();

  const { planets } = useGetPlanets();

  const randomPlanet = useMemo(
    () => planets[Math.floor(Math.random() * planets?.length)],
    [planets]
  );

  const { planet, loading } = useGetPlanet(randomPlanet?.id ?? null);

  return (
    <Container edges={[]}>
      <Header />

      <View sx={{ paddingVertical: "$16", flex: 1 }}>
        {!loading ? (
          <View sx={{ flex: 1 }}>
            <AnimatedView
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", delay: 300 }}
            >
              <HorizontalPlanetList planets={planets} />
            </AnimatedView>

            <AnimatedView
              from={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", delay: 400 }}
              sx={{ flex: 1 }}
            >
              <View
                sx={{
                  flex: 1,
                  padding: "$16",
                  gap: "$8",
                }}
              >
                <PlanetOfDay planet={planet} />

                <SolarSystemDescription />
              </View>
            </AnimatedView>
          </View>
        ) : (
          <View
            sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator color={theme.colors.$primary} />
          </View>
        )}
      </View>
    </Container>
  );
}
