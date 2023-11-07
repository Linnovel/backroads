import imageOne from './images/tour-1.jpeg'
import imageTwo from './images/tour-2.jpeg'
import imageThree from './images/tour-3.jpeg'
import imageFour from './images/tour-4.jpeg'


export const pageLinks = [
    {
        id: 1, href: '#home', text: 'home'
    },
    {
        id: 2, href: '#about', text: 'about'
    },
    {
        id: 3, href: '#services', text: 'services'
    },
    {
        id: 4, href: '#tours', text: 'tours'
    },
];

export const socialLinks = [
    {
        id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'
    },
    {
        id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter'
    },
    {
        id: 1, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'
    },
]

export const servicesData = [
    {
        id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
]

export const tourData = [
    {
        id: 1, img: imageOne, location: 'China', duration: '6', date: 'augusto 26th, 2020', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', title: 'Tibet Adventure',
    },
    {
        id: 2, img: imageTwo, location: 2100, duration: '6', date: 'october 1th, 2020', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', title: 'best of java',
    },
    {
        id: 3, img: imageThree, location: 2100, duration: '6', date: '', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', title: '',
    },
    {
        id: 4, img: imageFour, location: 2100, duration: '6', date: '', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', title: '',
    },
]