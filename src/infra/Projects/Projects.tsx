import {
  Cheolee,
  Cheolee3D,
  Hyoni,
  Jeongbini3D,
  Jihye,
  Jihye3D,
  Jinni,
  Kangsr3D,
  Kohdesign,
  Kohdesign3D,
} from "projects";
import { Kangsr } from "projects/kangsr/Kangsr";
import { Link, useParams } from "react-router-dom";

const people = {
  cheolee: {
    name: "병철",
    component: <Cheolee />,
  },
  cheolee3d: {
    name: "병철3D",
    component: <Cheolee3D />,
  },
  sykang: { name: "수영", component: <Kangsr /> },
  sykang3d: { name: "수영3D", component: <Kangsr3D /> },
  koh: { name: "현선", component: <Kohdesign /> },
  koh3d: { name: "현선3D", component: <Kohdesign3D /> },
  jinni: { name: "지윤", component: <Jinni /> },
  li4139: { name: "지혜", component: <Jihye /> },
  li41393d: { name: "지혜3D", component: <Jihye3D /> },
  hyoni: { name: "정현", component: <Hyoni /> },
  jeongbini: { name: "정빈3D", component: <Jeongbini3D /> },
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
