import os
from flask import Flask, render_template, request, jsonify
from currency_container import *

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])

@app.route("/")
def hello():
	return render_template('index.html')

@app.route("/convert", methods=['GET'])
def convert():

	converter = CurrencyContainer();
	# import pdb; pdb.set_trace()

	x = converter.get_millionaire(int(request.args.get('amount')), request.args.get('currency'))
	# import pdb; pdb.set_trace()

	# Using dumps instead of jsonify because jsonify does not conserve order.
	# Known flask issue: https://github.com/pallets/flask/issues/974
	return json.dumps(x)