import { Podcast } from './Podcast/index.js';

const podcast1 = {
  num: '126',
  title: 'Robot, který snědl koblihu',
  guest: 'Radovan Siwek',
};

const episodes = [
  {
    num: 127,
    title: 'Hledání plyšového Yettiho',
    guest: 'Vojtěch Ryba',
  },
  {
    num: 128,
    title: 'Moderní hrachová polévka',
    guest: 'Kamila Štancová',
  },
  {
    num: 129,
    title: 'Poloautomatické zrcadlo',
    guest: 'Janka Janovská',
  },
  {
    num: 130,
    title: 'Máčené hlavy parlamentu',
    guest: 'Jonáš Daněk',
  },
  {
    num: 131,
    title: 'Služby na hraně přívěsu',
    guest: 'Tereza Křivánková',
  },
  {
    num: 132,
    title: 'Klasifikace sněžných klokanů',
    guest: 'Josef Stix',
  },
  {
    num: 133,
    title: 'Rybolov v Oceánu bouří',
    guest: 'Ludmila Gajová',
  },
];

console.log('funguju!', podcast1);

const renderPodcasts = () => {
  const list = document.querySelector('.episodes-list');
  list.innerHTML = episodes.map((e) => Podcast(e));
};

renderPodcasts();
