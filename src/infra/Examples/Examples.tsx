import {
  ARExample,
  DeviceOrientationExample,
  ScrollExample,
  ZoomableTableExample,
} from "examples";
import { Link, useParams } from "react-router-dom";
import "./Examples.css";

const examples = {
  "device-orientation": {
    name: "자이로스코프 인터랙션",
    component: <DeviceOrientationExample />,
  },
  scroll: { name: "스크롤 인터랙션", component: <ScrollExample /> },
  "zommable-table": {
    name: "줌 가능 테이블",
    component: <ZoomableTableExample />,
  },
  ar: {
    name: "AR",
    component: <ARExample />,
  },
};

export const Examples: React.FC = () => {
  const { id } = useParams();

  return id !== undefined ? (
    examples[id].component
  ) : (
    <ul className="examples-list">
      {Object.entries(examples).map(([id, example]) => (
        <li className="examples-list-item" key={id}>
          <Link to={`/examples/${id}`}>{example.name}</Link>
        </li>
      ))}
    </ul>
  );
};
