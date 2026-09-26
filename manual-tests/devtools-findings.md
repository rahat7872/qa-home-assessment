### Saucedemo - Checkout Flow Inspection Overview



##### Test Data:

**URL:** https://www.saucedemo.com/cart.html`

**User:** standard\_user

**Browser:** Google chrome





##### API Request and Response Log

|Steps|Action|API Endpoint|Request Payload|Response log|Status code|Results|Comments|
|-|-|-|-|-|-|-|-|
|1|Cart Page|Not Available <br />(checkout flow is operating only on client side)|N/A|N/A|N/A|N/A|No Backend API exists|
|2|Checkout-step-one|events.backtrace.io/api/submit|N/A (Form Data is saved to local  memory|N/A|401 - for telemetry|N/A|Only telemetry API available for events logging / No Backend API is called|
|3|Complete order/Finish|N/A|N/A|N/A|Checkmark.Png loaded with status code 200|N/A|Order is completed in local storage without sending any data through API|



#### Summary:

The checkout flow is operating only on client side. The system do not send form data to any backend API and Hence no json data is found as response. Only telemetry API available is for events logging or tracing.

