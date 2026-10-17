import { Text, View } from "react-native";

import LogoMark from "@/components/ui/LogoMark";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
  onRestart: () => void;
}

const RevealView = ({ onRestart }: Props) => {
  return (
    <View className="flex-1 px-6 pb-4 pt-2">
      <View className="flex-1 items-center justify-center">
        <LogoMark size={120} />

        <Text className="mt-6 text-center font-display text-[96px] leading-[92px] text-primary">
          Era broma
        </Text>

        <Text className="mt-4 text-center font-body text-base leading-6 text-muted">
          Nadie cobra por apagar una linterna.{"\n"}Bueno… casi nadie.
        </Text>

        <View className="mt-8 w-full rounded-2xl border border-line bg-surface p-5">
          <Text className="font-mono text-[13px] leading-6 text-faint">
            {"// linterna.dart"}
          </Text>
          <Text className="font-mono text-[13px] leading-6 text-white">
            await torch.<Text className="text-primary">disable</Text>();
          </Text>
          <Text className="font-mono text-[13px] leading-6 text-faint">
            {"// precio real: $0.00 · siempre"}
          </Text>
        </View>
      </View>

      <PrimaryButton label="Volver a empezar" onPress={onRestart} />
    </View>
  );
};

export default RevealView;
