import './App.css';
import pic from './assets/pic.jpeg';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2> Welcome to the Joel Hilton Site!</h2>
        <p>
          This is a site with a pic, a podcast, and a collection of Joel's
          favorite movies!
        </p>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={pic} />
      </div>
    </div>
  );
};

export default App;
