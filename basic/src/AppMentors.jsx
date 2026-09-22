import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

const initialPerson = {
  name: "soo",
  title: "developer",
  mentors: [
    {
      name: "gray",
      title: "developer",
    },
    {
      name: "tom",
      title: "developer",
    },
  ],
};

export default function AppMentor() {
  // const [현재상태, 변경요청함수] = useReducer(변경담당함수, 초기값);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const onChangeMentor = () => {
    const prev = prompt("current name ?");
    const current = prompt("change name ?");
    dispatch({ type: "updated", prev, current });
  };

  const onAddMentor = () => {
    const name = prompt("add name ?");
    const title = prompt("add role ?");

    dispatch({ type: "added", name, title });
  };

  const onDeleteMentor = () => {
    const name = prompt("delete name ?");
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, idx) => (
          <li key={idx}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={onChangeMentor}>멘토 바꾸기</button>
      <button onClick={onAddMentor}>멘토 추가하기</button>
      <button onClick={onDeleteMentor}>멘토 삭제</button>
    </div>
  );
}
