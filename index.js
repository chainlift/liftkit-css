/** @type {import('tailwindcss').Config} */

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
      fontSize: {
        "display-1": [
          "4.235em",
          { lineHeight: "1.129", letterSpacing: "-0.022em", fontWeight: "400" },
        ],
        "display-2": [
          "2.618em",
          { lineHeight: "1.272", letterSpacing: "-0.022em", fontWeight: "400" },
        ],
        "title-a": [
          "2.058em",
          { lineHeight: "1.272", letterSpacing: "-0.022em", fontWeight: "400" },
        ],
        "title-b": [
          "1.618em",
          { lineHeight: "1.272", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "title-c": [
          "1.272em",
          { lineHeight: "1.272", letterSpacing: "-0.017em", fontWeight: "400" },
        ],
        heading: [
          "1.129em",
          { lineHeight: "1.272", letterSpacing: "-0.014em", fontWeight: "600" },
        ],
        subheading: [
          "0.885em",
          { lineHeight: "1.272", letterSpacing: "-0.007em", fontWeight: "400" },
        ],
        body: [
          "1em",
          { lineHeight: "1.618", letterSpacing: "-0.011em", fontWeight: "400" },
        ],
        callout: [
          "0.943em",
          { lineHeight: "1.272", letterSpacing: "-0.009em", fontWeight: "400" },
        ],
        label: [
          "0.835em",
          { lineHeight: "1.272", letterSpacing: "-0.004em", fontWeight: "500" },
        ],
        caption: [
          "0.786em",
          { lineHeight: "1.272", letterSpacing: "-0.007em", fontWeight: "400" },
        ],
        overline: [
          "0.786em",
          { lineHeight: "1.272", letterSpacing: "0.0618em", fontWeight: "400" },
        ],
      },
      spacing: ({ theme }) => theme("emSizes"),
      borderRadius: {
        none: "0px",
        xxs: ".06em",
        xs: ".129em",
        s: "0.272em",
        DEFAULT: "0.618em",
        m: "0.618m",
        lg: "1.058em",
        xl: "1.618em",
        xxl: "2.235em",
        xxxl: "4.235em",
        circle: "100em",
      },
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
