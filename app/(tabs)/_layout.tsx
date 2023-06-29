import { MaterialIcons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { useDripsyTheme, View } from "dripsy";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={28} {...props} />;
}

export default function TabLayout() {
  const { theme } = useDripsyTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#8D8E99",
        tabBarActiveTintColor: "#AE59D2",
        header: () => null,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopColor: "#666666",
        },
      }}
      tabBar={(props) => (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            borderTopEndRadius: theme.borders.$32,
            borderTopStartRadius: theme.borders.$32,
          }}
        >
          <BlurView intensity={25}>
            <BottomTabBar {...props} />
          </BlurView>
        </View>
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="favorite" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
