import styled from "styled-components";
import { ReactComponent as lacatsya } from "../../asset/icons/lacatsa.svg";
import { ReactComponent as tel } from "../../asset/icons/tel.svg";
import { ReactComponent as email } from "../../asset/icons/email.svg";
import { ReactComponent as facebook } from "../../asset/icons/sns1.svg";
import { ReactComponent as twit } from "../../asset/icons/sns2.svg";
import { ReactComponent as instagram } from "../../asset/icons/sns3.svg";
import { ReactComponent as linkdin } from "../../asset/icons/sns4.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
  width: 1440px;
`;
const FootCont = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  color: #ffffff;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
const SubTitle = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  width: 280px;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  display: flex;
  gap: 32px;
`;
Icon.Loc = styled(lacatsya)`
  margin-right: 22px;
  width: 30px;
  height: 30px;
`;
Icon.Tel = styled(tel)`
  margin-right: 22px;
`;
Icon.Email = styled(email)`
  margin-right: 22px;
`;
Icon.Facebook = styled(facebook)`
  cursor: pointer;
`;
Icon.Twit = styled(twit)`
  cursor: pointer;
`;
Icon.Ins = styled(instagram)`
  cursor: pointer;
`;
Icon.Link = styled(linkdin)`
  cursor: pointer;
`;

const Footers = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.15); ;
`;
const FootConts = styled.div`
  width: 1440px;
  display: flex;
  color: #ffffff;
`;
export {
  Container,
  Wrapper,
  FootCont,
  Title,
  SubTitle,
  Icon,
  FootConts,
  Footers,
};
