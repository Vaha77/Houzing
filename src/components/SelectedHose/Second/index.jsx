import React from "react";
import Features from "../Featres";
import Map from "../Map";
import Modal from "../Modal";
import PropertyDetails from "../Details";
import Reviews from "../Reviews";
import Schedule from "../Schedule";
import WriteAReview from "../WriteAReview";
import { Container, Left, Right, Wrapper } from "./style";

export const Second = ({ info }) => {
  //   const [state, setState] = useState();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Left.Wrapper>
            <Left.Title>{info?.country || "Malumot Kiritilmagan "}</Left.Title>
            <Left.Wrapper>
              <Left.Icons>
                <Left.Icon>
                  <Left.Share />
                </Left.Icon>
                <Left.Text>Share</Left.Text>
              </Left.Icons>

              <Left.Icons>
                <Left.Icon>
                  <Left.Heart />
                </Left.Icon>
                <Left.Text>Save</Left.Text>
              </Left.Icons>
            </Left.Wrapper>
          </Left.Wrapper>
          <Left.Wrapper>
            <Left.Description>
              {info?.region || "Malumot Kiritilmagan"}
            </Left.Description>
            <Left.Wrapper>
              <Left.SubDescription>{info?.salePrice}/mo</Left.SubDescription>
              <Left.Title>{info?.price}/mo</Left.Title>
            </Left.Wrapper>
          </Left.Wrapper>
          <Left.Wrapper mt={25}>
            <Left.Wrapper>
              <Left.Icons>
                <Left.Icon>
                  <Left.Share />
                </Left.Icon>
                <Left.Text>{info?.beds || "23"} Beds</Left.Text>
              </Left.Icons>

              <Left.Icons>
                <Left.Icon>
                  <Left.Bath />
                </Left.Icon>
                <Left.Text>4 Baths</Left.Text>
              </Left.Icons>

              <Left.Icons>
                <Left.Icon>
                  <Left.Garage />
                </Left.Icon>
                <Left.Text>4 Garages</Left.Text>
              </Left.Icons>

              <Left.Icons>
                <Left.Icon>
                  <Left.Ruler />
                </Left.Icon>
                <Left.Text>4 Ruler</Left.Text>
              </Left.Icons>

              <Left.Icons>
                <Left.Icon>
                  <Left.Calendar />
                </Left.Icon>
                <Left.Text>4 Calendars</Left.Text>
              </Left.Icons>
            </Left.Wrapper>
            <Left.Text>Est. Mortgage</Left.Text>
          </Left.Wrapper>
          {/* Description */}
          <Left.Subtitle>Description</Left.Subtitle>
          <Left.Description>
            {info?.description || ` Malumot Kiritilmagan`}
          </Left.Description>
          <Left.Description>
            {info?.secondDisc || `Malumot Kiritilmagan`}
          </Left.Description>
          <Left.ShowMore>Show More</Left.ShowMore>
          {/* Documents */}
          <Left.Subtitle>Documents</Left.Subtitle>
          <Left.Wrapper mt={15} mb={50}>
            <Left.Wrapper>
              <Left.DownloadIcon />
              <Left.DownloadText>test_property.pdf</Left.DownloadText>
              <Left.Download>Download</Left.Download>
            </Left.Wrapper>
            <Left.Wrapper>
              <Left.DownloadIcon />
              <Left.DownloadText>test_property.pdf</Left.DownloadText>
              <Left.Download>Download</Left.Download>
            </Left.Wrapper>
            <Left.Wrapper>
              <Left.DownloadIcon />
              <Left.DownloadText>test_property.pdf</Left.DownloadText>
              <Left.Download>Download</Left.Download>
            </Left.Wrapper>
          </Left.Wrapper>
          <Left.Line />
          {/* Map */}
          <Map />
          <Left.Line />
          <PropertyDetails />
          <Features />
          <Left.Line />
          <Schedule />
          <Left.Line />
          <Reviews />
          <Left.Line />
          Write a Review
          <WriteAReview />
        </Left>
        <Right>
          <Modal />
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Second;
