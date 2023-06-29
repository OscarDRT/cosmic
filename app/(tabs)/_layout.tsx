import { MaterialIcons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={28} {...props} />;
}

export default function TabLayout() {
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
        <BlurView
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          intensity={15}
        >
          <BottomTabBar {...props} />
        </BlurView>
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
