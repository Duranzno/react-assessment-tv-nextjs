import { TVSchedule } from '../../src/models';

export const ncisSchedule: TVSchedule = {
  id: 1818423,
  url: 'http://www.tvmaze.com/episodes/1818423/ncis-17x20-the-arizona',
  name: 'The Arizona',
  season: 17,
  number: 20,
  airdate: '2020-04-14',
  airtime: '20:00',
  airstamp: '2020-04-15T00:00:00+00:00',
  runtime: 60,
  image: null,
  summary:
    '<p>The team tries to verify the identity of Joe Smith, who claims he served on the U.S.S. Arizona during the attack on Pearl Harbor, and wants to be buried there upon his death.</p>',
  show: {
    id: 60,
    url: 'http://www.tvmaze.com/shows/60/ncis',
    name: 'NCIS',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Crime'],
    status: 'Running',
    runtime: 60,
    premiered: '2003-09-23',
    officialSite: 'http://www.cbs.com/shows/ncis/',
    schedule: { time: '20:00', days: ['Tuesday'] },
    rating: { average: 8.3 },
    weight: 100,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 4628, thetvdb: 72108, imdb: 'tt0364845' },
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/237/592625.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/237/592625.jpg',
    },
    summary:
      "<p><b>NCIS</b> (Naval Criminal Investigative Service) is more than just an action drama. With liberal doses of humor, it's a show that focuses on the sometimes complex and always amusing dynamics of a team forced to work together in high-stress situations. Leroy Jethro Gibbs, a former Marine gunnery sergeant, whose skills as an investigator are unmatched, leads this troupe of colorful personalities. Rounding out the team are Anthony DiNozzo, an ex-homicide detective whose instincts in the field are unparalleled and whose quick wit and humorous take on life make him a team favorite; the youthful and energetic forensic specialist Abby Sciuto, a talented scientist whose sharp mind matches her Goth style and eclectic tastes; Caitlin Todd, an ex-Secret Service Agent; and Timothy McGee, an MIT graduate whose brilliance with computers far overshadows his insecurities in the field; Assisting the team is medical examiner Dr. Donald \"Ducky\" Mallard, who knows it all because he's seen it all, and he's not afraid to let you know. From murder and espionage to terrorism and stolen submarines, these special agents travel the globe to investigate all crimes with Navy or Marine Corps ties.</p>",
    updated: 1586804537,
    _links: {
      self: { href: 'http://api.tvmaze.com/shows/60' },
      previousepisode: { href: 'http://api.tvmaze.com/episodes/1811989' },
      nextepisode: { href: 'http://api.tvmaze.com/episodes/1818423' },
    },
  },
  _links: { self: { href: 'http://api.tvmaze.com/episodes/1818423' } },
};
