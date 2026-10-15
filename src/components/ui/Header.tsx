import { Text, View } from "react-native";

import LogoMark from "./LogoMark";

interface Props {
  torchOn: boolean;
  variant: "dark" | "light";
}

const Header = ({ torchOn, variant }: Props) => {
  const isDark = variant === "dark";

  return (
    <View className="flex-row items-center gap-3">
      <LogoMark size={38} variant={variant} />

      <View>
        <Text
          className={`font-display text-[22px] tracking-wide ${isDark ? "text-white" : "text-ink"}`}
        >
          LINTERNA PREMIUM
        </Text>
        <Text
          className={`font-mono text-[11px] ${isDark ? "text-faint" : "text-neutral-300"}`}
        >
          by codeatd
        </Text>
      </View>

      <View
        className={`ml-auto rounded-full px-4 py-1.5 ${
          torchOn ? "bg-ink" : "border border-line"
        }`}
      >
        <Text
          className={`font-mono text-xs ${torchOn ? "text-primary" : "text-muted"}`}
        >
          {torchOn ? "torch: on" : "torch: off"}
        </Text>
      </View>
    </View>
  );
};

export default Header;