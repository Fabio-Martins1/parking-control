import {IFields} from "../Interfaces";
import {MailOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
const rulesConfirmPassword = [
  {
    required: true,
    message: "Entre com uma senha válida",
    min: 8
  },
  ({getFieldValue}:any) => ({
    validator(_:any, value:any) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("As duas senhas não coincidem!"));
    }
  })
]
export const CreateAccountFields:IFields[] = [
  {
    type: "input",
    name: "username",
    label: "Usuário",
    size: "large",
    placeholder: "Entre com o seu e-mail",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: true,
    prefix: <><UserOutlined/></>,
    rules: [{required: true, type: "email", message: "Entre com o seu usuário!"}],
    url: ""
  },
  {
    type: "input",
    name: "reserveEmail",
    label: "E-mail reserva",
    size: "large",
    placeholder: "Entre com o seu e-mail reserva",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: true,
    prefix: <><MailOutlined /></>,
    rules: [{required: true, type: "email", message: "Entre com um e-mail válido!"}],
    url: ""
  },
  {
    type: "password",
    name: "password",
    label: "Senha",
    size: "large",
    placeholder: "Entre com a sua senha",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required: true, message: "Entre com a sua senha!", min: 8}],
    url: ""
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirme sua senha",
    size: "large",
    placeholder: "Digite a sua senha novamente",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: rulesConfirmPassword,
    url: ""
  },
]