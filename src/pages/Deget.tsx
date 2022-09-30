import { useEffect, useState } from "react";
import { Header } from "../components/Header";

type Faculty = {
  id: number;
  name: string;
  teachers: Teacher[];
  deget: Dega[];
};

type Teacher = {
  id: number;
  name: string;
  email: string;
  image: string;
  subject: string;
  facultyId: number;
};

type Dega = {
  id: number;
  name: string;
  facultyId: number;
};

export function Deget() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    fetch("http://localhost:2222/faculties")
      .then((resp) => resp.json())
      .then((faculties) => setFaculties(faculties));
  }, []);

  return (
    <div>
      <Header />
      <ul className="deget">
        {faculties.map((faculty) => (
          <>
            <li key={faculty.id}>
              <h1>{faculty.name}</h1>
            </li>
            {faculty.deget.map((dega) => (
              <>
                <h3>{dega.name}</h3>
              </>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
}
