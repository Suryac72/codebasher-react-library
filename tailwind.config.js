/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            flex: {
                2: '0 0 17%',
                3: '0 0 66%'
            },
            colors: {
                primary: '#4A3AFF'
            }
        }
    },
    plugins: []
};
