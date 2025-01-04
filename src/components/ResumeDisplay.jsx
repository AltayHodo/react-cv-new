export default function ResumeDisplay({ personalData }) {

  return (
    <div className="resume-display">
      <div className="header">
        <div className="name">{personalData.name ?  personalData.name : "Altay Hodo"}</div>
        <div className="contact-info">
          <span>{personalData.email ?  personalData.email : "altay.hodo@gmail.com"}</span>
          <span>{personalData.phone ?  personalData.phone : "555-555-5555"}</span>
          <span>{personalData.address ?  personalData.address : "Berkeley, CA"}</span>
        </div>
      </div>
    </div>
  )
}