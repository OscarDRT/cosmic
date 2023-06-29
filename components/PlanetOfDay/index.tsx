import { Image, Text, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

interface PlanetOfDayProps {
  planet: Planet | null;
}
export const PlanetOfDay = ({ planet }: PlanetOfDayProps) => {
  const { theme } = useDripsyTheme();

  if (!planet) return null;

  return (
    <View sx={{ borderRadius: theme.borders.$16, overflow: "hidden" }}>
      <BlurView
        intensity={15}
        style={{
          padding: theme.space.$16,
        }}
      >
        <Text variant={"subtitle"}>Planet of the day</Text>
        <View
          sx={{
            marginTop: "$32",
            flexDirection: "row",
            gap: theme.space.$16,
          }}
        >
          <View>
            <Image
              style={{ height: 60, width: 60 }}
              source={require("../../assets/images/planet.png")}
            />
          </View>

          <View sx={{ flex: 1 }}>
            <Text variant={"subtitle"} sx={{ color: "$primary" }}>
              {planet?.name}
            </Text>
            <Text variant={"paragraph"}>{planet?.description}</Text>
            <View
              sx={{
                alignSelf: "flex-end",
                mt: "$8",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "$4",
              }}
            >
              <Text variant={"subtitle"}>Details</Text>
              <MaterialIcons
                name="arrow-right-alt"
                size={24}
                color={theme.colors.$primary}
              />
            </View>
          </View>
        </View>
      </BlurView>
    </View>
  );
};
