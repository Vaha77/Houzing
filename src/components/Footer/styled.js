import styled from "styled-components";
import { ReactComponent as lacatsya } from "../../asset/icons/lacatsa.svg";
import { ReactComponent as tel } from "../../asset/icons/tel.svg";
import { ReactComponent as email } from "../../asset/icons/email.svg";
import { ReactComponent as facebook } from "../../asset/icons/sns1.svg";
import { ReactComponent as twit } from "../../asset/icons/sns2.svg";
import { ReactComponent as instagram } from "../../asset/icons/sns3.svg";
import { ReactComponent as linkdin } from "../../asset/icons/sns4.svg";
import { ReactComponent as logo } from "../../asset/icons/Logo.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding-top: 48px;
`;
const FootCont = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 32px;
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
  padding: 26px 0 16px 0;
`;
Icon.Logo = styled(logo)`
  margin-right: 12px;
`;

const ContLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const FootTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: #ffffff;
  margin-right: auto;
`;
export {
  FootTitle,
  ContLogo,
  Container,
  Wrapper,
  FootCont,
  Title,
  SubTitle,
  Icon,
  FootConts,
  Footers,
};
