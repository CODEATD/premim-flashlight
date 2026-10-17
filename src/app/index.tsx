import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { useFlashlight } from "@/hooks/useFlashlight";
import { useTorch } from "@/hooks/useTorch";
import PaywallSheet from "@/components/paywall/PaywallSheet";
import TorchCamera from "@/components/torch/TorchCamera";
import OffView from "@/views/OffView";
import OnView from "@/views/OnView";
import RevealView from "@/views/RevealView";

const FlashlightScreen = () => {
  const { state, torchShouldBeOn, turnOn, tryTurnOff, revealJoke, restart } =
    useFlashlight();
  const { torchActive, unavailable, ensurePermission, markUnavailable } =
    useTorch(torchShouldBeOn);

  const isLight = state === "on" || state === "paywall";

  // Siempre pasa a "on": si no hay permiso, la pantalla clara es la luz.
  const handleTurnOn = async () => {
    await ensurePermission();
    turnOn();
  };

  return (
    <View className={`flex-1 ${isLight ? "bg-primary-50" : "bg-ink"}`}>
      <SafeAreaView style={{ flex: 1 }}>
        {state === "off" && <OffView onTurnOn={handleTurnOn} />}
        {isLight && (
          <OnView onTurnOff={tryTurnOff} usingScreen={unavailable} />
        )}
        {state === "reveal" && <RevealView onRestart={restart} />}
        {state === "paywall" && <PaywallSheet onJoke={revealJoke} />}
      </SafeAreaView>

      {torchActive && <TorchCamera onError={markUnavailable} />}

      <StatusBar style={isLight ? "dark" : "light"} />
    </View>
  );
};

export default FlashlightScreen;
