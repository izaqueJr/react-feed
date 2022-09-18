import { Header } from './components/Header'
import { Posts } from './components/Posts';
import { SideBar } from './components/Sidebar/index';

import './global.css';
import './App.css';

function App() {
 
  return (
    <>
    <Header />
    <div className='wrapper'>
      <SideBar />

      <main>
        <Posts 
          author='Teste' 
          role='Web Developer'
          content='Dolor mollit do sunt sunt esse. Incididunt dolor magna dolore est dolor et deserunt laboris ex. Do dolore labore culpa dolor tempor veniam anim in irure sunt dolore consectetur non. Nisi consequat culpa eu do sit. Aliquip dolor cupidatat consequat dolore irure ex culpa aute adipisicing nisi nisi in esse.'
          />
        <Posts 
          author='Teste' 
          role='Web Developer'
          content='Dolor mollit do sunt sunt esse. Incididunt dolor magna dolore est dolor et deserunt laboris ex. Do dolore labore culpa dolor tempor veniam anim in irure sunt dolore consectetur non. Nisi consequat culpa eu do sit. Aliquip dolor cupidatat consequat dolore irure ex culpa aute adipisicing nisi nisi in esse.'
          />
      </main>
    </div>
    </>
  )
}

export default App
