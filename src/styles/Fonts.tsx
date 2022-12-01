import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin-ext */
      @font-face {
        font-family: 'Ginerin';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/Ginerin-Regular.ttf) format('ttf');
      }

      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-display: swap;
        src: url(./fonts/Gilroy-Medium.ttf) format('ttf');  
      }

      @font-face {
        font-family: 'Gilroy-SemiBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/Gilroy-Light.ttf) format('ttf');  
      }

      @font-face {
        font-family: 'Gilroy-SemiBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/Gilroy-SemiBold.ttf) format('ttf');  
      }

      @font-face {
        font-family: 'Gilroy-ExtraBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/Gilroy-ExtraBold.ttf) format('ttf');  
      }
    `}
  />
)

export default Fonts