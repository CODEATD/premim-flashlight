import TorchCircle from "@/components/torch/TorchCircle";
import Header from "@/components/ui/Header";
import { View } from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton";

const FlashlightScreen = () => {
  return (
    <View className="flex-1 gap-6 bg-ink px-6 pt-16">
      <Header torchOn={false} variant="dark" />
      <View className="items-center">
        <TorchCircle isOn={false} />
      </View>
      <PrimaryButton label="Encender" onPress={() => console.log("primary")} />
      <PrimaryButton
        label="Apagar"
        variant="dark"
        onPress={() => console.log("dark")}
      />
      <PrimaryButton
        label="Es broma"
        variant="outline"
        onPress={() => console.log("outline")}
      />
    </View>
  );
};

export default FlashlightScreen;
