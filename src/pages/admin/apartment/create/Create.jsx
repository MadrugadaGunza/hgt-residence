import styles from './Create.module.css'
import React from 'react'
import Input from '../../../../components/form/input/Input'
import Button from '../../../../components/form/button/Button'

const Create = () => {
    const [img, setImg] = React.useState({});

    const handleImgChange = ({ target }) => {
        setImg({
            raw: target.files[0],
            preview: URL.createObjectURL(target.files[0]),
        })
    }

    return (
        <section className={styles.createAPartments}>
            <form action="">
                <div className='form-group'>
                    <label htmlFor="image">Imagem</label>
                    <input type="file" id='image' name='image' onChange={handleImgChange} />
                </div>
                <Input type='text' label='Nome' id='name' name='name' placeholder='Digite o nome do apartamento' />
                <Input type='text' label='Preço' id='price' name='price' placeholder='Digite o preço do apartamento' />
                <div className='form-group'>
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="description" placeholder='Digite o descrição do apartamentoa'></textarea>
                </div>
                <Button>Enviar</Button>
            </form>
            <div>
                {/* <h1>Cadastrar novo apartamento</h1>
                <p>Preencha todos os campos para cadastrar apartamento corretamente</p> */}

                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    >
                    </div>
                )
                }
            </div>
        </section>
    )
}

export default Create
