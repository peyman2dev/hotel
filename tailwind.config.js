/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    "screens": {
      "sm": "562px",
      "md": "768px",
      "lg": "992px",
      "xl": "1280px",
    },
    extend: {
      "container": {
        "center": true
      },
      "fontFamily": {
        'IranSans-Thin': 'IranSans-Thin',
        'IranSans-Light': 'IranSans-Light',
        'IranSans-Regular': 'IranSans-Regular',
        'IranSans-Medium': 'IranSans-Medium',
        'IranSans-DemiBold': 'IranSans-DemiBold',
        'IranSans-Bold': 'IranSans-Bold',
        'IranSans-ExtraBold': 'IranSans-ExtraBold',
        'IranSans-Black': 'IranSans-Black',
        'Kalameh-Thin': 'Kalameh-Thin',
        'Kalameh-Light': 'Kalameh-Light',
        'Kalameh-Regular': 'Kalameh-Regular',
        'Kalameh-Medium': 'Kalameh-Medium',
        'Kalameh-DemiBold': 'Kalameh-DemiBold',
        'Kalameh-Bold': 'Kalameh-Bold',
        'Kalameh-ExtraBold': 'Kalameh-ExtraBold',
        'Kalameh-Black': 'Kalameh-Black',


        'Bagela': 'Bagela',
        'Aesthetiva': 'Aesthetiva'
      },
      "colors": {
        "primary-900": "#29625E",
        "primary-800": "#357F7A",
        "primary-700": "#429C96",
        "primary-600": "#51B6B0",
        "primary-500": "#6EC2BD",
        "primary-400": "#8BCECA",
        "primary-300": "#A8DAD7",
        "primary-200": "#C5E7E5",
        "primary-100": "#E2F3F2",

        "secondary-900": "#62292D",
        "secondary-800": "#7F353A",
        "secondary-700": "#9C4148",
        "secondary-600": "#B65158",
        "secondary-500": "#C26E74",
        "secondary-400": "#CE8B8F",
        "secondary-300": "#DBA8AB",
        "secondary-200": "#E7C5C7",
        "secondary-100": "#F3E2E3",
      }

    },
  },
  plugins: [function ({ addVariant }) {
    addVariant("child", "& > *")
    addVariant("child-hover", "& > *:hover")
  }],
}

