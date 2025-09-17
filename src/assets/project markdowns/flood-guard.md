# FloodGuard: Turning Floodwater Into a Lifeline

A solar-powered mesh network system that transforms flood monitoring into emergency communication infrastructure.

Winner of Best Community Impact at the Vibe Code Climate Hackathon at The Hub Miami.
Developed by Leon Kipkoech, Jude Surin and Genesis Guardado as part of a comprehensive IoT flood monitoring solution combining ESP32 sensors, LoRa mesh networking, and real-time web visualization.

![FloodGuard System Architecture](https://github.com/user-attachments/assets/e9c44157-31e3-46b9-9ecd-e699d48f1f21)

## Description

FloodGuard is a dual-purpose IoT system that addresses the accelerating flood crisis in coastal cities through innovative mesh networking technology. The system operates in two modes: everyday flood monitoring with Google Maps integration for route optimization, and emergency communication when traditional infrastructure fails.

## Problem Statement

Flooding in Miami Beach has increased 400% since 2006, with sea level rise accelerating to 9mm per year. Traditional flood management systems fail during the most critical moments when emergency communication is needed most. Current solutions either monitor floods OR provide emergency communication - but none do both effectively at community scale.

## Solution

FloodGuard deploys a network of solar-powered sensor nodes that create a resilient mesh communication system. Each node continuously monitors water levels while maintaining mesh connectivity for emergency scenarios. The system provides real-time flood data integration with mapping services during normal conditions and transforms into a community-wide emergency communication network when cellular infrastructure fails.

![FloodGuard Network Topology](https://github.com/user-attachments/assets/d16f3937-13f3-4ab9-bf7a-2702e30cc15b)


### System Architecture

**Hardware Components:**
- ESP32 microcontroller with dual-mode connectivity (WiFi + LoRa)
- HRS04 ultrasonic water level sensor
- DHT22 temperature/humidity sensor  
- NEO-6M GPS module for location referencing
- SX1276/SX1262 LoRa transceiver for mesh networking
- 10W solar panel with LiFePO4 battery backup
- IP67 waterproof enclosure

**Software Stack:**
- ESP32 firmware for sensor data collection and mesh routing
- FastAPI backend server for data aggregation and API services
- React frontend with Google Maps integration for visualization
- Disruption-tolerant networking protocols for emergency messaging

## Use Cases

### Everyday Mode: Smart Flood Monitoring
- Real-time water level monitoring across the city
- Automatic integration with Google/Apple Maps for route optimization
- Insurance risk assessment data collection
- City planning and infrastructure analysis
- Community flood alerts and notifications

### Emergency Mode: Communication Lifeline
- SOS message routing when cellular towers fail
- Disaster coordination between emergency services
- Community resilience messaging during evacuations
- Family reunification assistance
- Critical resource coordination

## Technical Implementation

### ESP32 Sensor Node
```cpp
// Multi-sensor data collection with mesh networking
- Ultrasonic flood detection with 2cm accuracy
- Environmental monitoring (temperature/humidity)
- GPS positioning for network geolocation
- LoRa mesh communication with 1-5km range
- Solar power management for 24/7 operation
```

### FastAPI Backend
```python
# Comprehensive sensor data management
- Real-time data ingestion from multiple nodes
- Statistical analysis and trend detection
- RESTful API with comprehensive documentation
- Persistent storage with automatic backups
- CORS-enabled for frontend integration
```

### React Dashboard
```javascript
// Real-time flood visualization and management
- Google Maps integration with live sensor overlays
- Severity-based color coding (safe/warning/danger)
- Route planning with flood avoidance
- Community report integration
- Emergency alert management
```

## Network Economics

**Deployment Cost Analysis:**
- Cost per node: $325 (hardware + installation)
- 72 nodes for Miami Beach coverage: $23,400
- Annual maintenance: $2,340 (10% of deployment cost)

**Economic Impact:**
- Miami-Dade annual flood damage: $500M+
- Avoided damage through early warning: $230,000+ annually
- Insurance premium reductions: Additional savings
- **ROI: Payback in under 12 months**

## Differentiation Matrix

| Feature | FloodNet | Meshtastic | FloodGuard |
|---------|----------|------------|------------|
| Flood Sensing | ✓ | ✗ | ✓ |
| Mesh Communication | ✗ | ✓ | ✓ |
| Emergency SOS | ✗ | ✓ | ✓ |
| Community Scale | ✓ | Personal | ✓ |
| Solar Powered | ✗ | Optional | ✓ |
| Maps Integration | Limited | ✗ | ✓ |

## Technical Challenges Overcome

**Sensor Integration Complexity**
Successfully integrated multiple sensor types (ultrasonic, environmental, GPS) with robust error handling and fallback mechanisms for sensor failures.

**Mesh Network Reliability**
Implemented disruption-tolerant networking protocols that ensure message delivery even when network topology changes due to node failures or environmental conditions.

**Power Management**
Developed solar power management system optimized for continuous 24/7 operation in coastal environments with varying weather conditions.

**Real-time Data Processing**
Created efficient data pipelines that handle high-frequency sensor data while maintaining responsive web interfaces and API performance.

## Future Development Roadmap

**Phase 1: Enhanced Mesh Protocols**
Implement advanced routing algorithms and message prioritization for emergency scenarios. Add support for larger mesh networks with improved redundancy.

**Phase 2: AI-Powered Flood Prediction**  
Integrate machine learning models for flood prediction based on historical data, weather patterns, and real-time sensor inputs.

**Phase 3: Multi-City Deployment**
Expand to Norfolk, New Orleans, Charleston, and other coastal cities. Develop standardized deployment protocols and municipal partnership frameworks.

**Phase 4: Climate Resilience Platform**
Evolve into comprehensive climate adaptation platform supporting multiple environmental monitoring use cases beyond flooding.

## Global Market Opportunity

**Target Demographics:**
- 622 million people live in at-risk coastal zones
- $15 trillion in coastal assets threatened by 2100
- Addressable market across 100+ vulnerable coastal cities worldwide

**Partnership Opportunities:**
- Municipal governments seeking climate resilience solutions
- Insurance companies requiring accurate flood risk data
- Emergency services needing communication redundancy
- Climate adaptation funding organizations

## Tech Stack

**Hardware:** ESP32, LoRa SX1276/SX1262, HRS04, DHT22, NEO-6M GPS, Solar panels, LiFePO4 batteries
**Firmware:** ESP-IDF, FreeRTOS, LoRaWAN protocols
**Backend:** FastAPI, Python, Uvicorn, Pydantic, JSON storage
**Frontend:** React, TypeScript, Google Maps API, Tailwind CSS
**Infrastructure:** CORS middleware, RESTful APIs, real-time data streaming

## Installation & Deployment

### Hardware Setup
1. Assemble sensor nodes with waterproof enclosures
2. Configure solar panel and battery connections
3. Flash ESP32 firmware with mesh networking protocols
4. Deploy nodes at optimal locations for flood monitoring and mesh coverage

### Software Deployment  
1. Clone repository and install dependencies
2. Configure FastAPI server with appropriate endpoints
3. Deploy React dashboard with Google Maps integration
4. Establish mesh network connectivity between nodes

### Network Configuration
1. Set up LoRa mesh parameters and routing protocols
2. Configure WiFi failover and internet gateway nodes
3. Test emergency communication pathways
4. Validate flood detection thresholds and alert mechanisms

## Impact & Recognition

FloodGuard represents a paradigm shift from reactive flood management to proactive community resilience infrastructure. By weaponizing floodwater as the foundation for emergency communication, the system transforms a community's greatest vulnerability into its strongest asset during crisis situations.

**Key Innovation:** The first hybrid system combining environmental monitoring with mesh communication, creating dual-use infrastructure that provides value during both normal operations and emergency scenarios.