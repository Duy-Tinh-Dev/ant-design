import { Row, Col, Space } from "antd";
import HistoryCall from "../../components/historyCall";
import CustomerCare from "../../components/customerCare";
import MissCall from "../../components/missCall";
import ChartContract from "../../components/chartContract";
import PotentialCustomer from "../../components/PotentialCustomer";
import SignedContract from "../../components/SignedContract";

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
        <Col span={12}>
          <MissCall />
        </Col>
      </Row>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>
          <PotentialCustomer />
        </Col>
      </Row>
      <Row gutter="16">
        <Col span={12}>
          <SignedContract />
        </Col>
        <Col span={12}>
          <ChartContract />
        </Col>
      </Row>
    </>
  );
}

export default Home;
