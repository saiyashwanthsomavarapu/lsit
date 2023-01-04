export const navMenu = [
    {
        label: 'Home',
        path: '/',
        dropdown: false
    },
    
    {
        label: 'Services',
        path: '',
        dropdown: true,
        dropdownMenu:[
          {
            label: 'Staff',
            path: '/lsit/services/staff'
          },
          {
            label: 'Digital',
            path: '/lsit/services/digital',
          },
          // {
          //   label: 'Development',
          //   path: '/lsit/services/development'
          // }
        ]
    },
    // {
    //   label: 'Technologies',
    //   path: "/lsit/tech"
    // },
    {
      label: 'Careers',
      path: "/lsit/careers"
    },
    {
      label: "About Us",
      path: "/lsit/about",
      dropdown: false
    },
    {
        label: 'Contact',
        path: '/lsit/contact',
        dropdown: false
    }
];

export const banners = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"

];

export const SERVICES = [
    {
      title: "Staffing",
      price: "0",
      description:
        "LSIT is a top Global IT Staffing Service provider using cutting-edge technology to locate skilled IT specialists for a variety of companies.",
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Digital Marketing",

      price: "15",
      description:
        "Efficiently aggregate end-to-end core competencies without maintainable ideas. Dynamically foster tactical solutions without enabled value.",
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Development",
      price: "30",
      description:
        "Working to bring creative and transformative digital programs and experiences to every organization.",
      buttonText: "Contact us",
      buttonVariant: "outlined",
    }
  ];