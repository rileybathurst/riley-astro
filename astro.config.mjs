// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
});




// TODO: I can do something like this
/* Step 1 — Generate CSS text from your array (plain JS, no special tool needed):
jsconst spacingScale = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];

let css = '';
for (const value of spacingScale) {
  const label = value === 0 ? '0' : `${value}`.replace('.', '_') + 'rem';
  css += `.margin-block-end-${label} { margin-block-end: ${value === 0 ? 0 : value + 'rem'}; }\n`;
}
Step 2 — Pass that string into Lightning CSS to minify/autoprefix/target browsers:
jsimport { transform } from 'lightningcss';

const { code } = transform({
  filename: 'utilities.css',
  code: Buffer.from(css),
  minify: true,
  targets: { safari: (14 << 16), chrome: (90 << 16) },
}); */