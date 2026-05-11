import { Denuncia } from "../services/api";

interface DenunciaListProps {
  denuncias: Denuncia[];
}

const DenunciaList: React.FC<DenunciaListProps> = ({ denuncias }) => {
  return (
    <div>
      <h2>Lista de Denúncias</h2>
      {denuncias.length === 0 ? (
        <p>Nenhuma denúncia encontrada.</p>
      ) : (
        <ul>
          {denuncias.map((denuncia) => (
            <li key={denuncia.id}>
              <h3>{denuncia.titulo}</h3>
              <p>{denuncia.descricao}</p>
              <p>Status: {denuncia.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DenunciaList;
