import time
import hashlib
import math
import random

class MiningEngine:

	useLinearNonce = True
	maxAttempts = 1000000
	prefix = "000"

#	data format:
#	{ 'id': string, 
# 	  'parentHash': string,
# 	  'data': string,
# 	  'maxAttempts': int,
# 	  'prefix': string,
# 	  'useLinear': bool }

	def run(self, data):
		if data['useLinear']:
			self.useLinearNonce = True
		else:
			self.useLinearNonce = False
		self.maxAttempts = data['maxAttempts']
		self.prefix = data['prefix']
		hashInput = data['id'] + data['parentHash'] + data['data']

		if self.useLinearNonce:
			nonce, time = self.mineLinear(hashInput)
		else:
			nonce, time = self.mineRandom(hashInput)
		return {"nonce": nonce, "time": time}


	def mineLinear(self, input):
		start = time.time()
		nonce = 0
		for i in range(self.maxAttempts):
			newInput = input + str(nonce)
			newHash = hashlib.sha256(newInput.encode('utf-8')).hexdigest()
			if newHash.startswith(self.prefix):
				elapsed = math.ceil((time.time() - start) * 1000)
				return nonce, elapsed
			nonce += 1

		elapsed = math.ceil((time.time() - start) * 1000)
		return nonce, elapsed


	def mineRandom(self, input):
		start = time.time()
		random.seed(start)
		for i in range(self.maxAttempts):
			nonce = random.randint(1, 2147483646)
			newInput = input + str(nonce)
			newHash = hashlib.sha256(newInput.encode('utf-8')).hexdigest()
			if newHash.startswith(self.prefix):
				elapsed = math.ceil((time.time() - start) * 1000)
				return nonce, elapsed

		elapsed = math.ceil((time.time() - start) * 1000)
		return nonce, elapsed
	

# TEST
if __name__ == '__main__':
	m = MiningEngine()
	m.run({'id': "12345678910", 
		   'parentHash': "hashasd896as9f73g1o31bkj13bk1j2h3k1j23h12",
		   'data': "exampledata",
		   'useLinear': False,
		   'maxAttempts': 1000000,
		   'prefix': "0000"})