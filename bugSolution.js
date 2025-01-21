```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Use a more specific path for nested routes */}
        <Route path="/users/:id" element={<User />} >
          <Route path=":id/*" element={<User />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function User() {/* ... */}
export default App; 
```