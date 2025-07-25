// Menu configuration for default layout
const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'General',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'about',
          title: 'About Us',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'home',
          url: '/about'
        }
      ]
    },
    {
      id: 'html-tutorial',
      title: 'HTML TUTORIAL',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'introduction',
          title: 'HTML Introduction',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'text_fields',
          url: '/html/introduction'
        },
        {
          id: 'tag_attribute_element',
          title: 'Tag, Attributes, & Element',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'color_lens',
          url: '/html/attributes'
        },
        {
          id: 'paragraph',
          title: 'HTML Paragraph',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'history_edu',
          url: '/html/paragraph'
        },
        {
          id: 'heading_comment_text',
          title: 'Heading, Comment, & Format',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user',
          url: '/html/formatting'
        },
        {
          id: 'links',
          title: 'HTML Links',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'storefront',
          url: '/html/links'
        },
        {
          id: 'table',
          title: 'HTML Table',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'table',
          url: '/html/table'
        },
        {
          id: 'list',
          title: 'HTML List',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'commute',
          url: '/html/list'
        },
        {
          id: 'layout',
          title: 'HTML Layout',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'dynamic_form',
          url: '/html/layout'
        },
        {
          id: 'semantic',
          title: 'HTML Semantic',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'group_work',
          url: '/html/semantic'
        },
        {
          id: 'entity',
          title: 'HTML Entity',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'pageview',
          url: '/html/entity'
        }
      ]
    },
    {
      id: 'form',
      title: 'HTML Forms',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'html_form',
          title: 'HTML Form',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user',
          url: '/html/form'
        },
        {
          id: 'input_type',
          title: 'HTML Input Type',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'person_add_alt_1',
          url: '/html/input'
        }
      ]
    },
    {
      id: 'media',
      title: 'HTML Media',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'image',
          title: 'HTML Image',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'home_work',
          url: '/html/image'
        },
        {
          id: 'audio',
          title: 'HTML Audio',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'power_off',
          url: '/html/audio'
        },
        {
          id: 'video',
          title: 'HTML Video',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'tap_and_play',
          url: '/html/video'
        }
      ]
    }
  ]
};

export default menuItems;
