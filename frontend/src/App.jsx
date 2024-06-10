import {useEffect, useState} from 'react';
import {Menu, Spin} from 'antd';
import axios from "axios";
import CryptocurrencyCard from "./components/CryptocurrencyCard.jsx";


const App = () => {
    const [currencies, setCurrencies] = useState([])
    const [currencyId, setCurrencyId] = useState(1)
    const [currencyData, setCurrencyData] = useState(null)

    const fetchCurrencies = () => {
        axios.get('http://127.0.0.1:8000/cryptocurrencies').then((response) => {
            const currenciesResponse = response.data;
            const menuItems = [
                {key: 'grp', label: 'Список криптовалют', type: 'group', children: currenciesResponse.map(c => {
                    return {key: c.id, label: c.name};
                    })}
            ]
            setCurrencies(menuItems);
        })
    }

    const fetchCurrency = () => {
        axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then((response) => {
            setCurrencyData(response.data);
        })
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);

    useEffect(() => {
        fetchCurrency();
    }, [currencyId]);

    const onClick = (e) => {
        setCurrencyData(null);
        setCurrencyId(e.key);
    };

    return (
        <div className="flex">
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={currencies}
                className="h-screen overflow-y-auto"
            />
            <div className="mx-auto my-auto">
                {currencyData ? <CryptocurrencyCard currency={currencyData}/> : <Spin size="large"/>}
            </div>
        </div>
    );
};
export default App;