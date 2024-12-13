#include "MPU9250.h"
#include <HX711.h>

MPU9250 mpu;
HX711 scale;
long rawValue;

void setup() {
    Serial.begin(115200);
    Wire.begin(18, 19); // sda, scl
    scale.begin(17, 5); // data, clock
    delay(2000);
    mpu.setup(0x68);
}

void loop() {
    if (mpu.update()) {
        Serial.print(mpu.getYaw()); Serial.print(", ");
        Serial.print(mpu.getPitch()); Serial.print(", ");
        Serial.print(mpu.getRoll()); Serial.print(", ");
        Serial.println(rawValue);
    }
    if (scale.is_ready())
    {
      rawValue = scale.read();
    }
}
