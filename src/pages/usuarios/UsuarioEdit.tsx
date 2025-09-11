import React, { useEffect, useState } from 'react'
import type { Usuario } from '../../interfaces/usuario/usuario.interface'
import LoadingData from '../../components/LoadingData'
import { useNavigate, useParams } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';
import Input from '../../components/form/Input';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { UsuarioEditDTO } from '../../interfaces/usuario/usuarioEdit.dto';
import { userValidations } from './user.validations';
import Select from '../../components/form/Select';
import type { PerfilResponseDTO } from '../../interfaces/perfil/perfilResponse.dto';

const UsuarioEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<UsuarioEditDTO | null>(null)
  const [perfis, setPerfis] = useState<PerfilResponseDTO[] | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty }
  } = useForm<UsuarioEditDTO>(
    { mode: "onChange" }
  );

  useEffect(() => {
    carregarUsuario()
  }, [])

  useEffect(() => {
    if (usuario) {
      reset({
        perfil: { id: usuario.perfil.id },
        nome: usuario.nome,
        email: usuario.email,
      });
    }
  }, [usuario]);


  async function carregarUsuario() {
    if (id) {
      const usuario = await usuarioService.buscarPorId(id);
      setUsuario(usuario)
    }
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

  const onSubmit: SubmitHandler<UsuarioEditDTO> = async (data) => {
    const usuarioEditDTO: UsuarioEditDTO = {
      id: usuario?.id ?? 0,
      email: data.email,
      nome: data.nome,
      perfil: { id: String(data.perfil) },
    };
    salvarUsuario(usuarioEditDTO);
  };

  async function salvarUsuario(usuarioEdit: UsuarioEditDTO) {
    console.log("salvar usuario");

  }

  if (usuario == null) <LoadingData />

  return (
    <div>
      {usuario && (
        <div className='card'>
          <div className="card-header">Dados do usuario</div>
          <div className="card-body">
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
                  {...register('email', userValidations.email)}
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
          </div>
        </div>
      )}
    </div>
  )
}

export default UsuarioEdit