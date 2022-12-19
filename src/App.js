import {React} from 'react';
import { ChakraProvider, VStack} from '@chakra-ui/react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "animate.css"
import {Skills} from "./components/Skills/Skill.jsx"

import Home from './components/home/Home';
import Projects from './components/projects/Projects';

import {theme} from "./Theme/Theme";
import Footer from './components/footer/Footer';
import { About } from './components/About';
import GitHubStats from './components/GitHubStats';
import { Contact } from './components/Contact';

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor="brand.300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Skill" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/githubStats" element={<GitHubStats />} />
          <Route path="/contacts" element={<Contact />} />


        </Routes>
           </VStack>
           
        <About/>
        <Skills/>
        <Projects/>
        <GitHubStats/>
        <Contact/>

        
        <Footer/>
   
    </ChakraProvider>
  );
}

export default App;
