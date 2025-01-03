import './styles/App.css';
import { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import ResumeDisplay from './components/ResumeDisplay';

function App() {
  const [personalData, setPersonalData] = useState({});
  return (
    <>
      <h1>Hello</h1>
      <PersonalForm onSave={setPersonalData} />
      <ResumeDisplay personalData={personalData}/>
    </>
  );
}

export default App;
