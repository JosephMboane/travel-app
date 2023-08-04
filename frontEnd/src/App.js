import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">


      <div className='container'>
        <div className='row'>
          <h3 className='text-center mt-5'>
            Encontre a melhor Cidade
          </h3>

          <SearchBar />


        </div>

      </div>
    </div>
  );
}

export default App;
