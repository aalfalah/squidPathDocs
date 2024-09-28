import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/squidPathDocs/blog',
    component: ComponentCreator('/squidPathDocs/blog', '9fb'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/archive',
    component: ComponentCreator('/squidPathDocs/blog/archive', '341'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/authors',
    component: ComponentCreator('/squidPathDocs/blog/authors', 'e17'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/squidPathDocs/blog/authors/all-sebastien-lorber-articles', 'e88'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/authors/yangshun',
    component: ComponentCreator('/squidPathDocs/blog/authors/yangshun', 'd03'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/first-blog-post',
    component: ComponentCreator('/squidPathDocs/blog/first-blog-post', '2b9'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/long-blog-post',
    component: ComponentCreator('/squidPathDocs/blog/long-blog-post', 'aed'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/mdx-blog-post',
    component: ComponentCreator('/squidPathDocs/blog/mdx-blog-post', '39d'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/tags',
    component: ComponentCreator('/squidPathDocs/blog/tags', '1bf'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/tags/docusaurus',
    component: ComponentCreator('/squidPathDocs/blog/tags/docusaurus', 'aa6'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/tags/facebook',
    component: ComponentCreator('/squidPathDocs/blog/tags/facebook', '78c'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/tags/hello',
    component: ComponentCreator('/squidPathDocs/blog/tags/hello', '7bf'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/tags/hola',
    component: ComponentCreator('/squidPathDocs/blog/tags/hola', '936'),
    exact: true
  },
  {
    path: '/squidPathDocs/blog/welcome',
    component: ComponentCreator('/squidPathDocs/blog/welcome', 'c3e'),
    exact: true
  },
  {
    path: '/squidPathDocs/markdown-page',
    component: ComponentCreator('/squidPathDocs/markdown-page', '01b'),
    exact: true
  },
  {
    path: '/squidPathDocs/docs',
    component: ComponentCreator('/squidPathDocs/docs', '797'),
    routes: [
      {
        path: '/squidPathDocs/docs',
        component: ComponentCreator('/squidPathDocs/docs', '7c2'),
        routes: [
          {
            path: '/squidPathDocs/docs',
            component: ComponentCreator('/squidPathDocs/docs', '078'),
            routes: [
              {
                path: '/squidPathDocs/docs/Building/FACT360',
                component: ComponentCreator('/squidPathDocs/docs/Building/FACT360', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/category/️-building',
                component: ComponentCreator('/squidPathDocs/docs/category/️-building', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/category/-research',
                component: ComponentCreator('/squidPathDocs/docs/category/-research', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/category/teaching',
                component: ComponentCreator('/squidPathDocs/docs/category/teaching', '977'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/category/topics-of-interest',
                component: ComponentCreator('/squidPathDocs/docs/category/topics-of-interest', 'cd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/category/️writing',
                component: ComponentCreator('/squidPathDocs/docs/category/️writing', '289'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/intro',
                component: ComponentCreator('/squidPathDocs/docs/intro', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Research/Partitions similarity measures',
                component: ComponentCreator('/squidPathDocs/docs/Research/Partitions similarity measures', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Teaching/Discrete Maths Course - UoL Goldsmiths',
                component: ComponentCreator('/squidPathDocs/docs/Teaching/Discrete Maths Course - UoL Goldsmiths', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Topics/Behavioural analytics',
                component: ComponentCreator('/squidPathDocs/docs/Topics/Behavioural analytics', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Topics/Clustering similarity measures',
                component: ComponentCreator('/squidPathDocs/docs/Topics/Clustering similarity measures', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Topics/Data visualisation',
                component: ComponentCreator('/squidPathDocs/docs/Topics/Data visualisation', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Topics/Product analytics',
                component: ComponentCreator('/squidPathDocs/docs/Topics/Product analytics', '6d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Topics/Startup lifetime',
                component: ComponentCreator('/squidPathDocs/docs/Topics/Startup lifetime', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/squidPathDocs/docs/Writing/Product Numbers Newsletter',
                component: ComponentCreator('/squidPathDocs/docs/Writing/Product Numbers Newsletter', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/squidPathDocs/',
    component: ComponentCreator('/squidPathDocs/', '12c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
