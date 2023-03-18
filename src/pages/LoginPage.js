import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/blogs');
    } catch (e) {
      setError(e.message);
    } 
  }
  
  return (
    <>
    <h1>Giriş Yap</h1>
    {error && <p className="error">{error}</p>}
    <input 
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)} />
    <input 
      type="password"
      placeholder="Şifre"
      value={password}
      onChange={e => setPassword(e.target.value)}/>
    <button onClick={logIn}>Giris Yap</button>
    <Link to="/register">Heasbın yok mu? Yeni Hesap Oluştur.</Link>
    </>
  );
}

export default LoginPage;