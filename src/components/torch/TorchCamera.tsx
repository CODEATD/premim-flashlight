import { useState } from "react";
import { View } from "react-native";
import { CameraView } from "expo-camera";

interface Props {
  onError: () => void;
}

// Cámara invisible: mientras está montada el flash queda encendido.
// En Android el preview nativo ignora el tamaño y la opacidad de la vista,
// así que va dentro de un contenedor de 1×1 px que recorta todo lo que se salga.
const TorchCamera = ({ onError }: Props) => {
  const [ready, setReady] = useState(false);

  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        overflow: "hidden",
        opacity: 0,
      }}
    >
      <CameraView
        enableTorch={ready}
        onCameraReady={() => setReady(true)}
        onMountError={onError}
        style={{ width: 1, height: 1 }}
      />
    </View>
  );
};

export default TorchCamera;
