import { Image, Text, useDripsyTheme, View } from "dripsy";
import { BlurView } from "expo-blur";
import React, { FC, memo, useCallback, useMemo } from "react";
import { FlatList, Pressable } from "react-native";

interface BodyFlatListProps {
  planets: SimplePlanet[];
}

const ItemSeparator: FC = () => <View sx={{ width: 10 }} />;

export const HorizontalPlanetList: FC<BodyFlatListProps> = memo(
  ({ planets }) => {
    const { theme } = useDripsyTheme();

    const renderItem = useCallback(({ item }: { item: SimplePlanet }) => {
      return (
        <Pressable>
          {({ pressed }) => (
            <View sx={{ borderRadius: theme.borders.$16, overflow: "hidden" }}>
              <BlurView
                intensity={pressed ? 100 : 30}
                style={{
                  paddingVertical: theme.space.$8,
                  paddingHorizontal: theme.space.$16,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: theme.space.$8,
                }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../../assets/images/planet.png")}
                />
                <Text variant={"body"}>{item.name}</Text>
              </BlurView>
            </View>
          )}
        </Pressable>
      );
    }, []);

    const keyExtractor = useCallback((item: SimplePlanet) => item.name, []);

    return (
      <View>
        <FlatList
          data={planets}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: theme.space.$16,
          }}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          windowSize={5}
        />
      </View>
    );
  }
);
