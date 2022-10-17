import { AtSignIcon, PhoneIcon } from "@chakra-ui/icons";

export const user = {
  name: "Jorge Soria",
  age: "22",
  description: "\
    Desarrollador y diseñador web frontend autodidacta desde hace 3 años,\
    con proyectos construidos sobre la trinidad web (HTML, CSS, JS) / \
    Sass / ReactJS, NextJS / Tailwind y ChakraUI.\
  ",
  picture: "https://avatars.githubusercontent.com/u/89946966?v=4",
};

export const links = {
  social: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/jorgesoriax/",
    },
    {
      title: "GitHub",
      href: "https://github.com/jorgesoriax",
    },
    {
      title: "Behance",
      href: "https://www.behance.net/jorge_soriax",
    },
    {
      title: "Dribbble",
      href: "https://dribbble.com/jorgesoriax",
    },
  ],
  contact: {
    email: {
      title: "jorge_soriaw@outlook.com",
      type: "email",
      href: "mailto:jorge_soriaw@outlook.com",
      linkLabel: "Abrir Correo",
      icon: <AtSignIcon fontSize={"xl"} />,
    },
    phone: {
      title: "81 1280 2209",
      type: "tel",
      href: "https://wa.me/8112802209",
      linkLabel: "Abrir WhatsApp",
      icon: <PhoneIcon />,
    },
  },
};
