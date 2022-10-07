import "@kcctdensan/oonow-libs/style.css"
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "@emotion/react"
import { theme, darkTheme } from "@kcctdensan/oonow-libs/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
