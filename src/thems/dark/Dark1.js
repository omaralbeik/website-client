import gh2 from '../../images/social-gh-2.svg';
import tw2 from '../../images/social-tw-2.svg';
import in2 from '../../images/social-in-2.svg';
import so2 from '../../images/social-so-2.svg';
import menu2 from '../../images/menu-2.svg';


// Dark Theme 1
const Dark1 = {
    id: 2,
    style: 'dark',
    colors: {
        background: '#202124',
        inner_background: '#282C2F',
        primary: '#FFFFFF',
        inner_primary: '#E2E2E2',
        selected: '#F7BC31',
        highlighted: '#FBD73F'
    },
    icons: {
        menu: menu2
    },
    social_icons: {
        github: gh2,
        twitter: tw2,
        linkedin: in2,
        stackoverflow: so2
    },
    fonts: {
        title: 'Merriweather',
        body: 'Open Sans',
        mono: 'Inconsolata, monospace'
    }
};

export default Dark1;
