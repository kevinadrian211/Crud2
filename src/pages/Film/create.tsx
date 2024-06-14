import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const FilmCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter the title of the film",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Director"}
          name="director"
          rules={[
            {
              required: true,
              message: "Please enter the director of the film",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Synopsis"}
          name="synopsis"
          rules={[
            {
              required: true,
              message: "Please enter the synopsis of the film",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label={"Duration (minutes)"}
          name="duration"
          rules={[
            {
              required: true,
              message: "Please enter the duration of the film",
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>
      </Form>
    </Create>
  );
};
