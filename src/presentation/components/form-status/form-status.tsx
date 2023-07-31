import Spinner from '../spinner/spinner'
import './form-status.scss'
const FormStatus: React.FC = () => {
  return (
    <div className='formStatus'>
      <Spinner />
      <span className='errorMessage'>Error message</span>
    </div>
  )
}
export default FormStatus
