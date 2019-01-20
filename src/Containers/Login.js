import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card , Input , Button , Row , Col , Form } from 'antd';


class Login extends React.Component{
    render(){
        return(
        <div>
            <NavLink to="/login"/>
            <Row className="main-row">
                <Col span={8}>
                    <Card>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>)
    }
}
export default Login;