import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

import type { Plan } from "@/constants/content";

interface Props {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}

const PlanOption = ({ plan, selected, onSelect }: Props) => {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={`${plan.title}, ${plan.price}`}
      onPress={() => {
        Haptics.selectionAsync();
        onSelect();
      }}
      className={`flex-row items-center gap-4 rounded-2xl border-2 p-4 ${
        selected ? "border-primary bg-primary-900" : "border-line bg-surface"
      }`}
    >
      <View
        className={`h-[22px] w-[22px] items-center justify-center rounded-full border-2 ${
          selected ? "border-primary" : "border-neutral-300"
        }`}
      >
        {selected && (
          <View className="h-[10px] w-[10px] rounded-full bg-primary" />
        )}
      </View>

      <View className="flex-1">
        <Text className="font-body-bold text-base text-white">
          {plan.title}
        </Text>
        <Text className="font-body text-sm text-muted">{plan.description}</Text>
      </View>

      <Text className="font-mono-bold text-base text-white">{plan.price}</Text>
    </Pressable>
  );
};

export default PlanOption;
