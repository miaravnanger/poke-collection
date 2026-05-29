export default function Pagination({page, totalPages, onPageChange}) {
  return (
    <div className="flex justify-center mr-5 md:mr-20 mb-10 gap-10">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        style={{ cursor: "pointer" }}
        className="transition-transform duration-200 hover:scale-105 text-sm md:text-xl"
      >
        Previous page
      </button>
      <span>
        {page} / {totalPages}{" "}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        style={{ cursor: "pointer" }}
        className="transition-transform duration-200 hover:scale-105 text-sm md:text-xl"
      >
        Next page
      </button>
    </div>
  );
}
