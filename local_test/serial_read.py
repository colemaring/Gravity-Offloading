import serial
import time

ser = serial.Serial('COM7', 115200)

# allow serial connection to init
time.sleep(2)

def read_serial_data():
    while True:
        # Read a line of data from the serial port
        line = ser.readline().decode('utf-8').strip()  # Decode bytes to string, strip newline
        if line:
            print(line)

if __name__ == "__main__":
    try:
        read_serial_data()
    except KeyboardInterrupt:
        print("Program interrupted.")
    finally:
        ser.close()  # Close the serial connection when done
