import React, { Fragment } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import media from "utils/media-queries";

import { color, fontSize } from "styles/theme";

import TwoColumns from "components/twoColumns";
import SectionHeading from "components/sectionHeading";

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`;

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Sobre</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Oi, Eu sou a Bia! Sou{" "}
            <i>
              <u>UX e UI Designer</u>
            </i>
            , amante dos animais. Morando atualmente em São Paulo.
          </Big>
          <p>
            Sinto que me encontrei no design, em criar soluções que facilitam a
            vida das pessoas, de ouvir o que elas tem a dizer e de entender o
            real problema.
          </p>

          <p>
            Além disso, criar interfaces que façam sentido, tanto para criação
            quanto para os usuários. <i>Tento, erro, aprendo & refaço</i>.
          </p>

          <p>
            Fora do trabalho eu amo estar com a minha família, minhas cachorras
            e viajar. Gosto de ler, filmes, jogos de aventura, quebra-cabeças,
            passear e lojas de construção & decoração.
          </p>

          <p style={{ marginBottom: 0 }}>
            <i>Galatas 2:20.</i>
          </p>
        </Fragment>
      }
    />
  );
};

export default About;
