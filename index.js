module.exports = require("tailwindcss/plugin")(
  function ({
    addBase,
    addUtilities,
    config,
    corePlugins,
    e,
    matchComponents,
    matchUtilities,
    matchVariant,
    theme,
  }) {
    // in this section we add custom classes and utilize function provided above.
  },
  {
    // important: true,
    // separator: "_",
    theme: {
      // extend: {
      // },
    },
    corePlugins: {
      float: false,
    },
    variants: {
      extend: {},
    },
  }
);
