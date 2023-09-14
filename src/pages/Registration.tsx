import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { checkIfEmpty } from './Validation';

const initState = {
  email: '',
  password: '',
  confirmPassword: ''
};

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initState);

  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (checkIfEmpty(formData.email)) {
      setError((data) => ({
        ...data,
        email: 'You need to enter an email address',
      }));
    }

    if (checkIfEmpty(formData.password)) {
      setError((data) => ({
        ...data,
        password: 'You need to enter a password',
      }));
    }

    if (formData.password !== formData.confirmPassword) {
      setError((data) => ({
        ...data,
        confirmPassword: 'Password does not match',
      }));
      return;
    }

    const res = await axios.post('http://localhost:8080/api/user/register', formData);
    localStorage.setItem('user-token', JSON.stringify(res.data.token));

    console.log(res);
    console.log(res.data.token);

    setFormData(initState);
    if (res) {
      navigate('/login');
    }
  };

  return (
    <div className="create-form">
      <p className="form-text">Please Register Your New Account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group right">
          <label htmlFor="firstName">Email:</label>
          <input type="text" name="email" className="input" id="email" value={formData.email} onChange={handleChangeInput} />
          <p className="error-text">{error.email}</p>
        </div>
        <div className="form-group left">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="input" id="password" value={formData.password} onChange={handleChangeInput} />
          <p className="error-text">{error.password}</p>
        </div>
        <div className="form-group left">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" className="input" id="confirmpassword" value={formData.confirmPassword} onChange={handleChangeInput} />
          <p className="error-text">{error.confirmPassword}</p>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
