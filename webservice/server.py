import blockchain
import json
from flask import Flask
app = Flask(__name__)
from flask import Flask
from flask import request
from flask_cors import CORS



engine = blockchain.MiningEngine()
app = Flask(__name__)
CORS(app)

@app.route('/blockchain', methods=['POST'])
def post():
	print(request.is_json)
	data = request.get_json()
	print(data)
	# output = {"nonce": 0, "time": 0}
	output = engine.run(data)
	return json.dumps(output)	
	# response = json.dumps({'some': 'data'})
	# return response


app.run(host='0.0.0.0', port=5000)