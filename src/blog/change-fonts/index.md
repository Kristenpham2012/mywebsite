---
title: How to Change Fonts in this Website Template
date: 2019-03-13
description:
---

![Fonts](img/1200/16x9/04.jpg)

The choice of fonts is one of the most essential design decisions for a website. The font should amplify and underline the subject at hand. There are many free sources for fonts in the internet, e.g. [FontSquirrel](https://www.fontsquirrel.com/), [Dafont](https://www.dafont.com), [1001 free fonts](https://www.1001freefonts.com/) and many more. However, the most prominent one is probably [Google fonts](https://fonts.google.com/).

This site employs two Google fonts, namely, Montserrat and Dosis. If you want to use a different font for your site, you can easily achieve this by doing the following:

1. Choose the font you like from [Google fonts](https://fonts.google.com/). Say this is [Roboto](https://fonts.google.com/specimen/Roboto) and that you want to replace Dosis with Roboto.

1. Install the desired font from npm. As explained in [https://github.com/KyleAMathews/typefaces](https://github.com/KyleAMathews/typefaces), you need to add the font name after `typeface-`, e.g.:

    ```Shell
    npm install --save typeface-roboto
    ```

1. Now, import the new typeface into your `<Layout />`-component, e.g.:

    ```JS
    import "typeface-roboto"
    ```

    Don't forget to delete:

    ```JS
    import "typeface-dosis"
    ```

1. Then open `src/utils/typography.js` where you can enter Roboto as your default font with its CSS-name into the JavaScript object `typography`:

    ```JS
    const typography = new Typography({
      baseFontSize: "18px",
      baseLineHeight: 1.5,
      headerFontFamily: ["Montserrat", "serif"],
      bodyFontFamily: ["Roboto", "serif"],
    })
    ```



