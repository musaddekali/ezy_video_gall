import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/video_gallery.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
