import { View, Text, Image, Switch } from "react-native";
import React from "react";
import { BellIcon } from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Animated.View
      className="flex-row justify-between items-center"
      entering={FadeInDown.duration(500).springify().delay(100)}
    >
      <View className="border-2 border-white rounded-full overflow-hidden">
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>

      {/* Notifications and Switch Icon */}
      <View className="flex-row space-x-4 justify-center items-center">
        <BellIcon
          size={30}
          strokeWidth={2}
          color={colorScheme == "dark" ? "white" : "black"}
        />

        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>
    </Animated.View>
  );
}
