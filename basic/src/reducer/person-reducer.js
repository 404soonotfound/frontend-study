export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;

      return {
        ...person,
        mentors: person.mentors.map((m, idx) => {
          if (m.name === prev) {
            m.name = current;
          }
          return m;
        }),
      };
    }
    case "added": {
      const { name, title } = action;

      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      const { name } = action;

      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      };
    }

    default: {
      throw Error(`알 수 없는 액션타입입니다. ${action}`);
    }
  }
}
