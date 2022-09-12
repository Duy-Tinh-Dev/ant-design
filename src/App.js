import { Layout } from "antd";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Content from "./components/content";
// const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Layout>
          <Content />
          {/* <Sider>Sider</Sider> */}
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
}

export default App;
