import { useEffect, useState } from "react";
import { AppState } from "react-native";
export type FlashState = 'off' | 'on' | 'paywall' | 'reveal';

export const useFlashlight = () => {
    const [state, setState] = useState<FlashState>('off');

    // Si la app pasa a segundo plano con la linterna encendida, se apaga.
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (appState) => {
            if (appState !== 'active') {
                setState((prev) => (prev === 'on' || prev === 'paywall' ? 'off' : prev));
            }
        });

        return () => subscription.remove();
    }, []);

    const turnOn = () => setState('on');
    const tryTurnOff = () => setState('paywall');
    const revealJoke = () => setState('reveal');
    const restart = () => setState('off');

    const torchShouldBeOn = state === 'on' || state === 'paywall';

    return {
        // Props
        state,
        torchShouldBeOn,

        // Methods
        turnOn,
        tryTurnOff,
        revealJoke,
        restart,
    };
}
