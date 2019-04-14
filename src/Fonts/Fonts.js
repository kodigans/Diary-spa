import { createGlobalStyle } from 'styled-components';

import AvenirTtf from './Avenir-Light.ttf';
import AvenirWoff from './Avenir-Light.woff2';
import IconsTtf from './ms-icons-regular.ttf';
import IconsWoff from './ms-icons-regular.woff';

export const Fonts = createGlobalStyle`
@font-face {
    font-family: 'Avenir';
    src: url(${AvenirWoff}) format('woff2'),
         url(${AvenirTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
@font-face {
  font-family: 'IconsFonts';
  src: url(${IconsWoff}) format('woff'),
       url(${IconsTtf}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
`;

