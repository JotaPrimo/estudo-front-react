import { useForm, type SubmitHandler } from 'react-hook-form'
import Input from '../../components/form/Input';
import type { UsuarioCreateDTO } from '../../interfaces/usuario/usuarioCreate.dto';
import { usuarioService } from '../../services/usuarioService';
import Select from '../../components/form/Select';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { perfilService } from '../../services/perfilService';
import { useEffect, useState } from 'react';
import type { PerfilResponseDTO } from '../../interfaces/perfil/perfilResponse.dto';
import LoadingData from '../../components/LoadingData';
import { userValidations } from './user.validations';
import { alertService } from '../../services/alertService';


function UsuariosCreate() {
  const navigate = useNavigate()
  const [perfis, setPerfis] = useState<PerfilResponseDTO[] | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm<UsuarioCreateDTO>({mode: "onChange"});  

  useEffect(() => {
    buscarPerfis();
  }, [])

  const onSubmit: SubmitHandler<UsuarioCreateDTO> = async (data) => {
    const usuarioCreate: UsuarioCreateDTO = {
      email: data.email,
      nome: data.nome,
      perfil: { id: String(data.perfil) },
    };
    salvarUsuario(usuarioCreate);
  };

  function salvarUsuario(usuario: UsuarioCreateDTO) {
    usuarioService.criar(usuario)
      .then(() => {
        alertService.success("Usuário cadastrado com sucesso");
        navigate('/usuarios')
      }).catch(() => toast.error('Ocoorreu um erro!'));
  }

  async function buscarPerfis() {
    const allPerfis = await perfilService.listar();
    setPerfis(allPerfis)
  }

  function mapDePerfisParaOptions() {
    if (perfis !== null) {
      return perfis.map(p => ({
        value: p.id.toString(),
        label: p.cargo
      }))
    }
    return [];
  }

  if (perfis == null) {
    return <LoadingData />
  }

  return (
    <form  onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <Input 
          label='Nome' 
          id='nome' 
          error={errors.nome?.message as string}
          placeholder='Informe o nome' 
          {...register('nome', userValidations.nome)} 
        />
        <Input 
          label='Email' 
          id='email' 
          error={errors.email?.message as string}
          placeholder='Informe o email' 
          {...register('email', userValidations.email )} 
        />
        <Select 
          label='Perfil' 
          id='perfil' 
          error={errors.perfil?.message as string} 
          options={mapDePerfisParaOptions()} 
            {...register('perfil', userValidations.perfil)} 
        />
      </div>
      <div className='w-100 d-flex gap-2'>
        <button className='btn btn-secondary'>Voltar</button>
        <button className='btn btn-primary' disabled={!isDirty || !isValid} type='submit'>Salvar</button>
      </div>
    </form>
  )
}

export default UsuariosCreate