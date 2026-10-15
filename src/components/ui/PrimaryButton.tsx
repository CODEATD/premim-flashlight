import { Pressable, Text } from "react-native";
import * as Haptics from "expo-haptics";

type Variant = "primary" | "dark" | "outline";

interface Props {
  label: string;
  onPress: () => void;
  variant?: Variant;
}

const variants = {
  primary: { button: "bg-primary active:bg-primary-600", text: "text-ink" },
  dark: { button: "bg-ink active:bg-neutral-500", text: "text-primary" },
  outline: {
    button: "border-2 border-primary active:bg-primary-900",
    text: "text-primary",
  },
} as const;

const PrimaryButton = ({ label, onPress, variant = "primary" }: Props) => {
  const classes = variants[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      className={`h-[60px] w-full items-center justify-center rounded-full ${classes.button}`}
    >
      <Text
        className={`font-display text-[26px] tracking-wider ${classes.text}`}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
