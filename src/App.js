import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import OnlineDelivery from './components/OnlineDelivery';
import TopRest from './components/TopRest';
import TopResturant from './components/TopResturant';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <TopRest/>
      <OnlineDelivery/>
      <TopResturant/>
    </div>
  );
}

export default App;
