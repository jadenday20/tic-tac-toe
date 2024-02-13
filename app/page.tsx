import PlayArea from "./components/PlayArea"

export default function Home() {
  const handleResetClick = () => {
    // Handle reset click event
    console.log("Reset clicked");
  };

  const handleUndoClick = () => {
    // Handle undo click event
    console.log("Undo clicked");
  };


  return (
    <>
    <main className="flex justify-center">
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Tic Tac Toe</h1>
        <PlayArea></PlayArea>
      </div>
    </main>
    <footer>
      <p className="text-center">&copy;2024|Jaden Day</p>
    </footer>
    </>
  );
}
