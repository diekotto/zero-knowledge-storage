import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Login', href: '/login' },
];

export function NavigationPublic() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-gray-600 hover:text-orange-500">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
