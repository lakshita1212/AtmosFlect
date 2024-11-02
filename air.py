import requests
from dotenv import load_dotenv
import os


load_dotenv()
api_key=os.getenv('API_KEY')


def get_lat_long(city_name,state_code,country_code,API_key):
    res=requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&appid={API_key}').json()
    if res:
        latitude = res[0].get('lat')
        longitude = res[0].get('lon')
        print(f"Latitude: {latitude}, Longitude: {longitude}")
    else:
        print("Location not found.")
    

get_lat_long('Toronto','ON','Canada',api_key)


 