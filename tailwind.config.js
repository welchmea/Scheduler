/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkRed: '#AA2000',
        yellowGreen: '#7F7144',
        darkGreen: '#403E0D',
        lavendar: '#CFCFE8',
        // adobe image palette
        ochre: '#A6874E' ,
        tan:'#D9B596' ,
        redBrown: '#401801',
        beige: '#8C6F5E', 
        silver: '#D9D5D2',
        // pink color palette
        whiteish: '#FBFBFB',
        otherTan: '#E4D5C9',
        otherBeige: '#D0B6A6',
        salmon: '#F9E0DB',
        dkGreen: '#869F77',
        blueGrey: '#4E6F87',
        sage: '#90ADA9',
      },
      borderColor: '#D9D5D2'
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
}

