import React, {Component} from 'react'
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import {inject,observer} from "mobx-react"


const { SubMenu } = Menu;



@inject("user")

@observer
class LeftMenu extends Component {
    //获取数据动态生成左边栏菜单
    bindMenu(){
       console.log(this.props.user);
       console.log(this.props.user.user.menuInfo[0].menuName);

    }
    UNSAFE_componentWillMount(){
        this.bindMenu()
    }

    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="13" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default LeftMenu 