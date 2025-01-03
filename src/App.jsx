import './styles/App.css';
import { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import ResumeDisplay from './components/ResumeDisplay';

function App() {
  const [personalData, setPersonalData] = useState({});
  return (
    <div className="body">
      <div className="left-side">
        <PersonalForm onSave={setPersonalData} />
      </div>
      <div className="right-side">
        <ResumeDisplay personalData={personalData} />
      </div>
    </div>
  );
}

export default App;
