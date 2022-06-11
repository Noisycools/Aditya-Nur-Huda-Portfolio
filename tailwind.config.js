module.exports = {
  content: ["index.html", "about-me.html", "gallery.html"],
  theme: {
    extend: {
      dropShadow: {
        '2lg': '0 10px 8px rgb(0 0 0 / 0.35)',
      },
      maxHeight: {
        '552': '552px',
        '624': '624px',
      },
      maxWidth: {
        '1136': '1136px',
      },
      hueRotate: {
        '160': '-160deg',
        160: '160deg',
        '20': '-20deg',
        20: '20deg',
      },
      width: {
        '540': '540px',
      }
    },
  },
  plugins: [],
};
