import { useForm, type SubmitHandler } from 'react-hook-form'
import Input from '../../components/form/Input';
import type { UsuarioCreateDTO } from '../../interfaces/usuario/usuarioCreate.dto';
import { usuarioService } from '../../services/usuarioService';
import Select from '../../components/form/Select';
import toast from 'react-hot-toast';


function UsuariosCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UsuarioCreateDTO>();

  const options = [
    { value: "1", label: "Administrador" },
    { value: "2", label: "Usuário" },
    { value: "3", label: "Convidado" },
  ]

  const onSubmit: SubmitHandler<UsuarioCreateDTO> = async (data) => {
    console.log("onSubmit", data.perfil);
    
    const usuarioCreate: UsuarioCreateDTO = {
      email: data.email,
      nome: data.nome,
      perfil: { id: String(data.perfil) },
    };

    console.log("usuarioCreate", usuarioCreate);
    usuarioService.criar(usuarioCreate)
      .then(() => toast.success('Usuário criado com sucesso'))
      .catch((erro) => console.log(erro));
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <Input label='Nome' id='nome' placeholder='Informe o nome' {...register('nome')} />
        <Input label='Email' id='email' placeholder='Informe o email' {...register('email')} />
        <Select label='Perfil' id='perfil' error={errors.perfil?.message as string} options={options} {...register('perfil')} />
      </div>
      <div className='w-100 d-flex gap-2'>
        <button className='btn btn-secondary'>Voltar</button>
        <button className='btn btn-primary' type='submit'>Salvar</button>
      </div>
    </form>
  )
}

export default UsuariosCreate