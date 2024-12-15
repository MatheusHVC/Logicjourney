import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { InputField } from './components/InputField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Verificação de campos vazios
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    // Validação das senhas
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('api_registro.php', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data.success) {
        setSuccess('Cadastro realizado com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(response.data.message || 'Erro ao realizar cadastro');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao conectar com o servidor');
      console.error('Erro:', err);
    }
  };

  return (
    <AuthLayout title="Crie sua conta">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {success}
          </div>
        )}

        <InputField
          label="Nome"
          type="text"
          name="name"
          placeholder="Seu nome"
          icon={<User className="text-gray-400" size={20} />}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="seu@email.com"
          icon={<Mail className="text-gray-400" size={20} />}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Senha"
          type="password"
          name="password"
          placeholder="••••••••"
          icon={<Lock className="text-gray-400" size={20} />}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <InputField
          label="Confirmar Senha"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          icon={<Lock className="text-gray-400" size={20} />}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Criar conta
        </button>

        <p className="text-center text-sm text-gray-400">
          Já tem uma conta?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-yellow-500 hover:text-yellow-400 font-medium"
          >
            Faça login
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}