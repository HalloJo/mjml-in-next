import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
  render,
} from 'mjml-react';

export const mjml = (
  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText fontFamily="impact" align="center">
            On your left
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn>
          <MjmlText fontFamily="impact" align="center">
            On your right
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText fontFamily="impact">
            <p style={{ textAlign: 'center', color: '#9078' }}>
              A D V E N T U R E
            </p>
            <p>Views of Mt Fuji</p>
            <p>
              Escape the city and spend time in nature enjoying views of the
              iconic Mt Fuji.
            </p>
          </MjmlText>
          <MjmlText fontFamily="impact">
            <p style={{ textAlign: 'center' }}>A D V E N T U R E</p>
            <p>Views of Mt Fuji</p>
            <p>
              Escape the city and spend time in nature enjoying views of the
              iconic Mt Fuji.
            </p>
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn>
          <MjmlImage src="https://xmh8v.mjt.lu/tplimg/xmh8v/b/0x23j/gs7nl.jpeg" />
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

export const mjmlHtml = render(mjml).html;
