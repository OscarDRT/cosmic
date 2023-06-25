import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { Text, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

interface TabBarProps {
  bottomTabBarProps: BottomTabBarProps;
}

export const TabBar = ({ bottomTabBarProps }: TabBarProps) => {
  const { theme } = useDripsyTheme();

  const { insets } = bottomTabBarProps;

  console.log(insets);

  return (
    <View
      sx={{
        height: 100,
        overflow: "hidden",
        borderBottomEndRadius: theme.borders.$32,
        borderBottomStartRadius: theme.borders.$32,
        backgroundColor: "$transparent",
      }}
    >
      <BlurView tint="dark" intensity={100} style={[{ height: "100%" }]}>
        <Text variant={"title"}>Solar System</Text>
      </BlurView>
    </View>
  );
};
/* BottomTabBarProps */
