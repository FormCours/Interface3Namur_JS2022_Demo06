import './App.css';
import Header from './containers/header/header';
import Counter from './containers/counter/counter';

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Counter />
      </main>
    </>
  );
}

export default App;
