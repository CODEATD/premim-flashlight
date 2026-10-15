/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F1BD19",
          50: "#FEF8E8",
          100: "#FBEBB8",
          200: "#F9E195",
          300: "#F6D365",
          400: "#F4CA47",
          500: "#F1BD19",
          600: "#DBAC17",
          700: "#AB8612",
          800: "#85680E",
          900: "#654F0B",
        },
        neutral: {
          50: "#E7E7E7",
          100: "#B5B5B5",
          200: "#929292",
          300: "#606060",
          400: "#414141",
          500: "#111111",
          600: "#0F0F0F",
          700: "#0C0C0C",
          800: "#090909",
          900: "#070707",
        },
        ink: "#070707",
        surface: "#111111",
        line: {
          DEFAULT: "#333333",
          light: "#ECECEC",
        },
        muted: "rgba(255, 255, 255, 0.8)",
        faint: "#929292",
        error: {
          bg: "#1F1517",
          border: "#4A2B2B",
          text: "#F4C2BF",
        },
      },
      fontFamily: {
        display: ["BebasNeue_400Regular"],
        body: ["SpaceGrotesk_400Regular"],
        "body-bold": ["SpaceGrotesk_700Bold"],
        mono: ["JetBrainsMono_400Regular"],
        "mono-bold": ["JetBrainsMono_700Bold"],
      },
    },
  },
  plugins: [],
};
