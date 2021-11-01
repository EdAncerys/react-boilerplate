import { Link } from 'react-router-dom';

export const ComponentOne = () => {
  return (
    <div>
      <h2>Page One Component (About)</h2>
      <Link to="/users">Users</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export const ComponentTwo = () => {
  return (
    <div>
      <h2>Page Two Component (Users)</h2>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>
    </div>
  );
};
