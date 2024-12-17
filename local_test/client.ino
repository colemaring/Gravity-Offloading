#include <Wire.h>
#include "MPU9250.h"
#include <HX711.h>
#include <WebSocketsClient.h>
#include <WiFi.h>

MPU9250 mpu;
HX711 scale;
long rawValue;

const char* ssid = "";
const char* password = "";
const char* websocket_host = "192.168.1.26";
const uint16_t websocket_port = 3000;
const char* websocket_url = "/";

WebSocketsClient webSocket;

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
    switch(type) {
        case WStype_DISCONNECTED:
            Serial.println("WebSocket Disconnected");
            break;
        case WStype_CONNECTED:
            Serial.println("WebSocket Connected");
            break;
        case WStype_TEXT:
            Serial.printf("WebSocket message: %s\n", payload);
            break;
        case WStype_BIN:
            Serial.printf("WebSocket binary message: %u bytes\n", length);
            break;
    }
}

void setup() {
    Serial.begin(115200);
    Wire.begin(18, 19);
    scale.begin(17, 5); // data, clock
    delay(2000);
    mpu.setup(0x68);

    // Connect to WiFi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");

    webSocket.begin(websocket_host, websocket_port, websocket_url);
    webSocket.onEvent(webSocketEvent);
}

void loop() {
    webSocket.loop();

    if (mpu.update()) {
        float yaw = mpu.getYaw();
        float pitch = mpu.getPitch();
        float roll = mpu.getRoll();
        
        String message = String(yaw, 1) + "," + String(pitch, 1) + "," + String(roll, 1) + "," + String(rawValue);
        webSocket.sendTXT(message);
        Serial.println("Sent: " + message);
    }

    if (scale.is_ready()) {
            rawValue = scale.read();
        }

    delay(10);
}
