import { useState } from "react";
import { useCameraPermissions } from "expo-camera";

export const useTorch = (shouldBeOn: boolean) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [unavailable, setUnavailable] = useState(false);

  const ensurePermission = async () => {
    if (permission?.granted) return true;

    const response = await requestPermission();
    setUnavailable(!response.granted);
    return response.granted;
  };

  const markUnavailable = () => setUnavailable(true);

  const torchActive = shouldBeOn && !!permission?.granted && !unavailable;

  return {
    // Props
    torchActive,
    unavailable,

    // Methods
    ensurePermission,
    markUnavailable,
  };
};
