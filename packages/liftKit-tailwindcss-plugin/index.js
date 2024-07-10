import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  function (options = {}) {
    const pluginPrefix = options?.pluginPrefix || "lk";
    var materialColors = tailwindThemeFromColor(
      options?.colorsMap || { primary: "#ff0000" },
      options?.scheme || "content",
      options?.contrast || 0
    );
    // const colorsMap = options.colorsMap ?? { primary: "#ff0000" };
    return function ({
      addBase,
      addUtilities,
      config,
      corePlugins,
      e,
      matchComponents,
      matchUtilities,
      addComponents,
      matchVariant,
      theme,
    }) {
      addComponents({
        // [`.${className}`]: {
        //   // Add your component styles here
        // },
      });
    };
  },
  function (options = {}) {
    const pluginPrefix = options?.pluginPrefix || "lk";
    var materialColors = tailwindThemeFromColor(
      options?.colorsMap || { primary: "#ff0000" },
      options?.scheme || "content",
      options?.contrast || 0
    );
    const boxShadows = require("./themes/shadows.json");

    return {
      theme: {
        boxShadow: boxShadows,
        aspectRatio: {
          "16-9": "16 / 9",
          "4-3": "4 / 3",
          "3-2": "3 / 2",
          "9-16": "9 / 16",
          "1-1": "1 / 1",
        },
        fontWeight: {
          thin: "100",
          light: "300",
          bold: "700",
        },
        fontSize: {
          "display-lg": [
            "4.235em",
            {
              lineHeight: "1.129",
              letterSpacing: "-0.022em",
              fontWeight: "400",
            },
          ],
          "display-sm": [
            "2.618em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.022em",
              fontWeight: "400",
            },
          ],
          "title-lg": [
            "2.058em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.022em",
              fontWeight: "400",
            },
          ],
          "title-md": [
            "1.618em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.02em",
              fontWeight: "400",
            },
          ],
          "title-sm": [
            "1.272em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.017em",
              fontWeight: "400",
            },
          ],
          heading: [
            "1.129em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.014em",
              fontWeight: "600",
            },
          ],
          "heading-sub": [
            "0.885em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.007em",
              fontWeight: "400",
            },
          ],
          body: [
            "1em",
            {
              lineHeight: "1.618",
              letterSpacing: "-0.011em",
              fontWeight: "400",
            },
          ],
          callout: [
            "0.943em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.009em",
              fontWeight: "400",
            },
          ],
          label: [
            "0.835em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.004em",
              fontWeight: "500",
            },
          ],
          caption: [
            "0.786em",
            {
              lineHeight: "1.272",
              letterSpacing: "-0.007em",
              fontWeight: "400",
            },
          ],
          overline: [
            "0.786em",
            {
              lineHeight: "1.272",
              letterSpacing: "0.0618em",
              fontWeight: "400",
            },
          ],
        },
        extend: {
          borderRadius: ({ theme }) => ({
            none: "0px",
            ...theme("spacing"),
            circle: "100em",
          }),
          spacing: {
            "2xs": "0.236em",
            xs: " 0.382em",
            sm: "0.618em",
            // DEFAULT: '1em',
            md: "1em",
            lg: "1.618em",
            xl: "2.618em",
            "2xl": "4.236em",
          },
          colors: {
            [`${pluginPrefix}`]: materialColors,
          },
        },
      },
    };
  }
);
