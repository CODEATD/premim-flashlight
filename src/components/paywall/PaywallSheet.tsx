import { Modal, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Lock } from "lucide-react-native";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";

import { Colors } from "@/constants/theme";
import { PLANS } from "@/constants/content";
import { usePaywall } from "@/hooks/usePaywall";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PlanOption from "./PlanOption";

interface Props {
  onJoke: () => void;
}

const PaywallSheet = ({ onJoke }: Props) => {
  const insets = useSafeAreaInsets();
  const {
    selectedPlan,
    jokeReady,
    paying,
    payFail,
    progress,
    cancelLabel,
    selectPlan,
    pay,
    cancel,
  } = usePaywall();

  const progressWidth = `${Math.round(progress * 100)}%` as const;

  return (
    <Modal
      visible
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View className="flex-1 justify-end bg-ink/[0.62]">
        <Animated.View entering={SlideInDown.duration(300)}>
          <View
            className="rounded-t-[28px] bg-surface px-6 pt-3"
            style={{ paddingBottom: insets.bottom + 16 }}
          >
            {/* Agarre */}
            <View className="mb-5 h-[5px] w-[44px] self-center rounded-full bg-line" />

            {/* Título */}
            <View className="flex-row items-center gap-4">
              <View className="h-[52px] w-[52px] items-center justify-center rounded-2xl bg-primary">
                <Lock color={Colors.ink} size={26} />
              </View>
              <View className="flex-1">
                <Text className="font-display text-[32px] leading-[34px] text-white">
                  Desbloquear apagado
                </Text>
                <Text className="font-body text-sm text-muted">
                  Encender es gratis. Apagar es Premium.
                </Text>
              </View>
            </View>

            {/* Planes */}
            <View className="mt-5 gap-3">
              {PLANS.map((plan) => (
                <PlanOption
                  key={plan.id}
                  plan={plan}
                  selected={plan.id === selectedPlan.id}
                  onSelect={() => selectPlan(plan.id)}
                />
              ))}
            </View>

            {/* Pago */}
            <View className="mt-5 gap-3">
              {!paying && !payFail && (
                <PrimaryButton
                  label={`Pagar ${selectedPlan.price}`}
                  onPress={pay}
                />
              )}

              {paying && (
                <View className="gap-2">
                  <Text className="font-mono text-xs text-faint">
                    procesando_pago.dart …
                  </Text>
                  <View className="h-2 overflow-hidden rounded-full bg-line">
                    <View
                      className="h-full rounded-full bg-primary"
                      style={{ width: progressWidth }}
                    />
                  </View>
                </View>
              )}

              {payFail && (
                <View className="rounded-2xl border border-error-border bg-error-bg p-4">
                  <Text className="font-body text-base text-error-text">
                    Pago rechazado: esta linterna no acepta tarjetas, solo
                    aplausos.
                  </Text>
                </View>
              )}

              {jokeReady && (
                <Animated.View entering={FadeInDown.duration(300)}>
                  <PrimaryButton
                    label="Es broma · apágala gratis"
                    variant="outline"
                    onPress={onJoke}
                  />
                </Animated.View>
              )}
            </View>

            {/* Cancelar: nunca cierra */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={cancelLabel}
              hitSlop={12}
              onPress={cancel}
              className="mt-4 self-center py-2"
            >
              <Text className="font-body text-base text-muted underline">
                {cancelLabel}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default PaywallSheet;
