
# alpha has alpha-3 data, is an array of dictionaries

import json

with open('../data/alpha2-to-alpha3.json', 'r') as read_file:
   alpha = json.load(read_file)


# c is the dictionary of currency info

with open('../data/complete_data.json', 'r') as read_file:
   c = json.load(read_file)



for k, v in c.items():
	# find matching info in alpha, or flag
	v['country_codes_alpha3'] = []
	for alpha_2_code in v.get('country_codes'):
		result = [x for x in alpha if x.get('alpha-2') == alpha_2_code]
		if len(result) == 0:
			print('no match for ' + alpha_2_code)
		else:
			v['country_codes_alpha3'].append(result[0].get('alpha-3'))

with open('../data/fixed_data.json', 'w') as outfile:
	json.dump(c, outfile)
		