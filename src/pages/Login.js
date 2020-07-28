import React, {Component} from 'react'

import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import {inject,observer} from "mobx-react"


const { Header, Footer,  Content } = Layout;

@inject('user')

@observer
class Login extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
        };
        const tailLayout = {
            wrapperCol: { offset: 0, span: 24 },
        };

        const onFinish = values => {
            console.log('Success:', values);
            this.props.user.login()
                .then(data=>{
                    console.log(data);
                    this.props.history.push("/index")
                })
                .catch(err=>{
                    console.log(err);
                });
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                    <Layout>
                        <Header>班级管理系统</Header>
                        <Content>
                            {/*登录页的内容*/}
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="用户名"
                                    name="username"
                                    rules={[{ required: true, message: '请输入用户名!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="密码"
                                    name="password"
                                    rules={[{ required: true, message: '请输入密码!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Content>
                        <Footer>备案号：11111111111111111</Footer>
                    </Layout>
            </div>
        )
    }
}

export default Login 