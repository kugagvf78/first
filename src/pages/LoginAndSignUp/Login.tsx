import React, { useState } from 'react';
import Icon from '../../assets/Icon';
import { Button, Form, Input, Radio } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import IconGoogle from '../../assets/IconGoogle';
import IconFacebook from '../../assets/IconFacebook';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className='px-4'>
      <div className='mx-[88px] mt-[106px] flex flex-col items-center justify-center'>
        <div className=''>
          <Icon />
        </div>
        <p className='text-base	font-bold mt-4'>Welcome to Lafyuu</p>
        <p className='text-xs	font-normal text-[#9098B1] mt-2'>
          Welcome to Lafyuu
        </p>
      </div>

      <div className='mt-7'>
        <Form
          form={form}
          // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
        >
          <Form.Item>
            <Input
              placeholder='Your Email'
              prefix={<MailOutlined />}
              className='h-12'
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder='Password'
              prefix={<LockOutlined />}
              className='h-12'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' className='w-full h-[57px]'>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='flex items-center mb-4'>
        <hr className='flex-1 ' />
        <p className='mx-3'>OR</p>
        <hr className='flex-1' />
      </div>

      <div>
        <Button icon={<IconGoogle />} className='w-full h-[57px]'>
          Login with Google
        </Button>
        <Button icon={<IconFacebook />} className='w-full h-[57px]'>
          Login with facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
