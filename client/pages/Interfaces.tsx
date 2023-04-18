import {Rule} from "antd/es/form"
import {SizeType} from "antd/es/config-provider/SizeContext";
import {ReactNode} from "react";
export interface IFields {
  type: string,
  name: string,
  label: string,
  size?: SizeType,
  placeholder: string,
  colSpan: number,
  wrapperOffset: number,
  wrapperSpan: number,
  hasFeedback?: boolean,
  format?: string,
  valuePropName?: string,
  prefix?: ReactNode,
  rules?: Array<Rule>,
  href?: string
}
