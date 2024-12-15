import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { InputField } from './components/InputField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email || !formData.password) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await axios.post('api_login.php', {
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data.success) {
        setSuccess('Login realizado com sucesso!');
        // Salvar dados do usuário no localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setTimeout(() => {
          // Redirecionar para o link do jogo ao invés do dashboard
          window.location.href = 'https://edu-hms.itch.io/plataforma-2d-test?secret=8n4QII4xaseXAx3BVVJUQqYlq7g';
        }, 2000);
      } else {
        setError(response.data.message || 'Erro ao realizar login');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao conectar com o servidor');
      console.error('Erro:', err);
    }
  };

  return (
    <AuthLayout title="Entre na sua conta">
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

        <button
          type="submit"
          className="w-full py-3 px-4 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Entrar
        </button>

        <p className="text-center text-sm text-gray-400">
          Não tem uma conta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-yellow-500 hover:text-yellow-400 font-medium"
          >
            Registre-se
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}