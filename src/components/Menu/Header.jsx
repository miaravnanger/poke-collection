import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
    const handleHomeClick = () => navigate("/");
  return (
    <header onClick={handleHomeClick} style={{ cursor: "pointer" }}>
      <h1 className="text-center text-3xl md:text-5xl mb-6 mt-5">
        Pokémon Card Collection
      </h1>
    </header>
  );
}