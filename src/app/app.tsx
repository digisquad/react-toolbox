import NxWelcome from './nx-welcome';
import Providers from '@react-toolbox/shared/providers';



export function App() {
  return (
    <Providers>
      <NxWelcome title="react-toolbox" />
    </Providers>
  );
}

export default App;
