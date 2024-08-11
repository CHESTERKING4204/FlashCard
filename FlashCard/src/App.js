import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AddFlashcard from './AddFlashcard';
import FlashcardList from './FlashcardList';
import ViewFlashcard from './ViewFlashcard';
import EditFlashcard from './EditFlashcard';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-around text-white">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/add" className="hover:text-gray-300">Add Flashcard</Link></li>
            <li><Link to="/flashcards" className="hover:text-gray-300">Flashcards</Link></li>
          </ul>
        </nav>

        {/* Define Routes for each component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFlashcard />} />
          <Route path="/flashcards" element={<FlashcardList />} />
          <Route path="/flashcards/:id" element={<ViewFlashcard />} />
          <Route path="/edit/:id" element={<EditFlashcard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
