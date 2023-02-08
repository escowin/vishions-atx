import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="body">
      <Header/>
      <main>
        main
        <Homepage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
