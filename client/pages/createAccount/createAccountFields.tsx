import {IFields} from "@/pages/Interfaces";
import {UserOutlined} from "@ant-design/icons";

const rulesConfirmPassword = [
  {
    required: true,
    message: "Entre com uma senha válida",
    min: 8
  },
  ({getFieldValue}: any) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("As duas senhas não coincidem!"));
    }
  })
]

export const createAccountFields: IFields = [
  {
    type: "input",
    name: "email",
    label: "Usuário",
    size: "large",
    placeholder: "Entre com o seu e-mail",
    colSpan: 24,
    wrapperSpan: 50,
    wrapperOffset: 0,
    hasFeedback: true,
    prefix: <><UserOutlined/></>,
    rules: [{required: true, type: "email", message: "Entre com o seu e-mail!"}]
  }, {
    type: "password",
    name: "password",
    label: "Senha",
    size: "large",
    placeholder: "Entre com uma senha",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required: true, message: "Entre com uma senha válida", min: 8}]
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
    rules: rulesConfirmPassword
  }

]