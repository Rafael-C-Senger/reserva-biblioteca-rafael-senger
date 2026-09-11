import "./App.css";
import { books } from "./data/books";
import { useState } from "react";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm"; 

export default function App() {
  const [bookList, setBookList] = useState(books);

  const availableCount = bookList.filter(
    (book) => book.available,
  ).length;

  function handleAddBook(newBook) {
    setBookList((currentBooks) => [...currentBooks, newBook]);
  }

  function handleToggleReserve(bookId) {
    setBookList((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book
      ),
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>
          {availableCount} de {bookList.length} livros disponíveis.
        </p>
      </header>

      <Panel title="Adicionar livro">
        <BookForm 
          onAddBook={handleAddBook}
        />
      </Panel>
      <Panel title="Acervo">
        <BookList 
          books={bookList} 
          onReserve={handleToggleReserve}
        />
      </Panel>
    </main>
  );
}
