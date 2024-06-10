import {Card} from "antd";

function CryptocurrencyCard(props) {

    const { currency } = props;

    const price = currency.quote.USD.price.toFixed(3);

    const currencyPriceDayChange = currency.quote.USD.percent_change_24h.toFixed(2);

    const marketCap = Math.floor(currency.quote.USD.market_cap / 1.0e+9);

    return (
        <div>
            <Card
                title={
                    <div className="flex items-center justify-start gap-3">
                        <img
                            width='32px'
                            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
                            alt={'img'}/>
                        <span>{currency.name}</span>
                    </div>
                }
                style={{
                    width: 300,
                }}
            >
                <p>Текущая цена: {price}$</p>
                <p>Изменение цены за 24 часа:
                    <span
                        className={currencyPriceDayChange < 0 ? 'text-red-500' : 'text-green-500'}>
                        &nbsp;{currencyPriceDayChange}%
                    </span>
                </p>
                <p>Текущая капитализация: ${marketCap}B</p>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard
