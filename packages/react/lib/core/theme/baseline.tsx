import { Global, normalize } from '../styling'

export const CssBaseline = () => (
  <Global
    styles={[
      normalize,
      (theme) => `
        body {
          background: ${theme.variable.background};
          color: white;
        }
      `,
    ]}
  />
)
