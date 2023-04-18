import React from "react";
import {ConfigProvider} from "antd";
import {PageProvider} from "./PageProvider";

function App() {

  const primary = "#FFA119";
  const primaryDark = "#A66200";
  const dark = "#1C1C1C";

  return <>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: dark,
            colorIconHover: primaryDark,
            colorLinkHover: primaryDark,
          },
        }}
    >
      <PageProvider/>
    </ConfigProvider>
  </>

}

export default App
