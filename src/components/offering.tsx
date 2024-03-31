import { HoverEffect } from '../components/ui/card-hover-effect';

export function Offering() {
  return (
    <div className="max-w-6xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: 'Web Development',
    description:
      'Creating websites and web applications using technologies like HTML, CSS, JavaScript, and various web frameworks (e.g., React, Angular, Vue.js).',
    link: 'https://stripe.com',
  },
  {
    title: 'Mobile App Development',
    description:
      'Developing mobile applications for iOS, Android, or cross-platform using tools like Swift, Kotlin, Flutter, or React Native.',
    link: 'https://netflix.com',
  },
  {
    title: 'Software Development',
    description:
      'Building custom software solutions for clients using programming languages such as Python, Java, C#, or C++.',
    link: 'https://google.com',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user interfaces and experiences for websites, mobile apps, and software applications to enhance usability and user satisfaction.',
    link: 'https://meta.com',
  },
  {
    title: 'Graphic Design',
    description:
      'Creating visual elements such as logos, icons, banners, and illustrations for digital and print media.',
    link: 'https://amazon.com',
  },
  {
    title: 'Database',
    description:
      'Designing, implementing, and managing databases using technologies like MySQL, PostgreSQL, MongoDB, or Microsoft SQL Server.',
    link: 'https://microsoft.com',
  },
];
