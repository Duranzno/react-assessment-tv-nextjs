import React, { ReactNode, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { AppProps } from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { initDataAction } from '../src/redux';
import { fetchTVShows } from '../src/api';
import { TVSchedule } from '../src/models';
import {
 Navbar, Slider, Footer, Carrousel 
} from '../src/components';

export const mockSchedule: TVSchedule = {
  id: 1836593,
  url:
    'http://www.tvmaze.com/episodes/1836593/sesame-street-s50-special-elmos-playdate',
  name: "Elmo's Playdate",
  season: 50,
  number: null,
  airdate: '2020-04-14',
  airtime: '09:00',
  airstamp: '2020-04-14T13:00:00+00:00',
  runtime: 30,
  image: null,
  summary: null,
  show: {
    id: 6544,
    url: 'http://www.tvmaze.com/shows/6544/sesame-street',
    name: 'Sesame Street',
    type: 'Scripted',
    language: 'English',
    genres: ['Children'],
    status: 'Running',
    runtime: 30,
    premiered: '1969-11-10',
    officialSite: 'http://www.sesamestreet.org',
    schedule: { time: '09:00', days: ['Saturday'] },
    rating: { average: 8.3 },
    weight: 95,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 5152, thetvdb: 78419, imdb: 'tt0063951' },
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/222/555972.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/222/555972.jpg',
    },
    summary:
      '<p><b>Sesame Street</b> is a widely recognized and perpetually daring experiment in educational children\'s programming. This show has taken popular-culture and turned it upside-down. The fast-paced advertisements that had parents of the new era worrying for their children were the basis for the original format of this show. The show has often satirized pop culture, and made itself easier for parents to watch along too. And thus, the positive impact this show has had on modern society is beyond another. No show is more recognized the world over by as many generations and walks of life. Shown in its original format or with changes to reflect a regional education focus, Sesame Street is now seen in over 140 countries. The show that Entertainment Weekly named the "20th Best Ever Show" has changed the education scene to focus on "entertainment". This has turned out to be a valuable theory that not only...</p>',
    updated: 1586697751,
    _links: {
      self: { href: 'http://api.tvmaze.com/shows/6544' },
      previousepisode: { href: 'http://api.tvmaze.com/episodes/1813259' },
      nextepisode: { href: 'http://api.tvmaze.com/episodes/1813260' },
    },
  },
  _links: { self: { href: 'http://api.tvmaze.com/episodes/1836593' } },
};

export default (props: AppProps): ReactNode => {
  // Regular redux hooks usage
  const schedules = useSelector((state) => state.schedules);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTVShows().then((s) => {
      dispatch(initDataAction({ schedules: s }));
    });
  }, []);
  return (
    <Container>
      <Navbar />
      <Typography variant="h2">Recommended For You</Typography>
      {/* <Slider onClick={console.log} schedules={schedules} /> */}
      <Typography variant="h2">Recommended For You</Typography>
      <Carrousel readAll={console.log} schedules={schedules} />
      <Footer />
    </Container>
  );
};
