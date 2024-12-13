12/13/24 <br>

remove manual override controller add configuration page for manual control, things like speed, <br>

sensitivity, smoothing, thresholds Emergency stop to NavBar break sensor data into smaller components<br>

write documentation/instructions manual and automatic mode toggle on navbar<br>


NOW
<br>

pass websockets context to other component that need the data<br>


python script doesnt need to exist bc esp32 can send data over websockets wirelessly to ipv4 of pc:3000 and do the average calculation and such on-board<br>


atleast for manual operation python script isnt needed<br>

focus:<br>


on tuesday, creating meaningful test to see if metal interfence will be an issue<br>

modify client.ino to replace python script and send directly wireless over WS<br>

compute vector and graph on website<br>
