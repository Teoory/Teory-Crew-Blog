import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if(password !== confirmPassword){
                setError('Şifreler uyuşmuyor!')
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/blogs');
        } catch (e) {
            setError(e.message);
        }
    }
  
    return (
      <>
      <h1>Kayıt Ol</h1>
      {error && <p className="error">{error}</p>}
      <input 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <input 
        type="password"
        value={password}
        placeholder="Şifre"
        onChange={e => setPassword(e.target.value)}/>
        <input 
          type="password"
          value={confirmPassword}
          placeholder="Şifrenizi doğrulayın"
          onChange={e => setConfirmPassword(e.target.value)}/>
      <button onClick={createAccount}>Hesap oluştur</button>
      <Link to="/login">Hesabın Var mı? Giriş Yap.</Link>
      </>
    );
}

export default CreateAccountPage;