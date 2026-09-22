import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "soo",
    title: "developer",
    mentor: {
      name: "gray",
      title: "developer",
    },
  });

  const onChangeMentor = () => {
    const prom = prompt("what's your mentor's name ?");
    setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name: prom } }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}</p>의 멘토는 {person.mentor.name}({person.mentor.title})
      <button onClick={onChangeMentor}>멘토 바꾸기</button>
    </div>
  );
}
