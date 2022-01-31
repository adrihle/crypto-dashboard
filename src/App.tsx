import './App.scss';
import { Navbar, Footer } from '@containers';
import { Provider } from '@context';
import { Dashboard } from '@pages';


function App() {

  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
