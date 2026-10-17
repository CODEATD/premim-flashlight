import { useEffect, useRef, useState } from "react";
import * as Haptics from "expo-haptics";

import {
  CANCEL_TEXTS,
  JOKE_DELAY_MS,
  PAY_DURATION_MS,
  PLANS,
  type PlanId,
} from "@/constants/content";

const PROGRESS_TICK_MS = 100;

export const usePaywall = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId>("single");
  const [jokeReady, setJokeReady] = useState(false);
  const [paying, setPaying] = useState(false);
  const [payFail, setPayFail] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cancelTries, setCancelTries] = useState(0);

  const payInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopPayInterval = () => {
    if (payInterval.current) clearInterval(payInterval.current);
    payInterval.current = null;
  };

  // Al montar: arranca el timer de la broma. Al desmontar: limpia todo.
  useEffect(() => {
    const jokeTimer = setTimeout(() => setJokeReady(true), JOKE_DELAY_MS);

    return () => {
      clearTimeout(jokeTimer);
      stopPayInterval();
    };
  }, []);

  const pay = () => {
    if (paying || payFail) return;

    setPaying(true);
    const startedAt = Date.now();

    payInterval.current = setInterval(() => {
      const value = Math.min((Date.now() - startedAt) / PAY_DURATION_MS, 1);
      setProgress(value);

      if (value === 1) {
        stopPayInterval();
        setPaying(false);
        setPayFail(true);
        setJokeReady(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    }, PROGRESS_TICK_MS);
  };

  const cancel = () => {
    setCancelTries((tries) => Math.min(tries + 1, CANCEL_TEXTS.length - 1));
  };

  const selectedPlan =
    PLANS.find((plan) => plan.id === selectedPlanId) ?? PLANS[0];

  return {
    // Props
    selectedPlan,
    jokeReady,
    paying,
    payFail,
    progress,
    cancelLabel: CANCEL_TEXTS[cancelTries],

    // Methods
    selectPlan: setSelectedPlanId,
    pay,
    cancel,
  };
};
