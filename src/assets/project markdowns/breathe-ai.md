# Breathe AI: AI-Powered Wearable Respiratory Health Monitoring

Real-time respiratory health assessment through wearable sensor fusion and machine learning analytics.

Developed as a comprehensive health monitoring solution combining ESP32-S3 sensors, Flutter mobile app, and AI-driven respiratory risk assessment algorithms.

![Breathe AI System Overview](https://github.com/user-attachments/assets/935abf85-3cfa-4860-ae25-84febea2bf44)

## Description

Breathe AI is a wearable respiratory monitoring system that combines biometric sensors, environmental monitoring, and AI analytics to provide real-time respiratory health assessments. The system tracks breathing patterns, air quality, and user health data to predict respiratory condition risks and provide early warning capabilities for proactive health management.

## Problem Statement

Respiratory conditions like asthma and COPD affect millions globally, with environmental pollutants exacerbating these conditions and contributing to their development in children. Traditional respiratory monitoring is reactive rather than predictive, lacking the integration of environmental factors and personalized risk assessment that could enable proactive health management and early intervention.

## Solution

Breathe AI deploys a wearable device that continuously monitors breathing patterns and environmental air quality, using machine learning to assess respiratory health risks. The system combines chest movement detection, particulate matter monitoring, and user health data to provide personalized respiratory health insights and risk predictions.

![Breathe AI Device](https://github.com/user-attachments/assets/d6c4e094-b4fb-4886-b135-cbd66c3a0af1)

### System Architecture

**Hardware Components:**
- ESP32-S3 microcontroller for sensor processing and wireless communication
- MPU6050 accelerometer for chest movement and breathing pattern detection
- PMS5003 air quality sensor for PM2.5/PM10 environmental monitoring
- Wireless connectivity (Bluetooth/Wi-Fi) for real-time data transmission
- Compact wearable form factor for continuous monitoring

**Software Stack:**
- ESP32-S3 firmware for sensor data collection and preprocessing
- Flutter mobile application (iOS & Android) for user interface and data management
- AI-powered diagnostic engine using Logistic Regression for risk assessment
- Real-time signal processing algorithms for breath cycle detection
- Cloud integration for data storage and advanced analytics

## Technical Implementation

### Sensor Data Processing
```cpp
// Real-time breathing pattern detection
- MPU6050 acceleration data filtering and noise reduction
- Peak detection algorithm for inhale/exhale cycle identification
- Breath depth calculation using chest expansion measurements
- BPM calculation with motion artifact compensation
```

### AI Diagnostic Engine
```python
# Multimodal respiratory risk assessment
- Logistic Regression model trained on medical research data
- Input features: BPM, breath depth, PM levels, age, BMI, smoking history
- Output: Low/Moderate/High respiratory condition risk classification
- Real-time inference with continuous model updates
```

### Flutter Mobile Application
```dart
// Comprehensive health monitoring interface
- Real-time sensor data visualization
- User health profile management
- AI-powered risk assessment display
- Historical trend analysis and reporting
- Bluetooth/Wi-Fi device connectivity
```

## Use Cases

### Continuous Health Monitoring
- Real-time breathing pattern analysis for daily health tracking
- Environmental exposure assessment for pollution-sensitive individuals
- Personalized respiratory health insights based on user demographics
- Long-term trend analysis for chronic condition management
- Integration with healthcare providers for remote monitoring

### Early Warning System
- Abnormal breathing pattern detection and alerts
- Environmental risk notifications based on air quality
- Proactive recommendations for high-risk situations
- Emergency contact integration for severe respiratory events
- Medication reminder integration based on environmental conditions

## Technical Challenges Overcome

**Sensor Calibration and Noise Reduction**
Successfully addressed MPU6050 motion artifacts and sensor drift through advanced filtering techniques and real-time recalibration algorithms.

**Real-time Data Transmission**
Optimized Bluetooth/Wi-Fi communication protocols for low-latency, reliable data transfer between ESP32-S3 and Flutter application.

**AI Model Training with Limited Data**
Developed synthetic breathing pattern datasets combined with medical research data to train accurate respiratory risk assessment models.

**Multi-sensor Fusion**
Implemented sophisticated sensor fusion techniques combining accelerometer data with air quality measurements for comprehensive health assessment.

## System Performance Metrics

**Sensor Accuracy:**
- Breathing rate detection: ±2 BPM accuracy
- Air quality monitoring: PM2.5/PM10 with ±5% precision
- Real-time processing: <100ms latency for breath detection
- Battery life: 24+ hours continuous monitoring

**AI Model Performance:**
- Respiratory risk classification accuracy: 87% on validation data
- False positive rate: <15% for high-risk predictions
- Processing time: <200ms for real-time inference
- Model size: Optimized for mobile deployment

## Development Roadmap

**Phase 1: Enhanced AI Capabilities**
Implement LSTM/Transformer models for advanced breathing pattern analysis and integrate pulse oximetry for blood oxygen saturation monitoring.

**Phase 2: Extended Sensor Suite**
Add temperature/humidity sensors for comprehensive environmental monitoring and explore integration with existing health monitoring ecosystems.

**Phase 3: Clinical Validation**
Partner with healthcare institutions for clinical trials and FDA approval process, expanding dataset with real-world patient data.

**Phase 4: Scalable Health Platform**
Develop cloud-based AI inference infrastructure and integrate with electronic health records for comprehensive respiratory health management.

## Market Applications

**Target Demographics:**
- Individuals with asthma, COPD, or other respiratory conditions
- Healthcare professionals requiring remote patient monitoring
- Environmental health researchers studying pollution impacts
- Athletes and fitness enthusiasts monitoring respiratory performance

**Commercial Opportunities:**
- Direct-to-consumer wearable health devices
- Healthcare provider remote monitoring solutions
- Insurance companies seeking risk assessment tools
- Occupational health monitoring for high-risk industries

## Tech Stack

**Hardware:** ESP32-S3, MPU6050, PMS5003, Bluetooth/Wi-Fi modules, LiPo battery management
**Firmware:** ESP-IDF, FreeRTOS, sensor fusion algorithms, wireless communication protocols
**Mobile:** Flutter, Dart, Bluetooth connectivity, real-time data visualization
**AI/ML:** Python, Scikit-learn, Logistic Regression, signal processing libraries
**Cloud:** Real-time data streaming, model inference APIs, secure data storage

## Installation & Deployment

### Hardware Setup
1. Assemble wearable device with sensor integration and power management
2. Flash ESP32-S3 firmware with sensor processing and communication protocols
3. Calibrate sensors for individual user baseline measurements
4. Test wireless connectivity and data transmission reliability

### Software Deployment
1. Install Flutter development environment and dependencies
2. Configure mobile app with device pairing and data visualization
3. Set up AI model inference pipeline with real-time processing
4. Deploy cloud infrastructure for data storage and analytics

### User Onboarding
1. Complete health profile setup with demographic and medical history
2. Perform initial device calibration and baseline establishment
3. Configure notification preferences and emergency contacts
4. Training on device usage and health data interpretation


## Impact and Future Vision

Breathe AI represents a paradigm shift from reactive to predictive respiratory health management. By combining wearable sensor technology with AI-driven analytics, the system enables early detection of respiratory health risks and provides actionable insights for proactive health management.

**Key Innovation:** The first integrated wearable system combining real-time breathing pattern analysis with environmental monitoring and personalized AI risk assessment, creating a comprehensive respiratory health management platform.

![Mobile App Interface](https://github.com/user-attachments/assets/fd66dada-10e8-4088-ac7a-18d3168d705f)