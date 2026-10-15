import { Image } from "expo-image";
import { View } from "react-native";

interface Props {
  size?: number;
  variant?: "dark" | "light";
}

const LogoMark = ({ size = 38, variant = "dark" }: Props) => {
  const isDark = variant === "dark";

  return (
    <View
      className={`items-center justify-center rounded-full border-2 overflow-hidden ${isDark ? "border-primary" : "border-ink"}`}
      style={{ width: size, height: size }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: size * 0.75, height: size * 0.75 }}
        contentFit="contain"
      />
    </View>
  );
};

export default LogoMark;
