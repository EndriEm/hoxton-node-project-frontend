import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

export function Fakultetet() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    fetch("http://localhost:2222/faculties")
      .then((resp) => resp.json())
      .then((faculties) => setFaculties(faculties));
  }, []);

  return (
    <div>
      <Header />
      <ul className="cards">
        {faculties.map((faculty) => (
          <>
            <li key={faculty.id} className="card">
              <Link to={`/fakulteti/${faculty.id}`} key={faculty.id} className="card-text">
                {faculty.name}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
