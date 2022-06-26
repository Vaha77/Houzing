/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  Left,
  ModalImage,
  Right,
  Wrapper,
} from "./style";

import { Modal } from "antd";
import img1 from "../../../asset/imgs/ca.png";

export const ImgModal = ({ info }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Left>
            <Left.img src={info || img1} />
          </Left>
          <Right>
            <Right.Img src={info || img1} />
            <Right.Img src={info || img1} />
            <Right.Img src={info || img1} />
            <Right.Count
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                  info || img1
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Right.Number onClick={showModal}>
                +{info?.attachments?.imgPath?.length}
              </Right.Number>
            </Right.Count>
          </Right>
        </ImageContainer>
        <Modal
          width={"1000px"}
          height
          title="Imgs"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ModalImage>
            <ModalImage.Img src={info || img1} />
            <ModalImage.Img src={info || img1} />
            <ModalImage.Img src={info || img1} />
            <ModalImage.Img src={info || img1} />
            <ModalImage.Img src={info || img1} />
          </ModalImage>
        </Modal>
      </Wrapper>
    </Container>
  );
};

export default ImgModal;
