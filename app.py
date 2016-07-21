#!flask/bin/python
from flask import Flask
import csv
import json
import urllib2

app = Flask(__name__, static_url_path='/static')
your_list = []

@app.route('/<category>/<neighborhood>')
def index(category, neighborhood):
    neighborhood_list = [x for x in your_list if neighborhood in x['neighborhood']]
    category_list = [x for x in neighborhood_list if category in x['category']]
    category_list.sort(key=lambda x: -float(x['s_index']))
    return json.dumps(map(populate_constellation, category_list[:10]))

def populate_constellation(element):
    factual_id = element['factual_id']
    response = urllib2.urlopen("http://constellation.prod.factual.com/r/Iw1HPj/live/summaries/query?q=factual_id%3A" + factual_id).read()
    element['payload'] = json.loads(response)['response']['docs'][0]
    return element

def setup():
    with open('all_data_score.csv', 'rb') as f:
        global your_list
        reader = csv.DictReader(f)
        your_list = list(reader)

if __name__ == '__main__':
    setup()
    app.run(debug=True)
