import { useState } from 'react';

export default function EducationForm({ onSave }) {
  // const [school, setSchool] = useState('');
  // const [degree, setDegree] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [location, setLocation] = useState('');

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const handleUpdate = (field, value) => {
    setEducation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  function saveInfo(e) {
    e.preventDefault();

    onSave((prevEducationList) => [...prevEducationList, education]);

    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  }

  return (
    <div className="education-form">
      <form action="" onSubmit={saveInfo}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="Enter School / University"
          value={education.school}
          onChange={(e) => handleUpdate('school', e.target.value)}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field of Study"
          value={education.degree}
          onChange={(e) => handleUpdate('degree', e.target.value)}
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          placeholder="Enter Start Date"
          value={education.startDate}
          onChange={(e) => handleUpdate('startDate', e.target.value)}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          id="end-date"
          name="end-date"
          placeholder="Enter End Date"
          value={education.endDate}
          onChange={(e) => handleUpdate('endDate', e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter Location"
          value={education.location}
          onChange={(e) => handleUpdate('location', e.target.value)}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
