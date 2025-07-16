import { Button, Flex, Select, Form, Input, Typography, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useTask } from "../context/task-context";
import type ITask from "../context/task-context";

export function TaskDetails() {
  const [form] = Form.useForm();
  const { id } = useParams<{ id?: string }>();
  const { tasks } = useTask();
  const navigate = useNavigate();

  const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>(undefined);

  const categoryOptions = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(tasks.map((task) => task.category))
    );
    return uniqueCategories.map((category) => ({
      value: category,
      label: category,
    }));
  }, [tasks]);

  const statusOptions = useMemo(() => {
    const uniqueStatuses = Array.from(
      new Set(tasks.map((task) => task.status))
    );
    return uniqueStatuses.map((status) => ({ value: status, label: status }));
  }, [tasks]);

  const priorityOptions = useMemo(() => {
    const uniquePriorities = Array.from(
      new Set(tasks.map((task) => task.priority))
    );
    return uniquePriorities.map((priority) => ({
      value: priority,
      label: priority,
    }));
  }, [tasks]);

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
    return (
      <Typography.Title level={4}>
        Task not found or loading...
      </Typography.Title>
    );
  }

  return (
    <Form
      form={form}
      layout="horizontal"
      style={{
        maxWidth: "100%",
        width: "800px",
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "10px",
      }}
      // initialValues={taskToEdit}
      // onFinish={() => handleSubmit()}
    >
      <Typography.Title level={3} style={{ margin: "0" }}>
        Edit Task
      </Typography.Title>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Form.Item
          name="heading"
          label="Title"
          layout="vertical"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          layout="vertical"
          name="description"
          style={{ marginBottom: "45px" }}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Category"
          layout="vertical"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select
            style={{ width: "100%" }}
            options={categoryOptions}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          layout="vertical"
          name="status"
          rules={[{ required: true, message: "Please select a status!" }]}
        >
          <Select
            style={{ width: "100%" }}
            options={statusOptions}
          />
        </Form.Item>
        <Form.Item
          label="Priority"
          layout="vertical"
          name="priority"
          rules={[{ required: true, message: "Please select a priority!" }]}
        >
          <Select
            style={{ width: "100%" }}
            options={priorityOptions}
          />
        </Form.Item>
        <Flex
          wrap
          gap="large"
          style={{ marginTop: "20px", justifyContent: "space-between" }}
        >
          <Form.Item>
            <Button onClick={() => navigate("/")}>Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Space>
    </Form>
  );
}
