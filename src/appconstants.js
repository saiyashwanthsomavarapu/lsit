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
          {
            label: 'Development',
            path: '/lsit/services/development'
          }
        ]
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
      title: "Developement",
      price: "0",
      description:
        "Long-term experience in creating technologically-advanced and custom websites or for better user engagement",
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Staffing",

      price: "15",
      description:
        "Long-term experience in creating technologically-advanced and custom websites or for better user engagement",
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Digial Marketing",
      price: "30",
      description:
        "Working to bring creative and transformative digital programs and experiences to every organization.",
      buttonText: "Contact us",
      buttonVariant: "outlined",
    }
  ];