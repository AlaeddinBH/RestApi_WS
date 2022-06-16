
import './App.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App

