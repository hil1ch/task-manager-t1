import { Button, Flex, Select, Form, Input, Typography, Space } from "antd";

export function TaskDetails() {
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 140 }}
        layout="horizontal"
        style={{
          maxWidth: "100%",
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
            label="Title"
            layout="vertical"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" layout="vertical" style={{ marginBottom: "45px" }}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Category"
            layout="vertical"
            
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
          <Form.Item label="Status" layout="vertical">
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
          <Form.Item label="Priority" layout="vertical">
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
          <Flex wrap gap="large" style={{ marginTop: "20px" }}>
            <Form.Item>
              <Button>Cancel</Button>
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
