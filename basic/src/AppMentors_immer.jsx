import { useImmer } from "use-immer";

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
  const [person, updatePerson] = useImmer(initialPerson);

  const onChangeMentor = () => {
    const prev = prompt("current name ?");
    const current = prompt("change name ?");
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const onAddMentor = () => {
    const name = prompt("add name ?");
    const title = prompt("add role ?");

    updatePerson((person) => person.mentors.push({ name, title }));
  };

  const onDeleteMentor = () => {
    const name = prompt("delete name ?");
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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
