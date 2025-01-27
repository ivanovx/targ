import { 
    MegaMenu,
    MegaMenuDropdown,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle
} from 'flowbite-react';

export default function Navbar() {
    return (
        <MegaMenu className='bg-cyan-50 border-b border-cyan-950'>
            <NavbarBrand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold">Website</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/home">Начало</NavbarLink>
                <NavbarLink>
            <MegaMenuDropdown toggle={<>Села</>} suppressHydrationWarning>
              <ul className="space-y-4 p-4" suppressHydrationWarning>
                  <li>
                    <a href="/villages/chuprene" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Чупрене
                    </a>
                  </li>
                  <li>
                    <a href="/villages/targoviste" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Търговище
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Върбово
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Протопопинци
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Репляна
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Горни Лом
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Долни Лом
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Средогрив
                    </a>
                  </li>
              </ul>
            </MegaMenuDropdown>
          </NavbarLink>
                <NavbarLink href="/gallery">Галерия</NavbarLink>
                <NavbarLink href="/landmarks">Забележителности</NavbarLink>
                <NavbarLink href="/contact">Контакт</NavbarLink>
            </NavbarCollapse>
        </MegaMenu>
    );
}
  