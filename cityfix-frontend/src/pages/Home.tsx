import { useEffect, useState } from "react";
import DenunciaForm from "../components/DenunciaForm";
import DenunciaList from "../components/DenunciaList";
import { getDenuncias, Denuncia } from "../services/api";

const Home: React.FC = () => {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDenuncias = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDenuncias();
      setDenuncias(data);
    } catch (err) {
      console.error("Erro ao buscar denúncias:", err);
      setError("Não foi possível carregar as denúncias. Verifique se o backend está rodando.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDenuncias();
  }, []);

  return (
    <div>
      <h1>CityFix - Denúncias Urbanas</h1>
      <DenunciaForm onDenunciaCreated={fetchDenuncias} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Carregando denúncias...</p>
      ) : (
        <DenunciaList denuncias={denuncias} />
      )}
    </div>
  );
};

export default Home;
