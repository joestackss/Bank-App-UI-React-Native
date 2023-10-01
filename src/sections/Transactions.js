import { View, Text, FlatList } from "react-native";
import React from "react";
import { transactionData } from "../utils";
import TransactionCard from "../components/TransactionCard";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Transactions() {
  return (
    <Animated.View
      className="mt-8"
      entering={FadeInDown.duration(500).springify().delay(300)}
    >
      {/* Title */}
      <Text
        className="text-3xl dark:text-white mb-4"
        style={{
          fontFamily: "SpaceGroteskBold",
        }}
      >
        Last Transactions
      </Text>

      {/* Cards */}

      <FlatList
        data={transactionData}
        keyExtractor={(item) => item.id}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}
        height={400}
        renderItem={({ item }) => <TransactionCard {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </Animated.View>
  );
}
