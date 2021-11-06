import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa'

const Social = [
  {
    icon: <FaFacebookF style={{ color: '#3b5998' }} />,
    url: 'https://facebook.com/buzzcode42',
    target: '_blank',
    aria: 'Facebook'
  },
  {
    icon: <FaInstagram style={{ color: '#DD2A7B' }} />,
    url: 'https://instagram.com/buzzcode42',
    target: '_blank',
    aria: 'Instagram'
  },
  {
    icon: <FaGithub style={{ color: '#333' }} />,
    url: 'https://github.com/buzzcode42',
    target: '_blank',
    aria: 'Github'
  },
  {
    icon: <FaTwitter style={{ color: '#1da1f2' }} />,
    url: 'https://twitter.com/buzzcode42',
    target: '_blank',
    aria: 'Twitter'
  },
  {
    icon: <FaLinkedinIn style={{ color: '#2867B2' }} />,
    url: 'https://linkedin.com/in/.com/buzzcode42',
    target: '_blank',
    aria: 'Linkedin'
  }
]
export default Social
