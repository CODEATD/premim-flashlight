import { View, Text } from "react-native";
import { Flashlight, FlashlightOff } from "lucide-react-native";
import { Colors } from "@/constants/theme";

interface Props {
  isOn: boolean;
}

const TorchCircle = ({ isOn }: Props) => {
  if (!isOn) {
    return (
      <View className="h-[216px] w-[216px] items-center justify-center rounded-full border-2 border-dashed border-line">
        <View className="h-[160px] w-[160px] items-center justify-center rounded-full bg-surface">
          <FlashlightOff color={Colors.white} size={64} />
        </View>
      </View>
    );
  }
  return (
    <View className="h-[216px] w-[216px] items-center justify-center">
      <View className="absolute h-[340px] w-[340px] rounded-full bg-primary-300 opacity-20" />
      <View className="absolute h-[280px] w-[280px] rounded-full bg-primary-300 opacity-40" />
      <View className="h-[216px] w-[216px] items-center justify-center rounded-full bg-primary">
        <Flashlight color={Colors.ink} size={72} />
      </View>
    </View>
  );
};

export default TorchCircle;
