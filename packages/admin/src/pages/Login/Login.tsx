import React, { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Card, Form, Input, Button } from 'antd'
import styles from './index.module.less'
import { contexts } from '@/domains'

const Login: FC = () => {
  const { changeLoginStatus } = contexts.GlobalContext.useContainer()
  const { changeUsername, changePassword, doLogin } =
    contexts.AuthContext.useContainer()
  const [form] = Form.useForm<{
    username?: string
    password?: string
  }>()
  const navigate = useNavigate()

  const handleSubmit = async (): Promise<void> => {
    const values = await form.validateFields()

    if (!values) return

    changeUsername(values.username)
    changePassword(values.password)

    await doLogin()

    changeLoginStatus(true)

    navigate('/home')
    // form
    //   .validateFields((opt) => {
    //     console.log(opt)
    //     const values = form.getFieldsValue()
    //     console.log(values)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  return (
    <div className={styles.LoginContainer}>
      <Card>
        <div className={styles.Title}>密码登录</div>
        <Form style={{ width: 400 }} form={form} onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入登录账号' }]}
          >
            <Input size="middle" placeholder="请输入登录账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入登录密码' }]}
          >
            <Input.Password size="middle" placeholder="请输入登录密码" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="middle" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Login)
