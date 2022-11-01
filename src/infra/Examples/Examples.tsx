import {
  DeviceOrientationExample,
  ScrollExample,
  ThreeDBasicExample,
  ThreeDExample,
  ThreeDPhysicsExample,
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
  threedSwitch: {
    name: "3D 스위치",
    component: <ThreeDExample />,
  },
  threedBasic: {
    name: "3D 기본",
    component: <ThreeDBasicExample />,
  },
  threedPhysics: {
    name: "3D 물리",
    component: <ThreeDPhysicsExample />,
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
