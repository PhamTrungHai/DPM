import { FC } from 'react';

type NavbarProps = {} & React.HTMLAttributes<HTMLElement>;

const Navbar: FC<NavbarProps> = (props) => {
    console.log(props);
    return <div></div>;
};

export default Navbar;
