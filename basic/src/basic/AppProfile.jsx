import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  return (
    <>
      <Profile
        imageSrc="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="John Doe"
        title="Software Engineer"
        isNew={true}
      />
      <Profile name="John Doe" title="Software Engineer" />
    </>
  );
}

export default AppProfile;
