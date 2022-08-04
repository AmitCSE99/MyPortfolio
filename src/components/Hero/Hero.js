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
            Associate Software Engineer at Nagarro, Gurugram
          </SectionText>
          <SectionText>
            BTech Graduate in Computer Science and Technology from Techno
            International Newtown
          </SectionText>
          <SectionText>Software Developer</SectionText>
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
              href="/pdfs/Amitendu_Mallick_CV.pdf"
              target="blank"
            >
              View My Resume
            </a>
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
