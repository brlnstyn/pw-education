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
      id: 'ui-element',
      title: 'JAVA METHODS',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'typography',
          title: 'Java Methods',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'text_fields',
          url: '/typography'
        },
        {
          id: 'color',
          title: 'Java Method Parameter',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'color_lens',
          url: '/color'
        },
        {
          id: 'icons',
          title: 'Java Method Overloading',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'history_edu'
        },
        {
          id: 'icons',
          title: 'Java Scope',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user'
        },
        {
          id: 'icons',
          title: 'Java Recursion',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'storefront'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Java Classes',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'login',
          title: 'Java OOP',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user',
          url: '/login',
          target: true
        },
        {
          id: 'register',
          title: 'Java Classes/Objects',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'person_add_alt_1',
          url: '/register',
          target: true
        },
        {
          id: 'register',
          title: 'Java Class Attributes',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'list_alt',
          url: '/register',
          target: true
        },
        {
          id: 'register',
          title: 'Java Class Method',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'power_off',
          url: '/register',
          target: true
        },
        {
          id: 'register',
          title: 'Java Constructor',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'medical_services',
          url: '/register',
          target: true
        },
        {
          id: 'register',
          title: 'Java This Keyword',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'two_wheeler',
          url: '/register',
          target: true
        }
      ]
    },
    {
      id: 'support',
      title: 'Java File Handling',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'sample-page',
          title: 'Java Files',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'material-icons-two-tone',
          iconname: 'home_work'
        },
        {
          id: 'disabled-menu',
          title: 'Java Create/Write Files',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'material-icons-two-tone',
          iconname: 'power_off'
        },
        {
          id: 'disabled-menu',
          title: 'Java Read Files',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'material-icons-two-tone',
          iconname: 'tap_and_play'
        },
        {
          id: 'disabled-menu',
          title: 'Java Delete Files',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'material-icons-two-tone',
          iconname: 'all_inclusive'
        }
      ]
    }
  ]
};

export default menuItems;
