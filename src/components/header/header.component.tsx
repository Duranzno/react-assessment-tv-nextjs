import React, { ReactElement } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

export const Header = ({ title }: Props): ReactElement => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
  </Head>
);
