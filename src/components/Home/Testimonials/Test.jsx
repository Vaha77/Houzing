import React from "react";
import avatar from "../../../asset/imgs/AVATAR.png";
import { Card, CardCont, Cont, Img, Second, TitleBox } from "./style";

const Test = () => {
  return (
    <div>
      <CardCont>
        <Cont>
          <Card>
            <div>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </div>
          </Card>
          <Second>
            <Img src={avatar} alt="avatar" />
            <TitleBox>
              Marvin McKinney
              <div className="description">Designer</div>
            </TitleBox>
          </Second>
        </Cont>
      </CardCont>
    </div>
  );
};

export default Test;
