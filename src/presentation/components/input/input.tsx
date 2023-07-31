import './input.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className="inputWrapper">
      <label htmlFor={props.name}>{props.name}</label>
      <input {...props} />
      <span className='inputStatus'>✅</span>
    </div>
  )
}
export default Input
