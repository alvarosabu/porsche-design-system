# Changelog

## Porsche Design System - Utilities

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [Unreleased]

### [5.4.0] - 2022-12-15

### [5.4.0-rc.0] - 2022-12-14

#### Changed

- `line-height` calculation uses `ex`-unit in combination with `calc()` which gives the best performance, the easiest
  possible integration and respects UI best practices in having **larger** `line-height` values for **small**
  `font-size` definitions and **smaller** `line-height` values for **larger** `font-size` definitions. The calculated
  values by CSS slightly differ compared to the ones before calculated by JavaScript or SCSS, which might result in
  minor visual changes.

### [5.3.1] - 2022-06-22

### [5.3.1-rc.0] - 2022-06-21

### [5.3.0] - 2022-05-19

#### Changed

- npm package is prepared for public release on [npmjs.org](https://npmjs.com)

### [5.3.0-beta.1] - 2022-05-12

#### Added

**Disclaimer:** The provided theme `dark-electric` is just a proof of concept, it's **not** accessible regarding its
color contrast and might even be removed in an upcoming major release again.

- Theme `dark-electric`

### [5.3.0-beta.0] - 2021-12-07

#### Added

**Disclaimer:** The provided theme `light-electric` is just a proof of concept, it's **not** accessible regarding its
color contrast and might even be removed in an upcoming major release again.

- Theme `light-electric`

### [5.2.0] - 2021-11-30

#### Changed

- Use `Heiti SC` (pre-installed on iOS/macOS) and `SimHei` (pre-installed on Windows) as Chinese fallback for
  `font-family`

### [5.1.0] - 2021-10-04

#### Added

- External brand colors: `kakaotalk`, `naver`, `reddit` and `tiktok`
- Global screen reader only styles to hide contents visually but grant access for screen readers.
- `SimHei` and `黑体` as fallback for `font-family`

### [5.0.0] - 2021-08-12

#### Changed

- Introduce breaking change: Slash as Division. https://sass-lang.com/documentation/breaking-changes/slash-div

### [4.1.0] - 2021-07-01

#### Added

- Export `Breakpoint` type

### [4.0.0] - 2020-12-17

#### Changed

- Precision of relative line height
- Color of `neutral contrast low` from `#C9CACB` to `#E3E4E5`

### [3.0.0] - 2020-11-26

#### Added

- `:focus` SCSS mixin and JS function
- Support to load `font-face.css` from China CDN directly via browser flag: `PORSCHE_DESIGN_SYSTEM_CDN = 'cn';`
- **Notification Soft** colors

#### Changed

- Background surface and hover/active state colors for dark theme
- Global focus colors

### [2.0.0] - 2020-08-19

### [2.0.0-rc.0] - 2020-08-17

#### Changed

- `FONT_FACE_CDN_URL` with changed UPM (units per em): different character size, letter spacing and vertical alignment

### [1.1.0] - 2020-08-12

### [1.1.0-rc.0] - 2020-08-12

#### Changed

- Generate typography.ts static
- Deprecated `FONT_FACE_STYLE_CDN_URL`, use `FONT_FACE_CDN_URL` instead

### [1.0.6] - 2020-07-28

### [1.0.6-rc.0] - 2020-07-28

#### Changed

- Use rollup to build / bundle package

### [1.0.5] - 2020-07-27

#### Fixed

- Package content
- Import of scss

### [1.0.5-rc.1] - 2020-07-27

#### Fixed

- Package content

### [1.0.5-rc.0] - 2020-07-27

#### Fixed

- Package content

### [1.0.4] - 2020-07-27

#### Fixed

- Package content

### [1.0.3] - 2020-07-27

#### Fixed

- Package content

### [1.0.2] - 2020-07-24

#### Fixed

- Pipeline output of package

### [1.0.1] - 2020-07-22

#### Fixed

- Added dependency CSS Types

### [1.0.0] - 2020-07-15

#### Added

- **Notification Neutral** color
- **Background Shading** color for overlays

### [1.0.0-rc.0] - 2020-06-18

#### Added

- Initial release
