import { ThemeProvider } from "../src/layouts";
import { createRoot } from "solid-js"
import { insert, template, createComponent } from "solid-js/web"

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  ((Story) => {
    
    const root = createRoot(() => {
      const element = template("<div/>").cloneNode(true)
      insert(element, createComponent(Story, {}))
      return element
    })

    return (
      <ThemeProvider>
        {root}
      </ThemeProvider>
    )
  }),
]