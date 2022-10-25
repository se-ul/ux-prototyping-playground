import {
  Cheolee,
  Hyoni,
  Jeongbini3D,
  Jihye,
  Jinni,
  Kangsr,
  Kohdesign,
} from "projects";
import { Link, useParams } from "react-router-dom";

const people = {
  cheolee: {
    name: "병철",
    component: <Cheolee />,
  },
  sykang: { name: "수영", component: <Kangsr /> },
  koh: { name: "현선", component: <Kohdesign /> },
  jinni: { name: "지윤", component: <Jinni /> },
  li4139: { name: "지혜", component: <Jihye /> },
  hyoni: { name: "정현", component: <Hyoni /> },
  jeongbini: { name: "정빈", component: <Jeongbini3D /> },
};

export const Projects: React.FC = () => {
  const { id } = useParams();

  return id !== undefined ? (
    people[id].component
  ) : (
    <ul className="examples-list">
      {Object.entries(people).map(([id, example]) => (
        <li className="examples-list-item" key={id}>
          <Link to={`/projects/${id}`}>{example.name}</Link>
        </li>
      ))}
    </ul>
  );
};
