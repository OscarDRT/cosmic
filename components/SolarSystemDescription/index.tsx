import { Image, Text, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

export const SolarSystemDescription = () => {
  const { theme } = useDripsyTheme();

  return (
    <View sx={{ borderRadius: theme.borders.$16, overflow: "hidden" }}>
      <BlurView
        intensity={15}
        style={{
          padding: theme.space.$16,
        }}
      >
        <Text variant={"subtitle"}>Solar System</Text>
        <View
          sx={{
            marginTop: "$32",
          }}
        >
          <Text variant={"paragraph"}>
            The Solar System, formed 4.6 billion years ago, consists primarily
            of the Sun and orbiting objects. Most of its mass is in the Sun and
            Jupiter. It has eight planets, the inner four being rocky and the
            outer four being significantly larger and more massive.
          </Text>
        </View>
      </BlurView>
    </View>
  );
};
