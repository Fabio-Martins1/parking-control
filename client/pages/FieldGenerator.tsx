import {Checkbox, Col, DatePicker, Form, Input, Row} from "antd";
import React from "react";
import {IFields} from "./Interfaces";
import Link from "next/link";

interface IFieldGenerator {
  fieldsList: Array<IFields>
}

export const FieldGenerator = ({fieldsList}: IFieldGenerator) => {
  const switchFields = (field: IFields) => {
    switch (field.type) {
      case "input":
        return <>
          <Input
              size={field.size}
              placeholder={field.placeholder}
              prefix={field.prefix}
          />
        </>
      case "password":
        return <>
          <Input.Password
              size={field.size}
              placeholder={field.placeholder}
              prefix={field.prefix}
          />
        </>
      case "date":
        return <>
          <DatePicker
              size={field.size}
              placeholder={field.placeholder}
              format={field.format}/>
        </>
      case "checkbox":
        return <>
          <Checkbox>{field.placeholder}</Checkbox>
        </>
      case "link":
        return <>
          <Link href={field.href as string}>{field.placeholder}</Link>
        </>
    }
  }
  return <>
    <Row gutter={30}>
      {fieldsList.map((field) => {
            return <>
              <Col span={field.colSpan}>
                <Form.Item
                    wrapperCol={{offset: field.wrapperOffset, span: field.wrapperSpan}}
                    label={field.label}
                    name={field.name}
                    valuePropName={field.valuePropName}
                    rules={field.rules}
                    hasFeedback={field.hasFeedback}
                >
                  {switchFields(field)}
                </Form.Item>
              </Col>
            </>
          }
      )}
    </Row>
  </>
}