import { v4 } from 'uuid'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa'

const Social = [
  {
    id: v4(),
    icon: <FaFacebookF size={20} style={{ color: '#3b5998' }} />,
    url: 'https://facebook.com/buzzcode42',
    target: '_blank',
    aria: 'Facebook'
  },
  {
    id: v4(),
    icon: <FaInstagram size={20} style={{ color: '#DD2A7B' }} />,
    url: 'https://instagram.com/buzzcode42',
    target: '_blank',
    aria: 'Instagram'
  },
  {
    id: v4(),
    icon: <FaGithub size={20} style={{ color: '#333' }} />,
    url: 'https://github.com/buzzcode42',
    target: '_blank',
    aria: 'Github'
  },
  {
    id: v4(),
    icon: <FaTwitter size={20} style={{ color: '#1da1f2' }} />,
    url: 'https://twitter.com/buzzcode42',
    target: '_blank',
    aria: 'Twitter'
  },
  {
    id: v4(),
    icon: <FaLinkedinIn size={20} style={{ color: '#2867B2' }} />,
    url: 'https://linkedin.com/in/.com/buzzcode42',
    target: '_blank',
    aria: 'Linkedin'
  }
]
export default Social
