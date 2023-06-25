import { ReactNode } from "react";
import { ImageBackground } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View } from "../Themed";

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
      imageStyle={{ flex: 1 }}
      resizeMode={"cover"}
      source={require("../../assets/images/background.png")}
    >
      <View
        lightColor="trasparent"
        darkColor="trasparent"
        style={[
          {
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
