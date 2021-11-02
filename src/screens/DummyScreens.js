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
      <h2 className="text-muted primary">Home Component</h2>
      <br />
      <button type="button" className="btn btn-lg btn-primary w-25 mx-0 mb-2">
        Save changes
      </button>
    </div>
  );
};
