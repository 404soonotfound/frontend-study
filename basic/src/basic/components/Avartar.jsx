export default function Avartar({ imageSrc, isNew }) {
  return (
    <div className="avartar">
      <img className="profile-image" src={imageSrc} alt="Profile" />
      {isNew && <span className="new-badge">New</span>}
    </div>
  );
}
