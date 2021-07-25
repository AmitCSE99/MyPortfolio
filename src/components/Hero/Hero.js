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
            Hi, This is <br />
            Amitendu Mallick
          </SectionTitle>
          <SectionText>
            3rd Year BTech Student from Techno International Newtown, Kolkata.
          </SectionText>
          <SectionText>Intern in Outshade Digital Media</SectionText>
          <SectionText>Full Stack Developer</SectionText>
          <Button>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                textAlign: "center",
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
