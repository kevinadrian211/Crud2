import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export const FilmEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  const filmData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name="title"
          initialValue={filmData?.title}
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
          initialValue={filmData?.director}
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
          initialValue={filmData?.synopsis}
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
          initialValue={filmData?.duration}
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
    </Edit>
  );
};