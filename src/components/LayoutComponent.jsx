import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import NavbarComponent from "./NavbarComponent";

const LayoutComponent = ({ children, searchTerm, onSearch }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <NavbarComponent searchTerm={searchTerm} onSearch={onSearch} />
        <Content
          className="site-layout-background"
          style={{ padding: 24, margin: 0, minHeight: 280 }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
