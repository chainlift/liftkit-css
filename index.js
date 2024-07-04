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
    //   colors: {},
      emSizes: {
        xxs: ".236em",
        xs: ".382em",
        s: ".618em",
        m: "1em",
        l: "1.618em",
        xl: "2.618em",
        xxl: "3.618em",
      },
      spacing: ({ theme }) => theme("emSizes"),
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
