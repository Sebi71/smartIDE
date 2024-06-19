import { useSelector } from "react-redux";
import "./index.scss";

export default function View() {
    const tabsState = useSelector((state) => state.tabs);

    function getCode(lang) {
        return tabsState.find((obj) => obj.lang === lang).code
    }

    const srcDoc = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>${getCode("css")}</style>
    </head>
    <body>
      ${getCode("html")}
      <script>${getCode("javascript")}</script>
    </body>
  </html>
  `

  return (
    <div className="view-container">
        <iframe
            className="iframe-view" 
            srcDoc={srcDoc} 
            sandbox="allow-scripts">
        </iframe>
    </div>
  )
}