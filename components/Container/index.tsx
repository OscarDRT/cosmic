import { View } from "dripsy";
import { ReactNode } from "react";
import { ImageBackground } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface containerProps {
  children: ReactNode;
  edges?: React.ComponentProps<typeof SafeAreaView>["edges"];
}
export const Container = ({
  children,
  edges = ["top", "bottom"],
}: containerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode={"cover"}
      source={require("../../assets/images/background.png")}
    >
      <View
        style={[
          {
            flex: 1,
            paddingTop: edges.includes("top") ? insets.top : 0,
            paddingBottom: edges.includes("bottom") ? insets.bottom : 0,
          },
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
};
