import { Routes, Route } from 'react-router-dom';

import { WrapperRoutes } from 'shared/components/templates/WrapperRoutes/WrapperRoutes';

import { Reports } from '../../modules/reports/pages/Reports';
import { Schedule } from 'modules/schedule/pages/Schedule';
import { Login } from 'modules/sessions/pages/Login/Login';
import { Welcome } from 'modules/welcome/pages/Welcome/Welcome';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <WrapperRoutes hasHeader={false}>
              <Welcome />
            </WrapperRoutes>
          }
        />

        <Route
          path="login"
          element={
            <WrapperRoutes
              title="Desafio 1 - Login"
              message="Alguns usuários não estão conseguindo acessar nossa plataforma! Esta sempre retornando o erro 'Não foi possível autenticar, por favor tente novamente mais tarde'. Pode verificar o que pode estar acontecendo?
              \n
              \n Aqui tem alguns exemplos que não estão conseguindo acessar:
              \n Login: manzoG
              \n Senha: manzoG12345

              \n
              \nE este usuário está conseguindo logar normalmente:
              \n Login: max
              \n Senha: 123456

              "
            >
              <Login />
            </WrapperRoutes>
          }
        />

        <Route
          path="schedules"
          element={
            <WrapperRoutes
              title="Desafio 2 - Agenda"
              message='Não está sendo possível filtrar as agendas.

            Estou tentando filtrar por nome "Festinha Dev Yazo" para aparecer somente essa agenda, mas não funciona.'
            >
              <Schedule />
            </WrapperRoutes>
          }
        />

        <Route
          path="reports"
          element={
            <WrapperRoutes
              title="Desafio 3 - Relatórios"
              message="Neste desafio você deverá retirar os relatórios pedidos abaixo, para isso você pode consultar o arquivo 'dicasParaDesafio3.MD' que está na pasta raiz do projeto.'"
            >
              <Reports />
            </WrapperRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
