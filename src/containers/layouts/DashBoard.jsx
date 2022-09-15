import React, { useState } from "react";
import { Layout } from "antd";
import "./DashBoard.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pageRoutes from "../../config/Router";
// test
import { Row , Col ,Divider } from "antd";

import HeaderTest from "../../components/header";
import SideBarTest from "../../components/sideBar";
import FooterTest from "../../components/footer";
import Title from "antd/lib/skeleton/Title";
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      {/* header */}
      <Router>
      <Header style={{margin : '8vh 0 0 0',height: 'auto', background: "#fff", padding: 0}}>
        <HeaderTest />
      </Header>
      <Layout style={{margin: '50px 0 0 0'}}>
        {/* content */}
        
        <Col span={14}>
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
        {/* side bar */}

        <Col span={10}>
          <Sider className="sider">
            <SideBarTest />
          </Sider>
        </Col>
      </Layout>
      {/* footer */}
      <Footer>
        <FooterTest />
      </Footer>
      </Router>
    </Layout>
  );
};

export default Dashboard;
