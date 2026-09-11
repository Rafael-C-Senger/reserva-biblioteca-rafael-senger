import "./App.css";
import { books } from "./data/books";
import { useState } from "react";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm"; 

export default function App() {
  const [bookList, setBookList] = useState(books);

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
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>
      <Panel title="Adicionar livro">
        <BookForm 
          onAddBook={(newBook) => 
            setBookList((currentBooks) => 
              [...currentBooks, newBook])}
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
