import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import OnlineDelivery from './components/OnlineDelivery';
import TopRest from './components/TopRest';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <TopRest/>
      <OnlineDelivery/>
    </div>
  );
}

export default App;
