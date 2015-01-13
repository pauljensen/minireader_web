#!/Users/jensen/Library/Enthought/Canopy_64bit/User/bin/python

import json

response = {
	'Reader 1' : {'connected':True, 'status':'available'},
	'Reader 2' : {'connected':False, 'status':''},
	'Reader 3' : {'connected':True, 'status':'busy'}
}

print "Content-Type: application/json"
print ''

print json.dumps(response)
