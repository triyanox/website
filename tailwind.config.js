/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Wright Pro", ...fontFamily.sans],
      },
      colors: {
        "bg-primary-light": "#fff",
        "bg-primary-dark": "#000",
        "bg-secondary-light": "#F2F2F2",
        "bg-secondary-dark": "#151517",
        "text-primary-light": "#000",
        "text-primary-dark": "#fff",
        "text-secondary-light": "#888888",
        "text-secondary-dark": "#A1A1A6",
        "text-gradient-primary":
          "linear-gradient(90deg, #00B4DB, #0083B0, #3A00FF)",
        "text-gradient-secondary": "linear-gradient(90deg, #FF008E, #D500F9)",
        "code-bg-light": "#F2F2F2",
        "code-bg-dark": "#151517",
        "code-text-light": "#000",
        "code-text-dark": "#fff",
        "code-comment-light": "#888888",
        "code-comment-dark": "#A1A1A6",
        "code-punctuation-light": "#4d4d4d",
        "code-punctuation-dark": "#A1A1A6",
        "code-property-light": "#000",
        "code-property-dark": "#fff",
        "code-selector-light": "#000",
        "code-selector-dark": "#fff",
        "code-operator-light": "#888888",
        "code-operator-dark": "#A1A1A6",
        "code-atrule-light": "#000",
        "code-atrule-dark": "#fff",
        "code-function-light": "rgba(0, 0, 0, 0.5)",
        "code-function-dark": "rgba(255, 255, 255, 0.5)",
        "code-regexp-light": "#000",
        "code-regexp-dark": "#fff",
      },
      boxShadow: {
        "shadow-primary": "0px 0px 20px rgba(0, 0, 0, 0.5)",
        "shadow-secondary": "0px 0px 20px rgba(0, 0, 0, 0.1)",
        "shadow-primary-dark": "0px 0px 20px rgba(255, 255, 255, 0.5)",
        "shadow-secondary-dark": "0px 0px 20px rgba(255, 255, 255, 0.1)",
        "shadow-secondary-tag": "0px 0px 20px rgba(0, 0, 0, 0.05)",
        "shadow-secondary-dark-tag": "0px 0px 20px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "gradient-xy": "gradient-xy 3s ease infinite",
      },
      keyframes: {
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        "body::-webkit-scrollbar": {
          display: "none",
        },
        "button:focus": { outline: "none" },
      });
    }),
  ],
};
