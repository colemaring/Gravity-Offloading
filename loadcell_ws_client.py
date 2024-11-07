# pip install hx711-rpi-py

import asyncio
import websockets
from HX711 import *

async def send_data():
    uri = "ws://localhost:8080"
    while True:
        try:
            async with websockets.connect(uri) as websocket:
                with SimpleHX711(6, 5, -370, -367471) as hx:
                    hx.setUnit(Mass.Unit.OZ)
                    hx.zero()

                    while True:
                        weight = hx.weight(5)
                        await websocket.send(str(weight))
                        await asyncio.sleep(1)
        except websockets.exceptions.ConnectionClosedError:
            print("Server not responding. Retrying...")
            await asyncio.sleep(2)
        except Exception as e:
            print(f"Error: {e}")
            await asyncio.sleep(2)

asyncio.get_event_loop().run_until_complete(send_data())
