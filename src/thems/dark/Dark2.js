import gh2 from '../../images/social-gh-2.svg';
import tw2 from '../../images/social-tw-2.svg';
import in2 from '../../images/social-in-2.svg';
import so2 from '../../images/social-so-2.svg';
import menu2 from '../../images/menu-2.svg';


// Dark Theme 2
const Dark2 = {
    id: 2,
    style: 'dark',
    colors: {
        background: '#253238',
        inner_background: '#212B30',
        primary: '#FFFFFF',
        inner_primary: '#C5D4D6',
        selected: '#FCCD6C',
        highlighted: '#F78C6A'
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

export default Dark2;
