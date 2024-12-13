#include "MPU9250.h"

MPU9250 mpu;

void setup() {
    Serial.begin(115200);
    Wire.begin(18, 19);
    delay(2000);

    mpu.setup(0x68);
}

void loop() {
    if (mpu.update()) {
        Serial.print(mpu.getYaw()); Serial.print(", ");
        Serial.print(mpu.getPitch()); Serial.print(", ");
        Serial.println(mpu.getRoll());
    }
}
