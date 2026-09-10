export default function BookCard({ title, author, year, available }) {
  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>Autor: {author}</p>
        <p>Ano: {year}</p>
        
        <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
          {available ? "Disponível" : "Reservado"}
        </span>
      </div>
    </article>
  );
}