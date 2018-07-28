import os
from flask import Flask, render_template
from currency_container import *

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])

@app.route("/")
def hello():
	return render_template('index.html')

@app.route("/convert")
def convert():
	converter = CurrencyContainer();
	return converter.get_currency_shorthands()