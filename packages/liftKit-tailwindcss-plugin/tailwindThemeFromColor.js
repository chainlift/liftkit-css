import {
  argbFromHex,
  hexFromArgb,
  customColor,
  SchemeContent,
  Hct,
  MaterialDynamicColors,
  SchemeExpressive,
  SchemeFidelity,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeTonalSpot,
  SchemeVibrant,
} from "@material/material-color-utilities";

const kebabize = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

const AllMaterialDynamicColors = {
  background: MaterialDynamicColors.background,
  "on-background": MaterialDynamicColors.onBackground,

  surface: MaterialDynamicColors.surface,
  "surface-dim": MaterialDynamicColors.surfaceDim,
  "surface-bright": MaterialDynamicColors.surfaceBright,
  "surface-container-lowest": MaterialDynamicColors.surfaceContainerLowest,
  "surface-container-low": MaterialDynamicColors.surfaceContainerLow,
  "surface-container": MaterialDynamicColors.surfaceContainer,
  "surface-container-high": MaterialDynamicColors.surfaceContainerHigh,
  "surface-container-highest": MaterialDynamicColors.surfaceContainerHighest,
  "on-surface": MaterialDynamicColors.onSurface,
  "on-surface-dim": MaterialDynamicColors.onSurface,
  "on-surface-bright": MaterialDynamicColors.onSurface,
  "on-surface-container-lowest": MaterialDynamicColors.onSurface,
  "on-surface-container-low": MaterialDynamicColors.onSurface,
  "on-surface-container": MaterialDynamicColors.onSurface,
  "on-surface-container-high": MaterialDynamicColors.onSurface,
  "on-surface-container-highest": MaterialDynamicColors.onSurface,

  "surface-variant": MaterialDynamicColors.surfaceVariant,
  "on-surface-variant": MaterialDynamicColors.onSurfaceVariant,

  "inverse-surface": MaterialDynamicColors.inverseSurface,
  "on-inverse-surface": MaterialDynamicColors.inverseOnSurface,

  outline: MaterialDynamicColors.outline,
  "outline-variant": MaterialDynamicColors.outlineVariant,

  "surface-tint": MaterialDynamicColors.surfaceTint,
  "on-surface-tint": MaterialDynamicColors.onSurface,

  primary: MaterialDynamicColors.primary,
  "on-primary": MaterialDynamicColors.onPrimary,

  "primary-container": MaterialDynamicColors.primaryContainer,
  "on-primary-container": MaterialDynamicColors.onPrimaryContainer,

  "inverse-primary": MaterialDynamicColors.inversePrimary,

  secondary: MaterialDynamicColors.secondary,
  "on-secondary": MaterialDynamicColors.onSecondary,

  "secondary-container": MaterialDynamicColors.secondaryContainer,
  "on-secondary-container": MaterialDynamicColors.onSecondaryContainer,

  tertiary: MaterialDynamicColors.tertiary,
  "on-tertiary": MaterialDynamicColors.onTertiary,

  "tertiary-container": MaterialDynamicColors.tertiaryContainer,
  "on-tertiary-container": MaterialDynamicColors.onTertiaryContainer,

  error: MaterialDynamicColors.error,
  "on-error": MaterialDynamicColors.onError,

  "error-container": MaterialDynamicColors.errorContainer,
  "on-error-container": MaterialDynamicColors.onErrorContainer,
};

/**
 *
 * @param {Record<string, string>} colorsMap Values must be hex colors and 'primary' must be present.
 */
export const tailwindThemeFromColor = (colorsMap, scheme, contrast) => {
  const { primary, ...extraColors } = colorsMap;

  const source = argbFromHex(primary);

  const SchemeObjects = {
    content: SchemeContent,
    expressive: SchemeExpressive,
    fidelity: SchemeFidelity,
    monochrome: SchemeMonochrome,
    neutral: SchemeNeutral,
    tonalSpot: SchemeTonalSpot,
    vibrant: SchemeVibrant,
  };
  const SchemeObject = SchemeObjects[scheme] || SchemeObjects.content;

  const lightScheme = new SchemeObject(Hct.fromInt(source), false, contrast);
  const darkScheme = new SchemeObject(Hct.fromInt(source), true, contrast);

  // default colors
  const colors = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#ffffff",
  };

  Object.entries(AllMaterialDynamicColors).forEach(([name, DynamicColor]) => {
    const lightHex = hexFromArgb(DynamicColor.getArgb(lightScheme));
    const darkHex = hexFromArgb(DynamicColor.getArgb(darkScheme));
    colors[`${name}-light`] = lightHex;
    colors[`${name}-dark`] = darkHex;
  });

  Object.keys(extraColors).forEach((colorName) => {
    const value = extraColors[colorName];

    const hex = typeof value === "string" ? value : value.hex;
    const blend = value === hex ? true : value.harmonize;

    const { light, dark } = customColor(source, {
      value: argbFromHex(hex),
      blend,
    });
    const kebabName = kebabize(colorName);

    colors[`${kebabName}-light`] = hexFromArgb(light.color);
    colors[`on-${kebabName}-light`] = hexFromArgb(light.onColor);
    colors[`${kebabName}-container-light`] = hexFromArgb(light.colorContainer);
    colors[`on-${kebabName}-container-light`] = hexFromArgb(
      light.onColorContainer
    );
    colors[`${kebabName}-dark`] = hexFromArgb(dark.color);
    colors[`on-${kebabName}-dark`] = hexFromArgb(dark.onColor);
    colors[`${kebabName}-container-dark`] = hexFromArgb(dark.colorContainer);
    colors[`on-${kebabName}-container-dark`] = hexFromArgb(
      dark.onColorContainer
    );
  });

  return colors;
};
