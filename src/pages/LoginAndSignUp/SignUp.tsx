import React from 'react'
import Icon from '../../assets/Icon'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const SignUp = () => {
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  return (
    <div className='mx-4'>
      <div className='mt-[155px] flex flex-col items-center justify-center'>
        <div>
          <Icon />
        </div>
        <div>
            <p className='text-base font-bold leading-6 mt-4'>Let's Get Started</p>
            <p className='text-[#9098B1] text-xs font-normal mt-2'>Create an new account</p>
        </div>
      </div>

      <div className="mt-7">
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
          <Form.Item className="mb-2">
            <Input 
            prefix={<UserOutlined />} 
            placeholder="Full Name" 
            className="h-12"
            />
          </Form.Item>
          <Form.Item className="mb-2">
            <Input
              prefix={<MailOutlined />}
              
              placeholder="Your Email"
              className="h-12"
            />
          </Form.Item>
          <Form.Item className="mb-2">
            <Input
              placeholder="Password"
              prefix={<LockOutlined />}
              className="h-12"
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Password Again"
              prefix={<LockOutlined />}
              className="h-12"
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' className='h-[57px] w-full font-bold'>
              Sign up
            </Button>
          </Form.Item>

        </Form>
      </div>
      <div className="flex justify-center mt-6">
        <p className="text-[#9098B1] text-xs font-normal">have a account? 
        <button className="text-[#40BFFF] text-xs font-bold">Sign in</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;