import React, { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { LogoHandler } from './handlers/LogoHandler';
import { MenuHandler } from './handlers/MenuHandler';

const App: React.FC = () => {
  useEffect(() => {
    const logoHandler = new LogoHandler();
    const menuHandler = new MenuHandler();

    logoHandler.setNext(menuHandler);

    const logo = logoHandler.handle('logo');
    const menu = logoHandler.handle('menu');

    console.log(logo);
    console.log(menu);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;