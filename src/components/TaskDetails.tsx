import { Button, Flex, Select, Form, Input, Typography, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTask } from "../context/task-context";
import type ITask from "../context/task-context";

export function TaskDetails() {
  const {id} = useParams<{id? : string}>();
  const {tasks} = useTask();
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundTask = tasks.find((task) => task.id === id);
      setTaskToEdit(foundTask);

      if (foundTask) {
        form.setFieldsValue({
          heading: foundTask.heading,
          description: foundTask.description,
          category: foundTask.category,
          status: foundTask.status,
          priority: foundTask.priority,
        });
      } else {
        form.resetFields();
      }
    }
  }, [id, tasks, form]);

  if (!taskToEdit) {
    return <Typography.Title level={4}>Task not found or loading...</Typography.Title>;
  }

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 140 }}
        layout="horizontal"
        style={{
          maxWidth: "100%",
          width: '800px',
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <Typography.Title level={3} style={{ margin: "0" }}>
          Edit Task
        </Typography.Title>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Form.Item
            name='heading'
            label="Title"
            layout="vertical"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" layout="vertical" name='description' style={{ marginBottom: "45px" }}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Category"
            layout="vertical"
            name='category'
          >
            <Select
              defaultValue="lucy"
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Status" layout="vertical" name='status'>
            <Select
              defaultValue="lucy"
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Priority" layout="vertical" name='priority'>
            <Select
              defaultValue="lucy"
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Form.Item>
          <Flex wrap gap="large" style={{ marginTop: "20px", justifyContent: 'space-between' }}>
            <Form.Item>
              <Button onClick={() => navigate('/')}>Cancel</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Save Changes</Button>
            </Form.Item>
          </Flex>
        </Space>
      </Form>
    </div>
  );
}
