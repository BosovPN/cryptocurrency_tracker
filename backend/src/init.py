from src.config import settings
from src.http_client import CMCHttpClient


cmc_client = CMCHttpClient(
    base_url='https://pro-api.coinmarketcap.com',
    service='X-CMC_PRO_API_KEY',
    api_key=settings.CMC_API_KEY
)
