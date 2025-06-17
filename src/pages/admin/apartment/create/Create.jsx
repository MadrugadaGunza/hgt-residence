import styles from './Create.module.css'
import React from 'react'
import Input from '../../../../components/form/input/Input'
import Button from '../../../../components/form/button/Button'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [image, setImage] = React.useState({});
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [availability, setAvailability] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleImgChange = ({ target }) => {
        if (target.files[0]) {
            setImage({
                raw: target.files[0],
                preview: URL.createObjectURL(target.files[0]),
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação dos campos obrigatórios
        if (!image.raw || !name.trim() || !price.trim() || !description.trim()) {
            setError('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        // Validar se o preço é um número válido
        const priceNumber = parseFloat(price.replace(',', '.'));
        if (isNaN(priceNumber) || priceNumber <= 0) {
            setError('Por favor, insira um preço válido');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('image', image.raw);
            formData.append('name', name.trim());
            formData.append('price', priceNumber.toString());
            formData.append('description', description.trim());
            formData.append('availability', availability.toString());

            // Verificar os dados do FormData
            console.log('Dados sendo enviados:');
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const token = window.localStorage.getItem('token');

            if (!token) {
                throw new Error('Token de autenticação não encontrado');
            }

            const response = await fetch('http://localhost:8000/api/apartment', {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Resposta da API:', data);
            
            // Limpar formulário após sucesso
            setImage({});
            setName('');
            setPrice('');
            setDescription('');
            setAvailability(true);
            
            setError('Apartamento criado com sucesso!');
            navigate('/dashboard/apartments');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            setError(`Erro ao criar apartamento: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={styles.createAPartments}>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="image">Imagem *</label>
                    <input 
                        type="file" 
                        id='image' 
                        name='image' 
                        accept="image/*" 
                        onChange={handleImgChange}
                        required 
                    />
                </div>
                <Input 
                    type='text' 
                    label='Nome *' 
                    id='name' 
                    name='name' 
                    placeholder='Digite o nome do apartamento'
                    value={name} 
                    onChange={({ target }) => setName(target.value)}
                    required
                />
                <Input 
                    type='number' 
                    label='Preço *' 
                    id='price' 
                    name='price' 
                    placeholder='Digite o preço do apartamento'
                    value={price} 
                    onChange={({ target }) => setPrice(target.value)}
                    min="0"
                    step="0.01"
                    required
                />
                <div className='form-group'>
                    <label htmlFor="description">Descrição *</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder='Digite a descrição do apartamento'
                        value={description} 
                        onChange={({ target }) => setDescription(target.value)}
                        required
                    />
                </div>
                <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>
                {error && <p className={error.includes('sucesso') ? styles.success : styles.error}>{error}</p>}
            </form>
            <div>
                {image.preview && (
                    <div className={styles.preview} style={{ backgroundImage: `url('${image.preview}')` }}></div>
                )}
            </div>
        </section>
    )
}

export default Create