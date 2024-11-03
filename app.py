import requests
from dotenv import load_dotenv
import os
from flask import Flask, render_template, request, jsonify

# Load environment variables
load_dotenv()
api_key = os.getenv('API_KEY')

app = Flask(__name__)

def get_lat_long(city_name, state_code, country_code, API_key):
    res = requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&appid={API_key}').json()
    if res:
        latitude = res[0].get('lat')
        longitude = res[0].get('lon')
        return latitude, longitude 
    else:
        return None, None 

def get_current_air_pollution(lat, lon, API_key):
    res = requests.get(f'http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_key}').json()
    return res  

@app.route('/')
<<<<<<< HEAD
def home():
    return render_template('home.html')  

@app.route('/map')
def show_map():
    return render_template('map.html')

@app.route('/historical_data')
def historical_data():
    return render_template('historical.html')
=======
def index():
    return render_template('map.html')  
>>>>>>> b687cf82c586d8f7bae7751dce907c3cf4730ce9

@app.route('/api_key')
def get_api_key():
    return jsonify({'api_key': api_key})

@app.route('/get_data', methods=['GET'])
def get_data():
    city = request.args.get('city')
    state = request.args.get('state')
    country = request.args.get('country')
    
    lat, lon = get_lat_long(city, state, country, api_key)
    if lat is not None and lon is not None:
        pollution_data = get_current_air_pollution(lat, lon, api_key)
        return jsonify(pollution_data) 
    else:
        return jsonify({'error': 'Location not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)