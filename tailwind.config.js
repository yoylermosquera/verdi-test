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
      'need-changes': 'var(--need-changes)',
      'transparent': 'var(--transparent)',
      'black30': 'rgba(0, 0, 0, 0.3)'
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
    extend: {
      spacing: {
        'h_sm': '4.5rem',
        'h_lg': '7.5rem',
      },        
      backgroundImage: {
        'auth-hero': 'url("../assets/images/EstudioTextil.Tapetesencobre.Tapetesenfibrasnaturales.png")',
        'folder-bg': 'url("../assets/images/folderTypeBackground.png")',
      },
      gridTemplateColumns: {
        'header': '2fr 1fr 2fr',
      },
      gridTemplateRows: {
        'product_card_base': '8fr 2fr',
        'product_card_small': '7fr 3fr',
      },
      maxWidth: {
        'lg-wrapper': '80rem',
        'slider-wrapper': '1084px',
      },
      inset: {
        'header_mobile': '4.5rem',
        'header_dektop': '7.5rem',
      }
    },
  },
  plugins: [],
}