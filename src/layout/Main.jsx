import Book from "../components/Book";

function Main() {
  const books = [
    {
      id: 1,
      author: "Walter Isac",
      title: "Steve Jobs",
    },
    {
      id: 2,
      author: "Okkasha Ally",
      title: "React JS",
    },
    {
      id: 3,
      author: "Ibrahim Shelby",
      title: "Unique Academy",
    },
    {
      id: 4,
      author: "ABD Walker",
      title: "Steam Nature",
    },
    {
      id: 5,
      author: "Baga",
      title: "Body building",
    },
    {
      id: 6,
      author: "Yesu",
      title: "Vibing",
    },
    {
      id: 7,
      author: "Chalaby",
      title: "Quad bike",
    },
    {
      id: 8,
      author: "Omar bigy",
      title: "Football",
    },
    {
      id: 9,
      author: "Omar bigy",
      title: "Football",
    },
    {
      id: 10,
      author: "Omar bigy",
      title: "Football",
    },
  ];

  return (
    <section className="app m-t-m p-s m-b-s">
      <div className="recently m-b-m">
        <h2 className="heading heading__2">recently added</h2>
        <div className="recently__books m-t-s">
          {books.map(book => (
            <Book title={book.title} author={book.author} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
