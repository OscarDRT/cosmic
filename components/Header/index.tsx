import { BlurView } from "expo-blur";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Pressable, Text, useDripsyTheme, View } from "dripsy";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export const Header = () => {
  const insets = useSafeAreaInsets();

  const { theme } = useDripsyTheme();

  return (
    <View
      sx={{
        height: 100,
        overflow: "hidden",
        borderBottomEndRadius: theme.borders.$32,
        borderBottomStartRadius: theme.borders.$32,
      }}
    >
      <BlurView
        intensity={25}
        style={[styles.blur, { paddingTop: insets.top }]}
      >
        <Text variant={"title"}>Solar System</Text>
      </BlurView>
    </View>
  );
};

export const HeaderBack = () => {
  const insets = useSafeAreaInsets();

  const router = useRouter();

  return (
    <View
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "$16",
        paddingTop: insets.top,
      }}
    >
      <Pressable onPress={() => router.back()}>
        {({ pressed }) => {
          return (
            <View
              sx={{
                height: 48,
                width: 48,
                borderRadius: 48,
                overflow: "hidden",
              }}
            >
              <BlurView
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                intensity={pressed ? 100 : 25}
              >
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </BlurView>
            </View>
          );
        }}
      </Pressable>
      <View>{/* save or like */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  blur: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
