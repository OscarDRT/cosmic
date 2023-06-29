import { ActivityIndicator, Image, Text, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import {
  Tabs,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from "expo-router";
import { AnimatedView } from "../../components/AnimatedView";
import { Container } from "../../components/Container";
import { HeaderBack } from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // No olvides importar los iconos.
import { useGetPlanet } from "../../hooks/useGetPlanet";
import { height, width } from "../../utils/commons";

const iconsMapping: { [key: string]: string } = {
  day: "timer-sand",
  distanceFromSun: "orbit",
  escVelocity: "speedometer",
  gravity: "magnet",
  mass: "weight",
  meanTemp: "thermometer",
};

const titleMapping: { [key: string]: string } = {
  day: "Day",
  distanceFromSun: "Distance from sun",
  escVelocity: "Esc. Velocity",
  gravity: "Gravity",
  mass: "Mass",
  meanTemp: "Mean Temp",
};

export default function Planet() {
  const { theme } = useDripsyTheme();

  const router = useRouter();

  const { planet, image } = useLocalSearchParams();

  console.log({ planet, image });

  const { planet: _planet, loading } = useGetPlanet(planet as string);

  let unitValueData = _planet
    ? Object.keys(_planet).filter(
        (key) =>
          _planet &&
          (_planet[key as keyof Planet] as UnitValueType).unit &&
          _planet &&
          (_planet[key as keyof Planet] as UnitValueType).value
      )
    : [];

  return (
    <Container edges={[]}>
      <HeaderBack />

      {loading ? (
        <View sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color={"$primary"} />
        </View>
      ) : (
        <AnimatedView
          sx={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          from={{ opacity: 0, translateY: height / 3 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", delay: 1000 }}
        >
          <Image
            style={{
              height: 120,
              width: 120,
              zIndex: 1,
              alignSelf: "center",
              top: 120 / 2,
            }}
            source={require("../../assets/images/planet.png")}
          />
          <View
            sx={{
              borderTopEndRadius: theme.space.$16,
              borderTopStartRadius: theme.space.$16,
              overflow: "hidden",
            }}
          >
            <BlurView
              style={{
                padding: theme.space.$16,
                paddingTop: 120 / 2,
                paddingBottom: 120 / 2,
              }}
            >
              <Text
                variant={"title"}
                sx={{ textAlign: "center", marginBottom: "$32" }}
              >
                {planet}
              </Text>
              <View
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  rowGap: "$32",
                }}
              >
                {unitValueData.map((key, index) => (
                  <View
                    key={index}
                    sx={{
                      width: "33%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      /* @ts-ignore */
                      name={iconsMapping[key]}
                      size={48}
                      color={theme.colors.$text}
                      style={{ marginBottom: theme.space.$8 }}
                    />

                    <Text
                      numberOfLines={2}
                      sx={{
                        textAlign: "center",
                        height: theme.fontSizes.$16 * 2.5,
                      }}
                      variant={"body"}
                    >{`${titleMapping?.[key]}`}</Text>

                    <Text sx={{ textAlign: "center" }} variant={"body"}>
                      {`(${
                        _planet &&
                        (_planet[key as keyof Planet] as UnitValueType).unit
                      })`}
                    </Text>

                    <Text sx={{ textAlign: "center" }} variant={"title"}>
                      {_planet &&
                        (_planet[key as keyof Planet] as UnitValueType)
                          .value}{" "}
                    </Text>
                  </View>
                ))}
              </View>
            </BlurView>
          </View>
        </AnimatedView>
      )}
    </Container>
  );
}
