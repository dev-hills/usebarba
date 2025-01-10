import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const onboarding = () => {
  return (
    <SafeAreaView>
      <View className="bg-[#121212] h-full">
        <Text className="text-red-500 text-center p-3">welcome</Text>
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
