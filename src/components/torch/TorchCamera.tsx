import { useState } from "react";
import { CameraView } from "expo-camera";

interface Props {
  onError: () => void;
}

// Cámara invisible: mientras está montada el flash queda encendido.
const TorchCamera = ({ onError }: Props) => {
  const [ready, setReady] = useState(false);

  return (
    <CameraView
      enableTorch={ready}
      onCameraReady={() => setReady(true)}
      onMountError={onError}
      pointerEvents="none"
      style={{ position: "absolute", width: 1, height: 1, opacity: 0 }}
    />
  );
};

export default TorchCamera;
