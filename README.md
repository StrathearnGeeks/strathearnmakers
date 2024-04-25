# Strathearn Makers website

[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)

## Overview

This is the Strathearn Makers feedback form website, used for gathering feedback from potential users of the maker space.

## Usage

* The "hazard" card and contact form are inserted into the index page (`content/_index.md`) by use of the shortcodes `{{< hazard_card >}}` and `{{< contact_form >}}`, the contents of the "hazard" card in terms of header, copy text etc can be customised within the front matter of `content/_index.md`. 

* The formspree endpoint for the form can be changed in `themes/strathearn_makers_theme/layouts/shortcodes/contact_form.html`.
