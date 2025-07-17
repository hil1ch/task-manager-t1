import { Button, Flex, Select, Form, Input, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useTask } from "../context/task-context";
import type ITask from "../context/task-context";

export function TaskDetails() {
  const [form] = Form.useForm();
  const { id } = useParams<{ id?: string }>();
  const { tasks, updateTask } = useTask();
  const navigate = useNavigate();

  const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>(undefined);

  const handleUpdate = (values: ITask) => {
    if (taskToEdit) {
      updateTask({ ...taskToEdit, ...values })
    }
    navigate('/')
  }

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
      layout="vertical"
      style={{
        maxWidth: "100%",
        width: "800px",
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "10px",
      }}
      // initialValues={taskToEdit}
      onFinish={handleUpdate}
    >
      <Typography.Title level={3} style={{ margin: "0" }}>
        Edit Task
      </Typography.Title>
        <Form.Item
          name="heading"
          label="Title"
          rules={[{ required: true, message: "Please fill the heading!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Category"
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
          style={{ justifyContent: "space-between" }}
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
    </Form>
  );
}
