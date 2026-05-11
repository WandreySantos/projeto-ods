import { useState } from "react";
import { createDenuncia, Denuncia } from "../services/api";

interface DenunciaFormProps {
  onDenunciaCreated: () => void;
}

const DenunciaForm: React.FC<DenunciaFormProps> = ({ onDenunciaCreated }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("Pendente");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createDenuncia({ titulo, descricao, status });
      setTitulo("");
      setDescricao("");
      setStatus("Pendente");
      onDenunciaCreated();
    } catch (error) {
      console.error("Erro ao criar denúncia:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pendente">Pendente</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Resolvido">Resolvido</option>
        </select>
      </div>
      <button type="submit">Enviar Denúncia</button>
    </form>
  );
};

export default DenunciaForm;
