import React from "react";
import { useRouter } from "next/router";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const router = useRouter();
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            {/* Hi, This is <br /> */}
            AMITENDU MALLICK
          </SectionTitle>
          <SectionText>
            4th Year BTech Student from Techno International Newtown, Kolkata.
          </SectionText>
          <SectionText>Interned in Outshade Digital Media</SectionText>
          <SectionText>Currently Trainee at Nagarro, Gurugram</SectionText>
          <SectionText>Full Stack Developer</SectionText>
          <Button>
            <a
              style={{
                textDecoration: "none",
                width: "100%",
                height: "100%",
                color: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="/pdfs/CV_AMITENDU_MALLICK.pdf"
              download
            >
              My Resume
            </a>
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
