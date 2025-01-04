export default function ResumeDisplay({ personalData, educationData }) {
  const defaultEducation = [
    {
      startDate: '08/2020',
      endDate: 'Present',
      location: 'Berkeley, CA',
      school: 'UC Berkeley',
      degree: 'Computer Science, B.S.',
    },
  ];

  const displayedEducation = educationData.length > 0 ? educationData : defaultEducation;

  return (
    <div className="resume-display">
      <div className="header">
        <div className="name">
          {personalData.name ? personalData.name : 'Altay Hodo'}
        </div>
        <div className="contact-info">
          <span>
            {personalData.email ? personalData.email : 'altay.hodo@gmail.com'}
          </span>
          <span>
            {personalData.phone ? personalData.phone : '555-555-5555'}
          </span>
          <span>
            {personalData.address ? personalData.address : 'Berkeley, CA'}
          </span>
        </div>
      </div>
      <div className="resume-body">
        <div className="education-section">
          <div className="education-title">Education</div>
          {displayedEducation.map((entry) => (
            <div className="education-entry">
              <div className="left">
                <span className="date">
                  {entry.startDate} - {entry.endDate}
                </span>
                <span className="location">
                  {entry.location}
                </span>
              </div>
              <div className="right">
                <span className="school">
                  {entry.school}
                </span>
                <span className="degree">
                  {entry.degree}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
