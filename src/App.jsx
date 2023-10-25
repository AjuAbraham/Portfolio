import './App.scss';
import {Contact,Hero,Navbar,Parallax,Project,Sidebar, Skills} from './components/index';
const App = () => {
  return <div>
    <section id='About'>
      <Navbar/>
      <Hero/>
      </section>
    <section id='Skills'>
      <Parallax type='Skills'/>
      </section>
    <section>
      <Skills/>
      </section>
    <section id='Projects'>
      <Parallax type='Projects'/>
      </section>
     <Project/>
    <section id='Contact'>
      <Contact/>
      </section>
  </div>;
};

export default App;
