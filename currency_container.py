import json
from collections import OrderedDict

class CurrencyContainer(object):
	"""Main interaction with my Exchange rate data"""
	
	def __init__(self):
		with open('./data/fixed_data.json') as f:
			self.currencies = json.load(f)

	def get_currency_shorthands(self):
		return list(self.currencies)

	# properties are name, countries, country_codes, rate
	# get an array of tuples, matching the currency symbol to a given property
	def map_currency_property(self, prop):
		outp = []
		for (k, v) in self.currencies.items():
			outp.append((k, v.get(prop)))

		return outp

	def get_currency_properties(self, currency):
		return currencies.get(currency)
	
	def get_countries(self, currency):
		return self.currencies.get(currency).get('countries')
	
	def get_rate(self, currency):
		return self.currencies.get(currency).get('rate')
	
	def get_subset(self, subset):
		return {k: self.currencies[k] for k in subset}

	def convert(self, amount, init_currency, target_currency):
		# convert to euro, then convert from euro to target_currency
		return amount / self.get_rate(init_currency) * self.get_rate(target_currency)

	def get_millionaire(self, amount, init_currency):
		temp = {k: self.currencies[k] for k in self.currencies if self.convert(amount, init_currency, k) > 1000000}

		for (k, v) in temp.items():
			v['amount'] = self.convert(amount, init_currency, k)

		return OrderedDict(sorted(temp.items(), key=lambda t: t[1]['amount'], reverse=True))

	def get_billionaire(self, amount, init_currency):
		return {k: self.currencies[k] for k in self.currencies if self.convert(amount, init_currency, k) > 1000000000}


# test = CurrencyContainer()
# l = 0
# amount = 1
# while l < 158:
# 	x = test.get_millionaire(amount, 'EUR')

# 	print(x)
# 	l = len(x)
# 	print(l)
# 	print(amount)

# 	amount *= 10

# print('-----------------------------------------------------------')
# print(test.currencies.keys() - x.keys())

# print(len(test.currencies.keys()))