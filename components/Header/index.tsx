import { BlurView } from "expo-blur";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Text, useDripsyTheme, View } from "dripsy";

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
        tint="dark"
        intensity={70}
        style={[styles.blur, { paddingTop: insets.top }]}
      >
        <Text variant={"title"}>Solar System</Text>
      </BlurView>
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
