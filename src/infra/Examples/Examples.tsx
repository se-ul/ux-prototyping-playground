import { DeviceOrientationExample, ScrollExample } from "examples";
import { Link, useParams } from "react-router-dom";

const examples = {
  "device-orientation": {
    name: "자이로스코프 인터랙션",
    component: <DeviceOrientationExample />,
  },
  scroll: { name: "스크롤 인터랙션", component: <ScrollExample /> },
};

export const Examples: React.FC = () => {
  const { id } = useParams();

  return id !== undefined ? (
    examples[id].component
  ) : (
    <ul>
      {Object.entries(examples).map(([id, example]) => (
        <li key={id}>
          <Link to={`/examples/${id}`}>{example.name}</Link>
        </li>
      ))}
    </ul>
  );
};
