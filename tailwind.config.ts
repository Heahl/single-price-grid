import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'cyan': 'hsl(179, 62%, 43%)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue': 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        karla: ["Karla", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
