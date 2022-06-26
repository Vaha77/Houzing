import React from "react";
import { Checkbox, Col, Row } from "antd";

const onChange = (checkedValues) => {};

const App = () => (
  <Checkbox.Group
    style={{
      marginTop: "44px",
      width: "100%",
    }}
    onChange={onChange}
  >
    <Row>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Air">Air conditioning</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Lawn">Lawn</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Dining">Dining Room</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="C">Waterfront</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Barbeque">Barbeque</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Microwave">Microwave</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Fireplace">Fireplace</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Parking">Parking</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Dryer">Dryer</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Outdoor Shower">Outdoor Shower</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Pets Allowed">Pets Allowed</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Doorman">Doorman</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Gym">Gym</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Refrigerator">Refrigerator</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Unit Washer/Dryer">Unit Washer/Dryer</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Central Heating">Central Heating</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Laundry">Laundry</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Stunning views">Stunning views</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Onsite Parking">Onsite Parking</Checkbox>
      </Col>
      <Col style={{ padding: " 0 0 24px 0" }} span={6}>
        <Checkbox value="Cleaning Service">Cleaning Service</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
);

export default App;
