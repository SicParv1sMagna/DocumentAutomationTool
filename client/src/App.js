import './App.css';
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from './Helpers/ProtectedRoute/ProtectedRoute';
import { Login, Registration, Document, Home } from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<Registration />} />
        <Route path="/document" element={<ProtectedRoute />}>
          <Route path="documents" element={<Document />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
