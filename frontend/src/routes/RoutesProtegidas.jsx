import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const RotasProtegidas = ({ children, tipoPermitido }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/DripStore/Login" replace />;
  }

  // Permitir um único tipo (ex: 1) ou múltiplos (ex: [1, 2])
  const tiposPermitidos = Array.isArray(tipoPermitido)
    ? tipoPermitido
    : [tipoPermitido];

  if (!tiposPermitidos.includes(user.id_roles)) {
    return <Navigate to="/DripStore" replace />;
  }

  return children;
};

export default RotasProtegidas;
