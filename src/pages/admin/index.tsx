import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (): any => {
  const [state, setstate] = useState(false);
  const onFinish = (): any => {
    setstate(true);
  };

  const onFinishFailed = (): any => {
    setstate(false);
  };

  return (
    <div className="container">
      <main>
        {state}
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: `Please input your username!` }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: `Please input your password!` }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default Login;
