import React from 'react'
import { Modal, Form, Input, Select, Checkbox, Slider, Switch, Radio, Rate, DatePicker, TimePicker } from 'antd'



const { Password, Search } = Input
const { Option } = Select

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const AiModalForm = (props) => {
  let { visible, title, options } = props
  let [form] = Form.useForm()
  let formComponents = [
    {
      name: 'input',
      component: Input
    },
    {
      name: 'search',
      component: Search
    }, ,
    {
      name: 'password',
      component: Password
    },
    {
      name: 'select',
      component: Select
    },
    {
      name: 'option',
      component: Option
    },
    {
      name: 'checkbox',
      component: Checkbox
    },
    {
      name: 'switch',
      component: Switch
    },
    {
      name: 'slider',
      component: Slider
    },
    {
      name: 'rate',
      component: Rate
    },
    {
      name: 'datepicker',
      component: DatePicker
    },
    {
      name: 'timepicker',
      component: TimePicker
    },
    {
      name: 'Radio',
      component: Radio
    }
  ]
  // 表单初始值
  let initialValues = {}
  options.map(item => {
    initialValues[item.name] = item.value
  })

  // 模拟动态组件
  let renderComponent = (name) => {
    let com = null
    formComponents.map(item => {
      if (item.name === name) {
        com = item.component
      }
    })
    return com
  }
  let ok = () => {
    // 给父组件分发事件
    props.ok(form)
  }
  let cancel = () => {
    props.cancel(form)
  }
  return (
    <Modal
      visible={visible}
      title={title}
      onOk={ok}
      onCancel={cancel}
    >
      <Form
        form={form}
        initialValues={initialValues}
        validateTrigger='onBlur'
        {...layout}
      >
        {
          options.map((item, index) => {
            item.com = renderComponent(item.type)
            if (item.children && item.children.length) {
              item.children.map((child) => {
                child.com = renderComponent(child.type)
              })
            }
            return (
              <Form.Item
                key={index}
                name={item.name}
                rules={item.rules}
                label={item.label}
              >
                {
                  item.children && item.children.length ?
                    <item.com>
                      {
                        item.children.map((child, index) => {
                          return (
                            <child.com key={index} value={child.value}>
                              {child.label}
                            </child.com>
                          )
                        })
                      }
                    </item.com>
                    : <item.com />
                }
              </Form.Item>
            )
          })
        }
      </Form>
    </Modal>
  )
}

export default AiModalForm
