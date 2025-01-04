import './styles/App.css';
import { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import EducationForm from './components/EducationForm';
import ResumeDisplay from './components/ResumeDisplay';

function App() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState([]);

  return (
    <div className="body">
      <div className="left-side">
        <PersonalForm onSave={setPersonalData} />
        <EducationForm onSave={setEducationData} />
      </div>
      <div className="right-side">
        <ResumeDisplay personalData={personalData} educationData={educationData} />
      </div>
    </div>
  );
}

export default App;
