import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "../App.css"; // Ensure you have this file for custom styles

const Command = () => {
  return (
    <div className="commandContainer">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Modbus Packet History</Card.Title>
          <Table className="mb-0" striped bordered hover>
            <thead>
              <tr>
                <th className="timestamp-column">Timestamp</th>
                <th>Address</th>
                <th>Function Code</th>
                <th>Data</th>
                <th>CRC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="timestamp-column">10:51:53</td>
                <td>0x01</td>
                <td>0x03</td>
                <td>0x1234</td>
                <td>0xABCD</td>
              </tr>
              <tr>
                <td className="timestamp-column">10:51:54</td>
                <td>0x01</td>
                <td>0x03</td>
                <td>0x1234</td>
                <td>0xABCD</td>
              </tr>
              <tr>
                <td className="timestamp-column">10:51:55</td>
                <td>0x01</td>
                <td>0x03</td>
                <td>0x1234</td>
                <td>0xABCD</td>
              </tr>
              <tr>
                <td className="timestamp-column">10:51:56</td>
                <td>0x01</td>
                <td>0x03</td>
                <td>0x1234</td>
                <td>0xABCD</td>
              </tr>
              <tr>
                <td className="timestamp-column">10:51:57</td>
                <td>0x01</td>
                <td>0x03</td>
                <td>0x1234</td>
                <td>0xABCD</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Command;
