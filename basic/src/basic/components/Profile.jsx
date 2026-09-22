import Avartar from "./Avartar";
export default function Profile({ imageSrc, name, title, isNew }) {
  return (
    <div className="profile">
      {imageSrc && <Avartar imageSrc={imageSrc} isNew={isNew} />}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
