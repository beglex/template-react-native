import type {CSSProperties} from 'react';

export const PalletteNames = ['primary', 'secondary', 'success', 'warning', 'dark', 'light'] as const;

export const Colors = {
    primary: '#ffffff',
    secondary: '#808080',
    success: '#80ff80',
    warning: '#ff8080',
    dark: '#24282c',
    light: '#ffffff',
} satisfies Record<(typeof PalletteNames)[number], CSSProperties['color']>;
