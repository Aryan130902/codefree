/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      ],

      theme: {
        extend: {
        
          colors :{
            'primary': '#524FD5',
            'heading':'#181B32',
            'secondary':'#666680',
            'bgcolor' : '#FFF5F1',
            'bgsecondary' : '#F8FAFE'
          },

      fontFamily:{
        'primaryfont' : ['Poppins'],
      },

    },
  },
 
  plugins: [
    require('flowbite/plugin')
  ],
}
