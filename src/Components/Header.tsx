import * as React from "react";
import { Layout } from "antd";
const { Header } = Layout;

interface Props {
  children: Array<React.ReactElement>;
}

function HeaderCustom(props: Props): React.ReactElement {
  const { children } = props;
  return (
    <Header style={{ height: "100%", backgroundColor: "#03a9f4" }}>
      {children}
    </Header>
  );
}

export default HeaderCustom;
