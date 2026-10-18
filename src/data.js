import blog1 from './assets/blog-1.webp';
import blog2 from './assets/blog-2.webp';
import blog3 from './assets/blog-3.webp';
import blog4 from './assets/blog-4.webp';
import blog5 from './assets/blog-5.webp';
import google from './assets/google.png';
import slack from './assets/slack.png';
import atlassian from './assets/atlassian.png';
import dropbox from './assets/dropbox.png';
import shopify from './assets/shopify.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'What is GPT?', href: '#what-is-gpt3' },
  { label: 'Open AI', href: '#possibility' },
  { label: 'Case Studies', href: '#features' },
  { label: 'Library', href: '#blog' },
];

export const brands = [
  { name: 'Google', src: google },
  { name: 'Slack', src: slack },
  { name: 'Atlassian', src: atlassian },
  { name: 'Dropbox', src: dropbox },
  { name: 'Shopify', src: shopify },
];

const LOREM_A =
  'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.';
const LOREM_B =
  'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments boisterous.';

export const whatIs = { title: 'What is GPT-3', text: LOREM_A };

export const whatFeatures = [
  { title: 'Chatbots', text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.' },
  { title: 'Knowledgebase', text: LOREM_B },
  { title: 'Education', text: LOREM_B },
];

export const futureFeatures = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Becoming second motionless',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress elegance be likewise debating unlocked nothing, amongst chatty.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  },
];

const BLOG_TITLE = 'GPT-3 and Open AI is the future. Let us explore how it is?';
export const articles = [
  { id: 1, image: blog1, alt: 'Tunnel of binary code', date: 'Sep 26, 2021', title: BLOG_TITLE },
  { id: 2, image: blog2, alt: 'Digital head made of circuits', date: 'Sep 26, 2021', title: BLOG_TITLE },
  { id: 3, image: blog3, alt: 'Chain link formed from binary code', date: 'Sep 26, 2021', title: BLOG_TITLE },
  { id: 4, image: blog4, alt: 'Glowing blue binary numbers', date: 'Sep 26, 2021', title: BLOG_TITLE },
  { id: 5, image: blog5, alt: 'Warning sign in binary code', date: 'Sep 26, 2021', title: BLOG_TITLE },
];

export const footerColumns = [
  { title: 'Links', items: ['Overons', 'Social Media', 'Counters', 'Contact'] },
  { title: 'Company', items: ['Terms & Conditions', 'Privacy Policy', 'Contact'] },
  { title: 'Get in touch', items: ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net'] },
];
