import { lazy } from 'react';
import AdminLayout from '../layouts/AdminLayout';

// General
const About = lazy(() => import('../views/about'));

// Html Tutorial
const Introduction = lazy(() => import('../views/html-tutorial/introduction'));
const Attributes = lazy(() => import('../views/html-tutorial/attributes'));
const Paragraph = lazy(() => import('../views/html-tutorial/paragraph'));
const Formatting = lazy(() => import('../views/html-tutorial/formatting'));
const Links = lazy(() => import('../views/html-tutorial/links'));
const Table = lazy(() => import('../views/html-tutorial/table'));
const List = lazy(() => import('../views/html-tutorial/list'));
const Layout = lazy(() => import('../views/html-tutorial/layout'));
const Semantic = lazy(() => import('../views/html-tutorial/semantic'));
const Entity = lazy(() => import('../views/html-tutorial/entity'));

// Html Forms
const Form = lazy(() => import('../views/html-forms/form'));
const InputType = lazy(() => import('../views/html-forms/input-types'));

// Html Media
const Audio = lazy(() => import('../views/html-media/audio'));
const Image = lazy(() => import('../views/html-media/image'));
const Video = lazy(() => import('../views/html-media/video'));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/html/introduction',
          element: <Introduction />
        },
        {
          path: '/html/attributes',
          element: <Attributes />
        },
        {
          path: '/html/paragraph',
          element: <Paragraph />
        },
        {
          path: '/html/formatting',
          element: <Formatting />
        },
        {
          path: '/html/links',
          element: <Links />
        },
        {
          path: '/html/table',
          element: <Table />
        },
        {
          path: '/html/list',
          element: <List />
        },
        {
          path: '/html/layout',
          element: <Layout />
        },
        {
          path: '/html/semantic',
          element: <Semantic />
        },
        {
          path: '/html/entity',
          element: <Entity />
        },
        {
          path: '/html/form',
          element: <Form />
        },
        {
          path: '/html/input',
          element: <InputType />
        },
        {
          path: '/html/image',
          element: <Image />
        },
        {
          path: '/html/audio',
          element: <Audio />
        },
        {
          path: '/html/video',
          element: <Video />
        },
        {
          path: '*',
          element: <h1>Not Found</h1>
        }
      ]
    }
  ]
};

export default MainRoutes;
