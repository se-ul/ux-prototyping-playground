import { Cheolee } from "projects";
import { Link, useParams } from "react-router-dom";

const people = {
  cheolee: {
    name: "병철",
    component: <Cheolee />,
  },
  sykang: { name: "수영", component: <div></div> },
  koh: { name: "현선", component: <div></div> },
  jinni: { name: "지윤", component: <div></div> },
  li4139: { name: "지혜", component: <div></div> },
  hyoni: { name: "정현", component: <div></div> },
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
