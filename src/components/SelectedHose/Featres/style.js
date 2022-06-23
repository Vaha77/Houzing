import styled from "styled-components";
import { ReactComponent as airconditioner } from "../../.../../../asset/icons/divan.svg";
import { ReactComponent as barbeque } from "../../../asset/icons/divan.svg";
import { ReactComponent as dryer } from "../../../asset/icons/divan.svg";
import { ReactComponent as gym } from "../../../asset/icons/divan.svg";
import { ReactComponent as grass } from "../../../asset/icons/divan.svg";
import { ReactComponent as laundry } from "../../../asset/icons/divan.svg";
import { ReactComponent as microwave } from "../../../asset/icons/divan.svg";
import { ReactComponent as outdoor } from "../../.../../../asset/icons/divan.svg";
import { ReactComponent as refrigerator } from "../../../asset/icons/divan.svg";
import { ReactComponent as sauna } from "../../../asset/icons/divan.svg";
import { ReactComponent as swimmer } from "../../../asset/icons/divan.svg";
import { ReactComponent as coaxial } from "../../../asset/icons/divan.svg";
import { ReactComponent as liquid } from "../../.../../../asset/icons/divan.svg";
import { ReactComponent as wifi } from "../../../asset/icons/divan.svg";
import { ReactComponent as chair } from "../../../asset/icons/divan.svg";
import { ReactComponent as blinds } from "../../../asset/icons/divan.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

Wrapper.Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`;

Wrapper.Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-left: 10px;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-right: 8px;
`;

const Icons = styled.div``;

Icons.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 50%;
`;

Icons.Airconditioner = styled(airconditioner)``;
Icons.Barbecue = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(gym)``;
Icons.Grass = styled(grass)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.Outdoor = styled(outdoor)``;
Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.Swimmer = styled(swimmer)``;
Icons.Coaxial = styled(coaxial)``;
Icons.Liquid = styled(liquid)``;
Icons.Wifi = styled(wifi)``;
Icons.Chair = styled(chair)``;
Icons.Blinds = styled(blinds)``;

export { Container, Title, Wrapper, Subtitle, Desc, Icons };
