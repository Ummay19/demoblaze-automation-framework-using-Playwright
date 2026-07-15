# demoblaze-automation-framework-using-Playwright
End-to-End Test Automation Framework for DemoBlaze e-commerce site built with Playwright & JavaScript. Features Page Object Model (POM), Data-Driven Testing, Hooks, API Testing, Allure Reporting, Multi-Browser support & 43 automated test cases across 8 modules. Built as part of Software Testing course project.

# 🚀 DemoBlaze Automation Framework

## 👩‍💻 Author
**Umamah** Automation Framework built using **Playwright with JavaScript**.

---

## 📌 Project Overview
This project implements a robust and maintainable automation framework using Playwright with JavaScript.  
The framework follows industry best practices including **Page Object Model (POM), Data-Driven Testing, Hooks, Utilities Layer, API Testing, and Allure Reporting**.

**Applications Under Test:**
- 🛒 **UI Testing:** DemoBlaze E-commerce Website — https://www.demoblaze.com/
- 🔗 **API Testing:** DemoQA REST APIs — https://demoqa.com/

---

## ✅ Framework Features

✔ Page Object Model (POM)  
✔ JSON Data-Driven Testing  
✔ Hooks (beforeEach, afterEach, beforeAll, afterAll)  
✔ **UI + API Automation Testing**  
✔ Allure Reporting Integration  
✔ Multi-Browser Support (Chromium, Firefox, WebKit)  
✔ Screenshot Capture on Failure  
✔ Modular Utilities Layer  
✔ 43 Structured Test Cases** (40 UI + 3 API)

---

## 📁 Project Structure

### 🔹 tests/
Contains all test specification files organized by modules:
- login.spec.js
- product.spec.js
- cart.spec.js
- order.spec.js
- navigation.spec.js
- signup.spec.js
- ui.spec.js
- api.spec.js

### 🔹 pages/
Contains Page Object Model classes:
- BasePage.js
- HomePage.js
- LoginPage.js
- ProductPage.js
- CartPage.js
- OrderPage.js
- SignupPage.js

### 🔹 testdata/
Stores JSON test data files:
- loginData.json
- orderData.json

### 🔹 utilities/
Reusable helper functions:
- screenshot.js

### 🔹 fixtures/
Contains hooks and setup configuration:
- testSetup.js

---

## 🏗 Framework Architecture

The framework follows a layered architecture:

JSON Test Data  
⬇  
Test Spec Files (UI + API)  
⬇  
Page Object Classes / API Requests  
⬇  
Utilities Layer (Hooks, Screenshots)  
⬇  
Playwright Test Runner  
⬇  
Browser (Chromium / Firefox / WebKit) / REST APIs  
⬇  
Application Under Test  

---

## 🔄 Hooks Implementation

The framework uses:

- **beforeEach** (via fixture auto setup) → Opens application before each test
- **afterEach** → Captures screenshots and attaches them to report
- **beforeAll** → Suite-level initialization (Navigation module)
- **afterAll** → Suite-level cleanup/logging

---

## 📊 Reporting

Allure Reporting is integrated.

Report includes:
- Test Summary
- Pass/Fail Status
- Execution Time
- Step-level logs
- Screenshots (including failure screenshots)
- API Request/Response logs

---

## ✅ Test Coverage

**Total Test Cases: 43**

Modules Covered:
- Login Module
- Signup Module
- Product Module
- Cart Module
- Order Module
- Navigation Module
- UI Validations
- API Testing

---

## ✅ 1️⃣ Login Module  
📁 `login.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Login with valid user |
| 2 | Login with invalid password |
| 3 | Login with empty username |
| 4 | Login with empty password |
| 5 | Login with both fields empty |
| 6 | Logout after login |

✅ **Total = 6 Test Cases**

---

## ✅ 2️⃣ Signup Module  
📁 `signup.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Signup with dynamic new user |
| 2 | Signup with weak password |
| 3 | Signup with special characters |
| 4 | Signup with very long username |
| 5 | Signup with spaces in username |

✅ **Total = 5 Test Cases**

---

## ✅ 3️⃣ Product Module  
📁 `product.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Open Samsung Product |
| 2 | Open Nokia Product |
| 3 | Open Sony Product |
| 4 | Open MacBook Product |
| 5 | Open Dell Laptop Product |

✅ **Total = 5 Test Cases**

---

## ✅ 4️⃣ Cart Module  
📁 `cart.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Add product and go to cart |
| 2 | Delete product from cart |
| 3 | Add multiple products |
| 4 | Cart page navigation |
| 5 | Verify cart loads properly |
| 6 | Verify total amount visible |
| 7 | Cart page loads without product |

✅ **Total = 7 Test Cases**

---

## ✅ 5️⃣ Order Module  
📁 `order.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Place Order Successfully |
| 2 | Place order without name |
| 3 | Place order with invalid card |
| 4 | Cancel order modal |
| 5 | Verify confirmation popup appears |
| 6 | Verify purchase ID generated |
| 7 | Verify purchase success popup visible |

✅ **Total = 7 Test Cases**

---

## ✅ 6️⃣ Navigation Module  
📁 `navigation.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Verify Home URL |
| 2 | Verify Title |
| 3 | Verify Phones Category Click |
| 4 | Verify Laptops Category Click |
| 5 | Verify Monitors Category Click |
| 6 | Verify Phones Category loads products |
| 7 | Verify Laptops Category loads products |

✅ **Total = 7 Test Cases**

---

## ✅ 7️⃣ UI Validation Module  
📁 `ui.spec.js`

| # | Test Case |
|---|-----------|
| 1 | Verify Navbar visible |
| 2 | Verify Cart link visible |
| 3 | Verify Login link visible |

✅ **Total = 3 Test Cases**

---

## ✅ 8️⃣ API Testing Module 🆕  
📁 `api.spec.js`

Automated REST API tests using Playwright's built-in `request` fixture.  
**Base URL Tested:** `https://demoqa.com/`

| # | Test Case |
|---|-----------|
| 1 | Get All Books API Test | 
| 2 | Validate Book API Response | 
| 3 | Create User API Test |

✅ **Total = 3 Test Cases**

**Key Concepts Covered:**
- GET request handling
- POST request with request body
- Response status code validation
- JSON response body validation
- End-to-end API workflow testing

---

## 🎯 Best Practices Implemented

- Separation of test logic and page logic
- No hardcoded credentials (JSON-driven testing)
- Isolated test execution
- Reusable modular functions
- Multi-browser execution
- Combined UI + API testing in a single framework
- Clean and maintainable code structure

---


#playwright#javascript#automation-testing#test-automation#pom#page-object-model#api-testing#allure-report#sqa#e2e-testing#demoblaze#software-testing
