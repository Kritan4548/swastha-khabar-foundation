import {
  Html,
  Head,
  Tailwind,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";

const OrderReceiptTemplate = ({ bodyResponse }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://swasthya-khabar-foundation.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75`}
                width="220"
                height="60"
                alt="Estore"
                className="my-0 mx-auto"
              />
            </Section>

            <Heading className="text-black text-[18px] font-normal text-center p-0  mx-0 my-5">
              <strong>
                For Registering to an Event at Swasthya Khabar Foundation
              </strong>
            </Heading>

            <Container>
              <Text className="capitalize my-1 text-black">
                <strong>Name :</strong> {bodyResponse?.fullName}
              </Text>
              <Text className=" my-1 text-black">
                <strong className="capitalize">Email :</strong>{" "}
                {bodyResponse?.email}
              </Text>
              {bodyResponse?.profession && (
                <Text className="capitalize my-1 text-black">
                  <strong>Profession :</strong> {bodyResponse?.profession}
                </Text>
              )}
              <Text className="capitalize my-1 text-black">
                <strong>Phone Number :</strong> {bodyResponse?.phoneNumber}
              </Text>

              {bodyResponse?.message && (
                <Text className="capitalize my-1 text-black">
                  <strong>Message :</strong> {bodyResponse?.message}
                </Text>
              )}
            </Container>

            <Hr className="border border-solid border-[#eaeaea]  my-[5px] mx-0 w-full" />
            <Container className="my-0">
              <Row className="my-0">
                <Column className="my-0">
                  <Link
                    className="my-0"
                    href="https://www.facebook.com/SwasthyaKhabarFoundation?mibextid=LQQJ4d"
                  >
                    <Text className="text-blue-600 font-bold my-0">
                      Facebook
                    </Text>
                  </Link>
                </Column>
                <Column style={{ border: "", width: "20%" }}></Column>

                <Column align="right" style={{ border: "", width: "60%" }}>
                  <Text className="text-sm text-gray-700 my-0">
                    © 2024 Swasthya Khabar Foundation
                  </Text>
                </Column>
              </Row>
            </Container>
            <Hr className="border border-solid border-[#eaeaea]  my-[5px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              You are receiving this email because you signed up on our website
              for an Event.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OrderReceiptTemplate;
