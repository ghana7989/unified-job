import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    fetch('/api/v1').then(async (response) => {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
