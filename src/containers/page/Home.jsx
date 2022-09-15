import { Row, Col, Space } from "antd";
import HistoryCall from "../../components/historyCall";
import CustomerCare from "../../components/customerCare";
function Home() {
  return (
    <>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>
          <HistoryCall />
        </Col>
      </Row>
      <Row style={{ marginBottom: "16px" }} gutter="16">
        <Col span={12}>
          <CustomerCare />
        </Col>
        <Col span={12}>content 3</Col>
      </Row>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>content 4</Col>
      </Row>
      <Row gutter="16">
        <Col span={12}>content 5</Col>
        <Col span={12}>content 6</Col>
      </Row>
    </>
  );
}

export default Home;
