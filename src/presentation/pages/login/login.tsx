import React from 'react'
import './login-styles.scss'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <div className='login'>
      <LoginHeader />
      <div className='contentWrap'>
        <div className='card'>
          <h2>Login</h2>
          <form className='form'>
            <Input type='email' placeholder='Digite seu email' />
            <Input type='password' placeholder='Digite sua senha' />
            <button type='submit' className='submit'>Entrar</button>
            <FormStatus />
            <span className='message'>Ainda não possui uma conta?</span>
            <a href='#'>Criar conta</a>
          </form>
        </div>
      </div>
      <footer className='footer'></footer>
    </div>
  )
}

export default Login
