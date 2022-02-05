import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CollectionCard from './components/CollectionCard';
import { useState,useEffect } from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {
  const [punkListData,setPunkListData] = useState([])
  const [selectedPunk,setSelectedPunk] = useState(0)
  useEffect(()=>{
    const getMyNfts = async () => {
        const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x692D6f9fdd89e44E0225c3EA27925Ea552378a0f&order_direction=asc')
        console.log(openseaData.data.assets);
        setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])
  return (
    <div className='app'>
        <Header/>
        {
            punkListData.length > 0 && (
                <>
                <Main selectedPunk={selectedPunk} punkListData={punkListData} />
                <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
                </>
            )}
    </div>
  );
}

export default App;
