/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': 'var(--white)',
      'black': 'var(--black)',
      'black-verdi': 'var(--black-verdi)',
      'beige': 'var(--beige)',
      'beige-light': 'var(--beige-light)',
      'gold': 'var(--gold)',
      'gold-dark': 'var(--gold-dark)',
    },
    fontSize: {
      title: ['16px', {
        fontWeight: 300,
        lineHeight: '19px',
        letterSpacing: '0.07em',
      }],
      paragraph: ['14px', {
        fontWeight: 300,
        lineHeight: '17px',
        letterSpacing: '0.07em',
      }],
      menu: ['8px', {
        fontWeight: 400,
        lineHeight: '10px',
        letterSpacing: '0.07em',
      }],
      'button__line': ['16px', {
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: '0.07em',
      }],
      button: ['16px', {
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: '0.07em',
      }],
      input: ['14px', {
        fontWeight: 300,
        lineHeight: '17px',
        letterSpacing: '0.07em',
      }],
      sm: ['12px', {
        fontWeight: 300,
        lineHeight: '14px',
        letterSpacing: '0.07em',
      }]
    },
    extend: {},
  },
  plugins: [],
}