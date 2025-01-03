export default function ResumeDisplay({personalData}) {

  return (
    <div className="ResumeDisplay">
      {personalData ?  personalData.name : "no data"}
      resume display
    </div>
  )
}