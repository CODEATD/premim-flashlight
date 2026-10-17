import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { useFlashlight } from "@/hooks/useFlashlight";
import PaywallSheet from "@/components/paywall/PaywallSheet";
import OffView from "@/views/OffView";
import OnView from "@/views/OnView";
import RevealView from "@/views/RevealView";

const FlashlightScreen = () => {
  const { state, turnOn, tryTurnOff, revealJoke, restart } = useFlashlight();

  const isLight = state === "on" || state === "paywall";

  return (
    <View className={`flex-1 ${isLight ? "bg-primary-50" : "bg-ink"}`}>
      <SafeAreaView style={{ flex: 1 }}>
        {state === "off" && <OffView onTurnOn={turnOn} />}
        {isLight && <OnView onTurnOff={tryTurnOff} />}
        {state === "reveal" && <RevealView onRestart={restart} />}

        {state === "paywall" && <PaywallSheet onJoke={revealJoke} />}
      </SafeAreaView>

      <StatusBar style={isLight ? "dark" : "light"} />
    </View>
  );
};

export default FlashlightScreen;
