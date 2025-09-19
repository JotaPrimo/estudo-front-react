import React, { useEffect, useState } from 'react'
import type { Usuario } from '../../interfaces/usuario/usuario.interface'
import LoadingData from '../../components/LoadingData'
import { useNavigate, useParams } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';
import Input from '../../components/form/Input';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { UsuarioEditDTO } from '../../interfaces/usuario/usuarioEdit.dto';
import { userValidations } from './user.validations';
import type { PerfilResponseDTO } from '../../interfaces/perfil/perfilResponse.dto';
import Select from 'react-select'
import { perfilService } from '../../services/perfilService';


const UsuarioEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<UsuarioEditDTO | null>(null)
  const [perfis, setPerfis] = useState<{ label: string, value: string }[] | null>(null);

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
    carregarPerfis()
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

  async function carregarPerfis() {
    const perfis = await perfilService.listar();
    setPerfis(mapDePerfisParaOptions(perfis))
  }

  function mapDePerfisParaOptions(perfis: PerfilResponseDTO[]) {
    if (perfis !== null) {
      return perfis.map(p => ({
        value: p.id.toString(),
        label: p.cargo
      }))
    }
    return [];
  }

  const onSubmit: SubmitHandler<UsuarioEditDTO> = async (data) => {   
    usuarioService.atualizar({
      id: String(id),
      nome: data.nome,
      email: data.email,
      perfil: { id: data.perfil.id, cargo: data.perfil.cargo },
      postagens: []
    }).then((response) => {
      console.log("response", response);
    }).catch((error) => {
      console.log("errors", error);
    });
  };


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
                <div className='col col-md-4 col-md-6 mt-5'>
                  <div className='d-flex flex-column align-align-items-start'>
                    <label htmlFor="perfil" className=''>perfil</label>
                    <Select
                      options={perfis ?? []}
                      id='perfil'
                      className='w-100'
                      defaultValue={{ label: usuario?.perfil.cargo, value: usuario?.perfil.id }} />
                  </div>
                </div>
              </div>
              <div className='w-100 d-flex gap-2 mt-5'>
                <button className='btn btn-secondary'>Voltar</button>
                <button className='btn btn-primary' disabled={!isValid} type='submit'>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsuarioEdit