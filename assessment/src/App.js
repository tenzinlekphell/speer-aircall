import './App.css';
import Header from './components/Header';
import ActivityFeed from './components/ActivityFeed';

function App() {
  return (
    <div className="container" id="app">
      <div className="container-view">
        <Header />
        <ActivityFeed />
      </div>
    </div>
  );
}

export default App;
