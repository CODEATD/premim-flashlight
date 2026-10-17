import { Text, View } from "react-native";

import Header from "@/components/ui/Header";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TorchCircle from "@/components/torch/TorchCircle";

interface Props {
  onTurnOff: () => void;
  usingScreen?: boolean;
}

const OnView = ({ onTurnOff, usingScreen = false }: Props) => {
  return (
    <View className="flex-1 px-6 pb-4 pt-2">
      <Header torchOn variant="light" />

      <View className="flex-1 items-center justify-center">
        <TorchCircle isOn />
        <Text className="mt-12 text-center font-display text-[52px] leading-[56px] text-ink">
          Linterna encendida
        </Text>
        <Text className="mt-2 text-center font-body text-base text-neutral-300">
          Perfecto. Ahora intenta apagarla.
        </Text>
        {usingScreen && (
          <Text className="mt-3 text-center font-mono text-xs text-neutral-300">
            Sin flash disponible, usando la pantalla
          </Text>
        )}
      </View>

      <PrimaryButton label="Apagar" variant="dark" onPress={onTurnOff} />
      <Text className="mt-4 text-center font-mono text-xs text-neutral-300">
        {"{/}"} CODE ATD
      </Text>
    </View>
  );
};

export default OnView;
