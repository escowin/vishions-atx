import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'

function App() {
  const vishions = {
    name: "Vishions ATX",
    address: "3207 Red River Street, Austin TX",
    hours: ["Mon-Sat : 10a-10p", "Sun: 10a-9p"],
    contact: {
      phone: "512-645-0575",
      email: "vishions.atx@gmail.com",
      ig: "vishions-atx",
    },
  };

  return (
    <div className="body">
      <Header vishions={vishions}/>
      <main>
        main
        <Homepage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
