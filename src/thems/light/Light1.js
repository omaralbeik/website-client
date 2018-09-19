import gh1 from '../../images/social-gh-1.svg';
import tw1 from '../../images/social-tw-1.svg';
import in1 from '../../images/social-in-1.svg';
import so1 from '../../images/social-so-1.svg';
import menu1 from '../../images/menu-1.svg';


// Light Theme 1
const Light1 = {
    id: 1,
    style: 'light',
    colors: {
        background: '#FFFEFB',
        inner_background: '#F6F6F6',
        primary: '#003847',
        inner_primary: '#4F5555',
        selected: '#B30000',
        highlighted: '#FF0505'
    },
    icons: {
        menu: menu1
    },
    social_icons: {
        github: gh1,
        twitter: tw1,
        linkedin: in1,
        stackoverflow: so1
    },
    fonts: {
        title: 'Merriweather',
        body: 'Open Sans',
        mono: 'Inconsolata, monospace'
    }
};

export default Light1;
