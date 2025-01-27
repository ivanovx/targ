import { 
    MegaMenu,
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
                <NavbarLink href="/home">Home</NavbarLink>
                <NavbarLink href="/gallery">Gallery</NavbarLink>
                <NavbarLink href="/landmarks">Landmarks</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink>
            </NavbarCollapse>
        </MegaMenu>
    );
}
  