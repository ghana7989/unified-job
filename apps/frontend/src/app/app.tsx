// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';

import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    fetch('/api').then(async (response) => {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <NxWelcome title="frontend" />
    </div>
  );
}

export default App;
