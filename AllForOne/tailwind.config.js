/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}", "./pages/**/*.html",
    "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
        /*
      header {
        background: url('bg-425.jpg');
      }

      @media only screen and (min-width:640px) {
        header {
            background: url('bg-640.jpg');
        }
      }

      @media only screen and (min-width:768px) {
        header {
            background: url('bg-768.jpg');
        }
      }

      @media only screen and (min-width:1024px) {
        header {
            background: url('bg-1024.jpg');
        }
      }

      @media only screen and (min-width:1025px) {
        header {
            background: url('bg-max.jpg');
        }
      } */
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

