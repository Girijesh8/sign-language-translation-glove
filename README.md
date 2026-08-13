# Sign Language Translation Glove

A wearable glove prototype designed to recognize hand gestures using flex sensors and transmit the detected gesture data through Bluetooth.

## About the Project

This project uses five flex sensors attached to the fingers of a glove to detect different finger bending patterns. An ESP32 reads the sensor values and processes the patterns to identify predefined hand gestures.

The recognized gesture data is then transmitted wirelessly using an HC-05 Bluetooth module.

## Hardware Used

- ESP32
- 5 × Flex Sensors
- HC-05 Bluetooth Module
- Resistors
- Breadboard
- Jumper Wires
- Glove

## Technologies Used

- Arduino IDE
- C++
- ESP32
- Bluetooth Communication
- Sensor Data Processing

## How It Works

1. The five flex sensors detect the bending of each finger.
2. The ESP32 reads the sensor values.
3. Different combinations of sensor values represent different hand gestures.
4. The ESP32 identifies the predefined gesture.
5. The gesture data is transmitted through the HC-05 Bluetooth module.

## Key Features

- Five-finger gesture detection
- Real-time flex sensor readings
- ESP32-based processing
- Wireless Bluetooth communication
- Wearable glove-based design

## Project Goal

The goal is to explore a simple and practical approach to recognizing hand gestures using wearable sensors and wireless communication.

## Future Improvements

- Increase the number of recognizable gestures
- Improve gesture recognition accuracy
- Add machine learning for more flexible gesture classification
- Develop a better speech/text output system
- Improve the glove's comfort and portability

## Project Status

Working prototype — further improvements are in progress.






## Project Images

### Final Glove

![Sign Language Translation Glove](./Sign%20Language%20Translation%20Gloves/glove.jpeg)

### Circuit Connection

![Circuit Connection](./Sign%20Language%20Translation%20Gloves/circuit%20connection.png)








