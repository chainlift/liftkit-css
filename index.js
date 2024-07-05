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
      boxShadow: {
        soft: "0 0 1px rgb(0, 0, 0), 0 12px 24px -4px rgb(21, 19, 22/ .05);",
        1: "0 0 1px 0 rgb(0, 0, 0);",
        2: "0 4px 6px rgb(0, 0, 0/ .08), 0 2px 4px rgb(0, 0, 0/ .11), 0 0 1px rgb(0, 0, 0);",
        3: "0 20px 25px rgb(0, 0, 0/ .09), 0 5px 11px rgb(0, 0, 0/ .12), 0 0 1px rgb(0, 0, 0/ 0.07);",
        4: "0 20px 25px rgb(0, 0, 0 / .09), 0 5px 11px rgb(0, 0, 0/ .12), 0 0 1px rgb(0, 0, 0/ 0.07);",
      },
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
