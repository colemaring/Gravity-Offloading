import serial
import time
import asyncio
import websockets

ser = serial.Serial('COM7', 115200)

# allow serial connection to init
time.sleep(2)
print("Serial connection initialized")

async def send_data(websocket):
    averages = [[], [], [], []]
    count = 0

    while True:
        # Read a line of data from the serial port
        line = ser.readline().decode('utf-8').strip()  # Decode bytes to string, strip newline
        if line:
            try:
                # Split the line by commas and convert to float
                values = [float(value) for value in line.split(',')]
                for i in range(len(values)):
                    averages[i].append(values[i])
                count += 1

                if count >= 10:
                    overall_averages = [sum(avg) / len(avg) for avg in averages]
                    formatted_averages = [f"{avg:.1f}" for avg in overall_averages]
                    await websocket.send(','.join(formatted_averages))
                    print(f"Sent: {formatted_averages}")
                    averages = [[], [], [], []]
                    count = 0
            except ValueError:
                print(f"Invalid data: {line}")
        # needed to keep thread open? 
        await asyncio.sleep(0)

async def main():
    uri = "ws://localhost:3000"
    print(f"Connecting to WebSocket server at {uri}")  # Debug print
    async with websockets.connect(uri) as websocket:
        print("WebSocket connection established")  # Debug print
        await send_data(websocket)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Program interrupted.")
    finally:
        ser.close()  # Close the serial connection when done
        print("Serial connection closed")  # Debug print