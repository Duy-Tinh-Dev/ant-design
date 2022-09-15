import React, { useState } from "react";
import { Layout, Col, Space, Divider, Typography } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pageRoutes from "../../config/Router";
import "./style.css";
// test
import HeaderTest from "../../components/header";
import SideBarTest from "../../components/sideBar";
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { Title } = Typography;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="app">
      <Router>
        {/* header */}
        <Header>
          <HeaderTest />
        </Header>
        <Title level={4} style={{ margin: "10px 24px 16px" }}>
          Trang Chủ
        </Title>
        <Layout className="container">
          <Col span={16} style={{ marginRight: "10px" }}>
            <Content>
              <Routes>
                {pageRoutes.map((route, index) => {
                  const Page = route.element;
                  return (
                    <Route key={index} element={<Page />} path={route.path} />
                  );
                })}
              </Routes>
            </Content>
          </Col>
          <Col span={8}>
            {/* side bar */}
            <Sider className="side-bar">
              <SideBarTest />
            </Sider>
          </Col>
        </Layout>
      </Router>
    </Layout>
  );
};

export default Dashboard;
