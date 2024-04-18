// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetail, starredBtn} = props

  const {appointmentDate, appointmentTitle, appointmentId} = appointmentDetail
  const starLogo = appointmentDetail.isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const isStarredBtn = () => {
    starredBtn(appointmentId)
  }
  return (
    <li>
      <div className="title-card">
        <p>{appointmentTitle}</p>
        <img
          src={starLogo}
          alt="star"
          className="star-logo"
          onClick={isStarredBtn}
        />
      </div>
      <p className="date">{appointmentDate}</p>
    </li>
  )
}

export default AppointmentItem
