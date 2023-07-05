import Link from 'next/link';

interface HeaderProps {
   label: string;
   slug: string;
}

const navLinks = [{ label: 'Home', slug: '/' }, { label: 'Projects', slug: 'projects' }, { label: 'Contact', slug: 'contact' }]

export default function Header() {
   return (
      <header className="header">
         {navLinks.map(link => {
            return <Link href={`/${link.slug}`}>
               {link.label}
            </Link>
         })}
      </header>
   );
};