#### Negative Test Cases Overview



Added 4 negative test cases in Postman collection to show that the API handles invalid requests correctly and returns the proper HTTP status codes and error messages.



##### Test Summary



|**Test Case**|**Purpose/Description**|**HTTP Status**|**Assertion Check**|
|-|-|-|-|
|**1. Missing Access Token**|Checks that system blocks the unauthorized request|401 - Unauthorized|Error message includes - "missing"`|
|**2. Non exist productid**|Checks that if a non-existent product is requested, system returns a 404 error message.|404 - Not Found|Error message includes - "no product"|
|**3. Invalid Payload**|checks that system rejects broken or improper requests|400 - Bad Request|Error message includes - "missing"|
|**4. Add item without payload**|checks that system rejects post request without required body.|400 - Bad Request|Error message includes - "missing"|



