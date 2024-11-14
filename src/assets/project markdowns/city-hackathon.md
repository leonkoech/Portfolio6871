

# Habitat for Humanity Housing Application Filtering System

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Architecture](#architecture)
4. [Usage](#usage)
5. [Team Structure](#team-structure)
6. [License](#license)

## Project Overview

The Habitat for Humanity Housing Application Filtering System is designed to streamline the manual processing of pre-application data, enabling faster and more efficient handling of housing applications. 
This web-based tool provides Habitat for Humanity employees with a visually-friendly interface to process up to 30,000 pre-applications, ultimately narrowing down to the 50 applicants who will receive a home.

![New Project](https://github.com/user-attachments/assets/d42ebcb5-f179-457d-b809-c733cd2ddccb)


### Problem Statement:
- **Current State:** The housing application process is manual, requiring employees to sift through thousands of applications.
- **Challenge:** Six employees manage the review of 30,000 pre-applications, making the process slow and prone to errors.
- **Goal:** Automate and simplify the process to reduce time spent on manual data entry, improve transparency for leadership, and allow better tracking of applications.

### Solution:
The system reduces manual labor by automating the filtering process, allowing Habitat for Humanity employees to quickly sort applications through defined stages. It also allows real-time tracking and visibility for leadership to make data-driven decisions.

## Key Features

- **Data Filtering:** Automatically filter applications through multiple stages (e.g., incomplete, in progress, completed) with the ability to move from 30,000 entries down to 50 approved applications.
- **Document Uploading:** Enable applicants to upload required documents directly through the platform, reducing reliance on paper records and improving document management.
- **Dashboard Interface:** A user-friendly dashboard that displays the current status of applications, including the number of applications at each stage of the review process.
- **Application Details:** View detailed information for each application, including applicant details and submitted documents.
- **Real-time Data:** Leadership has access to real-time data to support donor meetings, grant applications, and strategic decisions.

## Architecture

The platform is built as a web application, with a backend system to handle data processing, filtering, and storing application details. The key technologies and architecture include:

- **Frontend:** Built with modern JavaScript frameworks (Vue.js) to provide a seamless user experience.
- **Backend:** A server-based application (Node.js) to manage data storage, filtering, and document uploads.
- **Database:** A non-relational database (Firebase) to store application data, applicant details, and submitted documents.
- **File Storage:** Cloud-based storage (Firebase FileStorage) for storing documents submitted by applicants.

## Usage

1. **Dashboard Access:** Employees can log into the system to view the status of all housing applications.
2. **Data Filtering:** Applications are automatically filtered into different categories (e.g., incomplete, in progress, completed).
3. **Document Upload:** Applicants can submit required documents directly through the platform, and the system automatically tracks document submission.
4. **Application Review:** Habitat for Humanity staff can review individual applications and move them through the various stages until the final set of 50 approved applications is identified.
5. **Real-Time Tracking:** Leadership can access real-time data on application progress, helping with decision-making for grants and donor engagement.

## Team Structure

![CF23_TECH_HUB_HACKATHON_7884](https://github.com/user-attachments/assets/88faad8d-2672-44e4-9b99-4876443b793c)


The development of this system was a collaborative effort between the following team members:

- **Leon Kipkoech** - Lead Developer
- **Lia (Backend Developer)** - Backend Development
  
- **Ashley (UX/UI Designer)** - User Experience and Interface Design
- **Aimee (Program Manager)** - Product Designer/Frontend Assistant

- **Ashley (Frontend Developer)** -Frontend Development
- **Maria (Frontend Developer)** - Frontend Development

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the software in accordance with the terms of the license.

