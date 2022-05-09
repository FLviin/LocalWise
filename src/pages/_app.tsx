import { Header } from '../components/Header';

import {AppProps} from 'next/app';
import '../styles/global.scss';
import { useState } from 'react';
import { SingInModal } from '../components/SingInModal';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [isSingInModalOpen , setIsSingInModalOpen] = useState(false);

  function handleOpenNewModal(){
      setIsSingInModalOpen(true);  
  }
  function handleCloseNewModal(){
      setIsSingInModalOpen(false);  
      
  }
  return( 
    <>
    <Header onOpenSingInModal={handleOpenNewModal}/>

    <SingInModal 
      isOpen={isSingInModalOpen}
      onRequestClose={handleCloseNewModal}
    />
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
