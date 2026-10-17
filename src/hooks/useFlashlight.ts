import { useState } from "react";
export type FlashState = 'off' | 'on' | 'paywall' | 'reveal';

export const useFlashlight = () => {
    const [state, setState] = useState<FlashState>('off');

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