from aiohttp import ClientSession
from async_lru import alru_cache


class HttpClient:
    def __init__(self, base_url: str, service: str, api_key: str):
        self._session = ClientSession(
            base_url=base_url,
            headers={
                service: api_key,
            }
        )


class CMCHttpClient(HttpClient):
    @alru_cache(ttl=300)
    async def get_listings(self):
        async with self._session.get('/v1/cryptocurrency/listings/latest') as resp:
            result = await resp.json()
            return result["data"]

    @alru_cache(ttl=300)
    async def get_currency(self, currency_id: int):
        async with self._session.get(
            '/v2/cryptocurrency/quotes/latest',
            params={'id': currency_id}
        ) as resp:
            result = await resp.json()
            return result["data"][str(currency_id)]