### Qa-home-assessment: Test Execution Guide

\---



### API Test Execution Instructions





##### Preconditions

* **Node.js**, **Newman** and **postman** are assumed to be installed on the machine.
* "**simple\_grocery\_store.postman\_collection.json**" and "**Grocery\_Test.postman\_environment.json**" both collection and environment files are assumed to be available on the downloaded api-tests folder.


##### 1\. Run via Terminal (Newman CLI)



1. Open a terminal directly inside the 'api-tests' directory.
2. Execute the test collection with the environment file using below command:

"**npx newman run simple\_grocery\_store.postman\_collection.json -e Grocery\_Test.postman\_environment.json**"





##### 2\. Run via Postman Application (GUI)

1. Open the Postman desktop app.
2. Click Import or (press ctrl+'O') and select both simple\_grocery\_store.postman\_collection.json and Grocery\_Test.postman\_environment.json.
3. Select 'Grocery\_Test' from the environment dropdown.
4. Select the 'simple\_grocery\_store' collection and click Run --> Start run.



\---

### Playwright Test Execution Instruction



##### Preconditions

* **Node.js**, **@playwright/test**, and browser are assumed to be installed on the machine.
* Note: The 'playwright.config.ts' file is located inside the 'playwright-tests' directory.



##### 1\.Run via Terminal
   
1. Open a terminal directly inside the 'playwright-tests' directory
2. Run the test file using below command (To run file With the Browser) :

"**npx playwright test tests/saucedemo.spec.ts --headed**"

&#x20;

&#x20;

##### 2\. Run via VS Code Test Explorer

1. Open the project in VS Code.
2. Go to the **Testing** section on the left sidebar.
3. Check **Show browser** in the Playwright panel to run in headed mode.
4. Expand 'playwright-tests' --> 'tests' --> 'saucedemo.spec.ts' and click **Run Test**.

