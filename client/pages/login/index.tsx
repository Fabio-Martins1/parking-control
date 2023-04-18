import React from "react";

import styles from "./login.module.css"

import {Button, Form, notification,} from "antd";
import {LoginOutlined, UserAddOutlined} from "@ant-design/icons";
import {FieldGenerator} from "../FieldGenerator";
import {fieldsLogin} from "./fieldsLogin";
import {useRouter} from "next/router";

export default function Login() {

  const router = useRouter();

  const onFinish = (): void => {
    notification.success({
      message: "Bem-vindo!"
    });
    router.push("/")
  }
  const onFinishFailed = (): void => {
    notification.error({
      message: "Algo deu errado!",
      description: "Preencha os campos corretamente!"
    });
  }

  return (
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <Form
              name={"loginForm"}
              layout={"vertical"}
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete={"on"}
          >
            <FieldGenerator fieldsList={fieldsLogin}/>
            <Form.Item wrapperCol={{offset: 2, span: 20}}>
              <Button block
                      size={"large"}
                      shape={"round"}
                      type={"primary"}
                      htmlType={"submit"}
                      icon={<LoginOutlined/>}
              >Entrar</Button>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 6, span: 12}}>
              <Button block
                      size={"large"}
                      shape={"round"}
                      type={"default"}
                      href={"/createAccount"}
                      icon={<UserAddOutlined/>}
              >Registre-se</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  )
}