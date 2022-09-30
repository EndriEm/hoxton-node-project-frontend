import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

type Faculty = {
  id: number;
  name: string;
  teachers: Teacher[];
};

type Teacher = {
  id: number;
  name: string;
  email: string;
  image: string;
  subject: string;
  facultyId: number;
};

export function Fakulteti() {
  const [faculty, setFaculty] = useState<Faculty | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:2222/faculties/${params.id}`)
      .then((resp) => resp.json())
      .then((faculty) => setFaculty(faculty));
  }, []);

  if (faculty === null) return <p> Loading... </p>;

  return (
    <div>
      <Header />
      <ul>
        <li>
          <h1>{faculty.name}</h1>
          {faculty.teachers.map((teacher) => (
            <>
              <div className="teacher">
                <img src={teacher.image}></img>
                <h2>{teacher.name}</h2>
                <h3>{teacher.subject}</h3>
                <h3>{teacher.email}</h3>
              </div>
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}
