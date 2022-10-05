import { Row } from "antd";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import "./index.css";
const datas = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Khách hàng tiềm năng",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Quản lí lịch hẹn",
    icon: "fa-regular fa-calendar-days",
  },
  {
    title: "Tư vấn",
    icon: "fa-solid fa-user-doctor",
  },
  {
    title: "Chăm sóc",
    icon: "fa-solid fa-phone",
  },
  {
    title: "Hỏi đáp",
    icon: "fa-regular fa-circle-question",
  },
  {
    title: "Kiến thức tư vấn tài chính",
    icon: "fa-solid fa-book-open",
  },
];

function HeaderTest() {
  return (
    <Row className="header_wrapper">
      {datas.map((data) => {
        return (
          <>
            <Link className="link" to="/">
              <i className={data.icon}></i>
              {data.title}
            </Link>
          </>
        );
      })}
    </Row>
  );
}

export default HeaderTest;
