export default function BookCard({ 
    id,
    title, 
    author, 
    year, 
    available, 
    onReserve,  
}) {
  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>Autor: {author}</p>
        <p>Ano: {year}</p>
        
        <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
          {available ? "Disponível" : "Reservado"}
        </span>

        <button type="button" onClick={() => onReserve(id)}>
            {available ? "Reservar" : "Indisponível"}
        </button>
      </div>
    </article>
  );
}