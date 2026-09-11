import BookCard from "./BookCard";

export default function BookList({ books, onReserve }) {
  if (books.length === 0) {
    return <p>Não há livros para exibir.</p>;
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {books.map((book) => (
        <BookCard 
            key={book.id} 
            {...book}
            onReserve={onReserve}    
        />
      ))}
    </section>
  );
}