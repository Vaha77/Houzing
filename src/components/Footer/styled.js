import styled from "styled-components";
import { ReactComponent as lacatsya } from "../../asset/icons/lacatsa.svg";
import { ReactComponent as tel } from "../../asset/icons/tel.svg";
import { ReactComponent as email } from "../../asset/icons/email.svg";
import { ReactComponent as facebook } from "../../asset/icons/sns1.svg";
import { ReactComponent as twit } from "../../asset/icons/sns2.svg";
import { ReactComponent as instagram } from "../../asset/icons/sns3.svg";
import { ReactComponent as linkdin } from "../../asset/icons/sns4.svg";
import { ReactComponent as logo } from "../../asset/icons/Logo.svg";
import { BackTop } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  width: 100%;
  padding-top: 48px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0 130px;
  width: 100%;
  /* width: 1440px; */

  max-width: var(--width);
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
  width: 100%;
  display: flex;
  color: #ffffff;
  padding: 26px 130px 16px 0;
`;
Icon.Logo = styled(logo)`
  margin-right: 12px;
`;

const ContLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 130px;
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
const Top = styled(BackTop)`
  width: 45px;
  height: 45px;
  background: #0061df;
  border-radius: 3px;
  position: sticky;
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Top.Text = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;
export {
  Top,
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
