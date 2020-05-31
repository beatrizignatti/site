import React, { useState } from "react";
import styled from "styled-components";
import media from "utils/media-queries";
import { color, fontSize } from "styles/theme";

import Icon from "components/icons";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${(props) => (props.article ? "64px" : "")};
  `}
  ${media.sm`
    display: ${(props) => (props.article ? "flex" : "block")};
  `};
  z-index: 10;
  height: ${(props) => (props.article ? "74px" : "")};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`;

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? "24px 0 24px 24px" : "24px 0 0 0")};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`;

const NameLink = styled.a`
  text-decoration: none;
`;

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.8px;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`;

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`;

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`;

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? "15px 12px 0 8px" : "4px 0 0 0")};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`;

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`;

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`;

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`;

const TooltipText = styled.div``;

const Header = (props) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const showTooltip = (tooltipText) => {
    setTooltipIsVisible(true);
    setTooltipText(tooltipText);
  };

  const hideTooltip = () => {
    setTooltipIsVisible(false);
  };

  return (
    <Div article={props.article}>
      <LogoWrapper article={props.article}>
        {props.article && (
          <NameLink href="/">
            <NameArticle article={props.article}>Beatriz Ignatti</NameArticle>
          </NameLink>
        )}
        {!props.article && <Name article={props.article}>Beatriz Ignatti</Name>}
        {!props.article && <Role>UI / UX Designer</Role>}
      </LogoWrapper>
      <div>
        <SocialLinks article={props.article}>
          <SocialLink
            href={`mailto:beatrizignatti@gmail.com`}
            onMouseOver={() => showTooltip("Mail")}
            onFocus={() => showTooltip("Mail")}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Send an email to Beatriz"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m22.3592881 5.82427054v.59619016c0 .24378184-.1417446.46531584-.3630886.56747461l-8.9485541 4.13010189c-.6647377.306802-1.4305531.306802-2.0952908 0l-8.94855408-4.13010189c-.22134402-.10215877-.36308864-.32369277-.36308864-.56747461v-.59619016c0-.55012277.44596262-.99608539.9960854-.99608539h18.72640542c.5501228 0 .9960854.44596262.9960854.99608539zm-1.25 13.34754436h-18.21857622c-.69035594 0-1.25-.5596441-1.25-1.25v-8.52329148c0-.20710678.16789322-.375.375-.375.05424403 0 .10784237.01176807.15709707.03449228l8.78345405 4.0523453c.6647826.3067049 1.4305981.306593 2.095291-.0003062l8.7755375-4.05180448c.1880319-.08681729.4108411-.00476666.4976584.18326519.0227541.04928162.0345382.1029156.0345382.1571966v8.52310279c0 .6903559-.559644 1.25-1.25 1.25z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://medium.com/@biaignatti"
            target="blank"
            onMouseOver={() => showTooltip("Medium")}
            onFocus={() => showTooltip("Medium")}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Gabriel's Medium profile"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/beatriz-ignatti-kopplin-02a8a4161/"
            target="blank"
            onMouseOver={() => showTooltip("Linkedin")}
            onFocus={() => showTooltip("Linkedin")}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Beatriz's linkedin profile"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
        </SocialLinks>
        {!props.article && (
          <Tooltip visible={tooltipIsVisible} article={props.article}>
            <TooltipText>{tooltipText}</TooltipText>
            <TooltipIcon>
              <Icon glyph="arrow" size={24} />
            </TooltipIcon>
          </Tooltip>
        )}
      </div>
    </Div>
  );
};

export default Header;
