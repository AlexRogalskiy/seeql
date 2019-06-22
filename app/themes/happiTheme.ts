const white = 'white';
const grey = '#E8ECF1';
const black = 'black';
const green = '#4DAF7C';

const happi = {
  panel: { baseColor: white, fontColor: black, headerColor: black },
  tabs: { baseColor: 'transparent', baseColorActive: 'transparent', fontColor: black },
  omniBox: {
    buttonColor: white,
    buttonColorActive: grey,
    fontColor: black,
    fontColorActive: black
  },
  main: {
    baseColor: 'transparent'
  },
  executeButton: {
    baseColor: green,
    border: green,
    fontColor: white
  },
  tables: {
    highlight: 'orange',
    row: 'lightblue',
    navButtonSelect: 'orange',
    navButtonBase: 'transparent',
    navButtonFontColor: 'white',
    navButtonHover: 'blue',
    resetButton: 'orange',
    infoButton: 'orange',
    pinnedButton: 'red',
    pinnedButtonFontColor: 'blue',
    pinnedHover: 'pink'
  },
  link: { signOut: 'purple' }
}

export default happi;