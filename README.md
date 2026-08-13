# Sign Language Translation Glove

A wearable glove prototype designed to recognize hand gestures using flex sensors and convert the detected gestures into **text and real-time voice output**, helping make communication easier and more accessible.

## About the Project

This project uses five flex sensors attached to the fingers of a glove to detect different finger bending patterns. An ESP32 reads the sensor values and processes the patterns to identify predefined hand gestures.

The recognized gesture is converted into **text**, which is transmitted wirelessly using an HC-05 Bluetooth module. The received text is then converted into **Kannada speech output using a text-to-speech converter**, enabling real-time voice-based communication.

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
- Text-to-Speech Conversion

## How It Works

1. The five flex sensors detect the bending of each finger.
2. The ESP32 reads the sensor values.
3. Different combinations of sensor values represent different hand gestures.
4. The ESP32 identifies the predefined gesture.
5. The recognized gesture is converted into a text message.
6. The text message is transmitted wirelessly through the HC-05 Bluetooth module.
7. The transmitted message is displayed on a mobile device using a Serial Bluetooth Terminal.
8. The text message is converted into **Kannada speech output using a text-to-speech converter**.
9. The voice output enables **real-time communication**.

## Key Features

- Five-finger gesture detection
- Real-time flex sensor readings
- ESP32-based processing
- Gesture-to-text conversion
- Text-to-speech voice output
- Kannada speech output
- Wireless Bluetooth communication
- Wearable glove-based design
- Real-time voice communication

## Project Goal

The goal is to develop a simple and practical wearable system that recognizes hand gestures and converts them into **text and voice output**, helping reduce communication barriers and enabling real-time communication.

## Future Improvements

- Increase the number of recognizable gestures
- Improve gesture recognition accuracy
- Add machine learning for more flexible gesture classification
- Support more languages for speech output
- Develop a dedicated mobile application
- Improve the glove's comfort and portability

## Project Status

Working prototype






## Project Images

### Final Glove

![Sign Language Translation Glove](./Sign%20Language%20Translation%20Gloves/glove.jpeg)

### Circuit Connection

![Circuit Connection](./Sign%20Language%20Translation%20Gloves/circuit%20connection.png)








