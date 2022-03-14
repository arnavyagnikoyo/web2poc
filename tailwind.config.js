module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            crimson: {
                ll: "#F9D586",
                lighter: "#FFEDC7",
                light: "#FFF9EB",
                DEFAULT: "#B57C00",
                dark: "#754500",
                darker: "#F9D586",
                dd: "#F0A80E",
            },
            amber: {
                ll: "#BFBFBF",
                lighter: "#D9D9D9",
                light: "#F5F5F5",
                DEFAULT: "#4D4D4D",
                dark: "#2E2E2E",
                darker: "#141414",
                dd: "#737373",
            },
            emerald: {
                ll: "#F67751",
                lighter: "#FFBCA8",
                light: "#FEF2EF",
                DEFAULT: "#8D2607",
                dark: "# 611 B05",
                darker: "#270B02",
                dd: "# CB380B",
            },
            sky: {
                ll: "#29D196",
                lighter: "#97E7CB",
                light: "#EBFFF8",
                DEFAULT: "#00613F",
                dark: "#00472E",
                darker: "#001F14",
                dd: "#008F5D",
            },
            lavender: {
                ll: "#C570FF",
                lighter: "#E2B8FF",
                light: "#FBF5FF",
                DEFAULT: "#8900E5",
                dark: "#6100A3",
                darker: "#2B0047",
                dd: "#A41FFF",
            },
            asphalt: {
                ll: "#52A8FF",
                lighter: "#99DDFF",
                light: "#F0FAFF",
                DEFAULT: "#004F9E",
                dark: "#003A75",
                darker: "#02172C",
                dd: "#0075EB",
            }

        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontSize: {
            xs: ['10px', '13px'],
            s: ['11px', '16px'],
            sm: ['12px', '16px'],
            m: ['14px', '20px'],
            base: ['16px', '22px'],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
            arnav: ['14px', '24px']
        },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',

            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '12px',
        },
        extend: {
            spacing: {
                's': '4px',
                'm': '8px',
                'l': '16px',
                'xl': '32px'
            },

        }
    },
    plugins: [],
}