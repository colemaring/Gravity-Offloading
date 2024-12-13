remove manual override controller
add configuration page for manual control, things like speed, sensitivity, smoothing, thresholds
Emergency stop to NavBar
break sensor data into smaller components
write documentation/instructions
manual and automatic mode toggle on navbar

NOW

pass websockets context to other component that need the data

python script doesnt need to exist bc esp32 can send data over websockets wirelessly to
ipv4 of pc:3000 and do the average calculation and such on-board

- atleast for manual operation python script isnt needed

focus:

1. on tuesday, creating meaningful test to see if metal interfence will be an issue
2. modify client.ino to replace python script and send directly wireless over WS
3. compute vector and graph on website
