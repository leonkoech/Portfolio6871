# Color QR Code Generator

This Flask-based web application provides a user-friendly interface to generate QR codes based on input text. It allows for customization, including transparent backgrounds and custom colors for the QR code and its background. 

## Features
- Accepts text input for generating a QR code.
- Allows the user to choose between transparent or custom-colored QR code and background.
- Generates and displays the QR code directly on the webpage.
- Option to download the generated QR code as an image.

---

## **Requirements**

Before running the app, make sure you have the following installed:

1. **Flask** – A micro web framework for Python.
2. **qrcode** – Python library to generate QR codes.
3. **Pillow** – Python Imaging Library to manipulate images.
4. **python 3.6+**

### Install dependencies:

```bash
pip install Flask qrcode[pil] Pillow
```

---

## **How to Use the Application**

1. **Launch the Flask Application:**
   - Navigate to the directory where your Flask app is located.
   - Run the following command to start the Flask server:
   ```bash
   python app.py
   ```
   - By default, the server will be running on `http://127.0.0.1:5000/`.

2. **Using the Web Interface:**
   - Open your browser and go to `http://127.0.0.1:5000/`.
   - You will be prompted to input the text for the QR code.
   - Next, choose whether you want the QR code background to be transparent or a custom color:
     - If transparent, the code will proceed with a transparent background.
     - If custom, you will be asked to input the RGB values for the background.
   - Similarly, you will be prompted to either set a transparent QR code or provide custom color values for the QR code itself.
   - After confirming your settings, the QR code will be generated and displayed on the page.
   - You can download the generated QR code image by clicking the download button.

---

## **How the Application Works**

1. **Input Text**: The user inputs a string or URL to be encoded into the QR code.
2. **Background Transparency or Custom Color**:
   - If the user opts for a transparent background, no further input is needed, and the QR code is generated with transparency.
   - If a custom background is chosen, RGB values are collected for the background color.
3. **QR Code Transparency or Custom Color**:
   - If the user selects a transparent QR code, the QR code is generated with a transparent foreground.
   - If a custom color is selected for the QR code, RGB values are gathered, and the QR code is created with the chosen color.
4. **Generate QR Code**: The QR code is generated using the `qrcode` package, processed with `Pillow` to apply color customizations, and displayed on the webpage.
5. **Download Image**: The user can download the generated QR code by clicking on the "Download" button.

## **Pictures & Screenshots**

### **Application in Action**

The following screenshots show how the QR code is generated on the web interface, including input prompts and the generated QR code with customizations.

1. **QR Code Input and Customization Interface:**

![QR Code Generation Interface](https://user-images.githubusercontent.com/39020723/134251696-6502183a-0016-4a65-acb5-05c234295841.png)

2. **Generated QR Code with Custom Colors:**

![Generated QR Code](https://user-images.githubusercontent.com/39020723/134251717-a0c7c790-7906-49ee-8f33-cd6b66fdeb6d.jpeg)

3. **Output when QR Code is Scanned:**

<img src="https://user-images.githubusercontent.com/39020723/134251717-a0c7c790-7906-49ee-8f33-cd6b66fdeb6d.jpeg" alt="Output when code is scanned" width="240"/>

---

## **Next Steps for Improvement**

- **QR Code Style Options**: Add additional customization options, such as setting the size of the QR code or adding logos to the center.
- **Error Correction Levels**: Allow users to choose the error correction level for QR code generation, affecting its ability to be scanned when damaged.
- **Web Hosting**: Deploy the Flask app on a cloud platform like Heroku or AWS to make it publicly accessible.

---

### **Conclusion**

This Flask-based QR Code generator provides a simple and interactive way to generate customized QR codes for any text input. It leverages popular Python libraries like **qrcode** and **Pillow** to deliver a flexible and easy-to-use experience for generating transparent or custom-colored QR codes.