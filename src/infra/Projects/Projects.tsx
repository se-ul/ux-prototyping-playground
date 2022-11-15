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
import { NewCheolee } from "projects/cheolee/NewCheolee";
import { NewJihye } from "projects/jihye/NewJihye";
import { Kangsr } from "projects/kangsr/Kangsr";
<<<<<<< HEAD
import { NewKangsr } from "projects/kangsr/NewKangsr";
=======
import { KohNew } from "projects/kohdesign/KohNew";
>>>>>>> cda7c380d08e9f88e5135e78f1cbd5fac63fbebf
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
  newCheolee: { name: "병철 새 거", component: <NewCheolee /> },
<<<<<<< Updated upstream
  KohNew: { name: "현선 새거", component: <KohNew /> },
=======
  newJihye: { name: "지혜 화이팅", component: <NewJihye /> },
>>>>>>> Stashed changes
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
