# Linterna Premium

App de broma de **CODE ATD**: enciende la linterna real del teléfono gratis, pero para apagarla muestra un paywall falso. Unos segundos después aparece el botón **"Es broma · apágala gratis"**, que apaga el flash y muestra la pantalla final **"ERA BROMA"**.

> No cobra nada, no pide datos de pago y no hace llamadas de red. El paywall son solo planes y un botón.

## Cómo funciona

```
off ──Encender──▶ on ──Apagar──▶ paywall ──Es broma──▶ reveal ──Volver a empezar──▶ off
```

| Estado | Flash | Qué se ve |
|---|---|---|
| `off` | apagado | Pantalla oscura, "Linterna apagada" |
| `on` | **encendido** | Pantalla clara con círculo dorado |
| `paywall` | **sigue encendido** | Sheet de pago falso con 3 planes |
| `reveal` | apagado | "ERA BROMA" y un bloque de código |

**En el paywall:**
- "Pagar" simula un pago de ~2.3 s y lo rechaza: *"esta linterna no acepta tarjetas, solo aplausos"*.
- "Cancelar" cambia de texto en cada toque y nunca cierra el sheet.
- El botón atrás de Android tampoco lo cierra.
- A los 5 s (o al fallar el pago) aparece el botón de broma.

**Linterna:**
- Pide permiso de cámara la primera vez que tocas "Encender".
- Si se niega el permiso o el teléfono no tiene flash, la app funciona igual y la luz es la pantalla clara (con un aviso discreto).
- Si la app pasa a segundo plano, la linterna se apaga y vuelve a `off`.

## Stack

- [Expo](https://expo.dev) SDK 57 + React Native + TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) (una sola pantalla, sin navegación)
- [NativeWind](https://www.nativewind.dev) 4 + Tailwind CSS 3, con la paleta de CODE ATD en `tailwind.config.js`
- `expo-camera` (flash), `expo-haptics`, `expo-font`, `lucide-react-native`
- Fuentes: Bebas Neue, Space Grotesk y JetBrains Mono (`@expo-google-fonts`)

Funciona en **Expo Go**; no requiere un development build.

## Empezar

```bash
npm install
npm start
```

Escanea el QR con Expo Go. **El flash solo se prueba en un teléfono real**: el emulador no tiene linterna y Haptics tampoco vibra ahí.

```bash
npx tsc --noEmit   # revisar tipos
```

## Estructura

```
src/
  app/
    _layout.tsx          # global.css, fuentes y splash
    index.tsx            # pantalla: elige la vista según el estado
  views/                 # OffView, OnView, RevealView
  components/
    ui/                  # Header, LogoMark, PrimaryButton
    torch/               # TorchCircle, TorchCamera
    paywall/             # PaywallSheet, PlanOption
  hooks/
    useFlashlight.ts     # máquina de estados + AppState
    useTorch.ts          # permiso de cámara y flash
    usePaywall.ts        # plan, pago falso, timer y textos de Cancelar
  constants/
    content.ts           # planes, textos y tiempos
    theme.ts             # colores para los íconos
```

## Generar el APK (Android)

La app se compila en la nube con [EAS Build](https://docs.expo.dev/build/introduction/):

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

El perfil `preview` genera un `.apk` instalable directo en el teléfono. Para Google Play usa `--profile production` (genera un `.aab`).

## Paleta

El color principal es `primary` (`#F1BD19`). Todos los colores viven en `tailwind.config.js`; no se usan colores sueltos en los componentes.

## Licencia

[MIT](LICENSE)

---

Hecho por [CODE ATD](https://github.com/codeatd) · más apps inútiles en **@codeatd**
