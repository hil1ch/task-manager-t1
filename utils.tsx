import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  EditFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

export function getProgressIcon(value: string) {
  switch (value.toLowerCase()) {
    case "to do":
      return <EditFilled style={{color: 'red'}}/>;

    case "in progress":
      return <ClockCircleFilled style={{ color: "orange" }} />;

    default:
      return <CheckCircleFilled style={{ color: "green" }} />;
  }
}

export function getPriorityColor(value: string) {
  switch(value.toLowerCase()) {
    case 'low':
      return <ExclamationCircleFilled  style={{color: 'green'}}/>

    case 'medium':
      return <ExclamationCircleFilled  style={{color: 'orange'}}/>

    case 'high':
      return <ExclamationCircleFilled  style={{color: 'red'}}/>
  }
}
