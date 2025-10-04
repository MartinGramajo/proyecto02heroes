import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu, Input } from "antd";
import { Link } from "react-router-dom";

const NavbarComponent = ({ searchTerm, onSearch }) => {
  const [current, setCurrent] = useState("Heroes");

  const onClick = (e) => setCurrent(e.key);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="Heroes" icon={<MailOutlined />}>
        <Link to="/">Rolling Heroes</Link>
      </Menu.Item>
      <Menu.Item key="marvel" icon={<AppstoreOutlined />}>
        <Link to="/marvel">Marvel</Link>
      </Menu.Item>
      <Menu.Item key="dc" icon={<AppstoreOutlined />}>
        <Link to="/dc">DC</Link>
      </Menu.Item>

      
      <Menu.Item key="search" disabled >
        <Input
          placeholder="Buscar héroe..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </Menu.Item>
    </Menu>
  );
};

export default NavbarComponent;
