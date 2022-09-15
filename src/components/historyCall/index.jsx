import {
  DownOutlined,
  CaretDownOutlined,
  UserOutlined,
  PhoneOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import {
  Dropdown,
  Menu,
  Space,
  Typography,
  message,
  Table,
  Pagination,
  Row,
  Col,
  Checkbox,
} from "antd";
import { Button } from "antd";
import { useState } from "react";
import "./historyCall.css";
function HistoryCall() {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const handleToggleCheckBox = (id) => {
    const checkBox = document.querySelector(`#row-checkbox-${id}`);
    checkBox.classList.toggle("checkBox");
  };
  const [contentDropDown, setContentDropDown] = useState(true);
  const [checkBox, isCheckBox] = useState(false);

  const handleToggleDropDown = () => {
    setContentDropDown(!contentDropDown);
  };
  const { Title } = Typography;
  // const handleMenuClick = (e) => {
  // };
  const menu = (
    <Menu
      // onClick={handleMenuClick}
      items={[
        {
          label: "Hôm qua",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "3 Ngày trước",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "Tuần trước",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "name",
    },
    {
      title: "Phân loại",
      dataIndex: "type",
    },
    {
      title: "SĐT",
      dataIndex: "tel",
    },
    {
      title: "Lần gọi cuối",
      dataIndex: "lastCall",
    },
    {
      title: "Lần gọi sau",
      dataIndex: "nextCall",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      title: "",
      dataIndex: "active",
    },
  ];
  const data = [
    {
      key: "1",
      name: <div className="first-col col1">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-1"
            className=""
            onClick={() => handleToggleCheckBox(1)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "2",
      name: <div className="first-col col2">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-2"
            className=""
            onClick={() => handleToggleCheckBox(2)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "3",
      name: <div className="first-col col3">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-3"
            className=""
            onClick={() => handleToggleCheckBox(3)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "4",
      name: <div className="first-col col4">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-4"
            className=""
            onClick={() => handleToggleCheckBox(4)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "5",
      name: <div className="first-col col5">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-5"
            className=""
            onClick={() => handleToggleCheckBox(5)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "6",
      name: <div className="first-col col1">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-6"
            className=""
            onClick={() => handleToggleCheckBox(6)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "7",
      name: <div className="first-col col2">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-7"
            className=""
            onClick={() => handleToggleCheckBox(7)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
    {
      key: "8",
      name: <div className="first-col col3">John Brown"</div>,
      type: "cá nhân",
      tel: "0571-22098909",
      lastCall: "12/8/2022",
      nextCall: "17/8/2022",
      note: "Đã làm khảo sát",
      active: [
        <Space size="middle">
          <PhoneOutlined
            style={{
              fontSize: "12px",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#37B170",
              color: "white",
            }}
          />
          <CheckSquareOutlined
            style={{
              fontSize: "32px",
              padding: "10px",
              color: "#ccc",
            }}
            id="row-checkbox-8"
            className=""
            onClick={() => handleToggleCheckBox(8)}
          ></CheckSquareOutlined>
        </Space>,
      ],
    },
  ];
  return (
    <div className="historyCall_wrap">
      <div className="historyCall_header">
        <CaretDownOutlined
          style={{ fontSize: "16px", color: "#8c8c8c" }}
          onClick={handleToggleDropDown}
        />
        <Title level={4} style={{ margin: "0px 16px" }} className="no-select">
          Lịch gọi điện
        </Title>
        <Dropdown overlay={menu}>
          <Button
            type="primary"
            style={{
              borderRadius: "8px",
              backgroundColor: "#37B170",
              fontWeight: "600",
            }}
          >
            <Space>
              Hôm nay
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className={`historyCall_content`}>
        {contentDropDown && (
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={{
              pageSize: 5,
              className: "pagination",
              total: 200,
              showTotal: (total) => `1-20 of ${total}`,
              onChange: (page) => {
                console.log(page);
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default HistoryCall;
