import React from "react";
import {
  DiFirebase,
  DiCode,
  DiReact,
  DiCodepen,
  DiDatabase,
  DiJava,
  DiNodejs,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development and also coded
      in several Programming languages
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, TypeScript, React.js, Angular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Spring, Spring Boot, Microservices ,Node.js, Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, SQLite, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, C++ and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
    <br />
  </Section>
);

export default Technologies;
