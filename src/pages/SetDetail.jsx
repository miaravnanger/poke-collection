import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import CardGrid from "../components/CardGrid";
import { useOwnedCards } from "../hooks/useOwnedCards";
import { useSetDetail } from "../hooks/useSetDetail";
import { useSetInfo } from "../hooks/useSetInfo";

export default function SetDetail() {
  const { setId } = useParams();
  const { cards, isLoading, page, setPage, totalPages } = useSetDetail(setId);
  const setInfo = useSetInfo(setId);
  const [ownedCards, setOwnedCards] = useOwnedCards();

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={setInfo.images?.logo} alt={setInfo.name} className="w-48 sm:w-auto" />
      </div>
      <CardGrid
        cards={cards}
        isLoading={isLoading}
        ownedCards={ownedCards}
        setOwnedCards={setOwnedCards}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setPage(newPage);
          setTimeout(
            () => window.scrollTo({ top: 0, behavior: "instant" }),
            50,
          );
        }}
      />
    </>
  );
}
 