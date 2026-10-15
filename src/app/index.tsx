import { Text, View } from "react-native";

const FlashlightScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-ink">
      <Text className="font-display text-[52px] text-primary">
        Linterna apagada
      </Text>
      <Text className="font-mono text-xs text-faint">{"{/}"} CODE ATD</Text>
    </View>
  );
};

export default FlashlightScreen;
