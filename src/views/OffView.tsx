import { View, Text } from "react-native";

import Header from "@/components/ui/Header";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TorchCircle from "@/components/torch/TorchCircle";

interface Props {
  onTurnOn: () => void;
}

const OffView = ({ onTurnOn }: Props) => {
  return (
    <View className="flex-1 px-6 pb-4 pt-2">
      <Header torchOn={false} variant="dark" />

      <View className="flex-1 items-center justify-center">
        <TorchCircle isOn={false} />
        <Text className="mt-12 text-center font-display text-[52px] leading-[56px] text-white">
          Linterna apagada
        </Text>
        <Text className="mt-2 text-center font-body text-base text-muted">
          Ilumina tu camino. Literalmente.
        </Text>
      </View>

      <PrimaryButton label="Encender" onPress={onTurnOn} />
      <Text className="mt-4 text-center font-mono text-xs text-faint">
        {"{/}"} CODE ATD
      </Text>
    </View>
  );
};

export default OffView;
