import { UserClass } from "./UserClass.jsx";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-screen-md w-full bg-white shadow-lg rounded-lg p-6">
        <UserClass />
      </div>
    </div>
  );
};

export default About;
