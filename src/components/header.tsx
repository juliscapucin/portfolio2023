import Link from 'next/link';

interface HeaderProps {
   label: string;
   slug: string;
}

const navLinks = [{ label: 'Home', slug: '/' }, { label: 'Contact', slug: 'contact' }]

export function Header({ label, slug }: HeaderProps) {
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