# Lunchbox.io

**Lunchbox.io** is a PHP-based web application designed to provide a platform for content creators to publish articles, with a monetization model driven by user engagement (claps). It allows users to create and read articles while offering various subscription tiers for enhanced features and compensation.

The structure of the web application is inspired by platforms like Medium, allowing users to engage with content and get paid for their contributions based on the number of claps they receive.

---

## **Features & Algorithm**

Lunchbox.io offers three types of accounts: Free, 5$ Paid, and 10$ Paid, each providing different levels of access and benefits.

### **Free Account**

- **Public Articles**: Unlimited access to public articles.
- **Private Articles**: Read up to 2 private articles per month.
- **Article Creation**: Create up to 5 public articles per month.
- **Claps**: 10 free claps to use on articles (does not generate payment for the writer).
- **Earnings**: The user does not get paid for article engagement (claps).

### **5$ Account**

- **Public Articles**: Unlimited access to public articles.
- **Private Articles**: Read up to 5 private articles per month.
- **Article Creation**: Create up to 10 articles per month (3 private, 7 public).
- **Claps**: Writers are paid for claps. Payment is calculated as $5 per article clapped in that month.
- **Earnings**: 20% of earnings from claps go back to Lunchbox.io for platform maintenance.

### **10$ Account**

- **Public Articles**: Unlimited access to public articles.
- **Private Articles**: Read up to 5 private articles per month.
- **Article Creation**: Create up to 15 articles per month (7 private, 8 public).
- **Claps**: Writers are paid for claps. Payment is calculated as $10 per article clapped in that month.
- **Earnings**: 10% of earnings from claps go back to Lunchbox.io for platform maintenance.

---

## **UI and Backend**

- The **user interface** is functional but may not be polished; future updates are planned to improve its appearance and overall user experience.
- The **backend** and **frontend** both work as expected, with a clear separation of logic for managing user accounts, articles, claps, and earnings.

---

## **Setup Instructions**

### **Database Setup**

To get started, you need to create the following tables in your MySQL database:

#### **Tables**

Below are the structures of the required tables for the Lunchbox.io web application.

![Database Table Structure](https://user-images.githubusercontent.com/39020723/81902675-34802580-95c9-11ea-9d8d-e1eb4b143afd.png)

#### **Tables Overview**

The tables to create include:
- **Users**: Stores user account information and subscription status.
- **Articles**: Stores article content, public/private status, and other metadata.
- **Claps**: Tracks user engagement with articles and calculates earnings.
- **Payments**: Records transactions, ensuring proper distribution of earnings and platform revenue.
- **Subscriptions**: Manages subscription plans and user tier levels.

![Article Table](https://user-images.githubusercontent.com/39020723/81902820-75783a00-95c9-11ea-9e48-44c253b14f2f.png)

![Claps Table](https://user-images.githubusercontent.com/39020723/81902825-7741fd80-95c9-11ea-93dc-1c5113475c15.png)

![Payments Table](https://user-images.githubusercontent.com/39020723/81902826-77da9400-95c9-11ea-8725-97d185dd2c85.png)

![Subscriptions Table](https://user-images.githubusercontent.com/39020723/81902827-78732a80-95c9-11ea-9bef-96d4ab36a15a.png)

---

## **License**

This project is licensed under the [MIT License](https://github.com/leonkoech/Lunchbox.io/blob/master/LICENSE), which allows for free usage, modification, and distribution of the code.


