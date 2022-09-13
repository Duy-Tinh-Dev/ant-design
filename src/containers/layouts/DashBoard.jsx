import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pageRoutes from "../../config/Router";
// test
import HeaderTest from "../../components/header";
import SideBarTest from "../../components/sideBar";
import FooterTest from "../../components/footer";
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      {/* header */}
      <Header style={{ background: "#ccc", padding: 0 }}>
        <HeaderTest />
      </Header>
      <Layout>
        {/* content */}
        <Content>
          <Router>
            <Routes>
              {pageRoutes.map((route, index) => {
                const Page = route.element;
                return (
                  <Route key={index} element={<Page />} path={route.path} />
                );
              })}
            </Routes>
          </Router>
        </Content>
        {/* side bar */}
        <Sider>
          <SideBarTest />
        </Sider>
      </Layout>
      {/* footer */}
      <Footer>
        <FooterTest />
      </Footer>
    </Layout>
  );
};

export default Dashboard;
