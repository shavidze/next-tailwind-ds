import type { Preview } from "@storybook/react";

import "../src/app/globals.css"
const preview: Preview = {
  argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  
};

export default preview;
