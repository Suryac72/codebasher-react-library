import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { AiOutlineClose, AiOutlineDown, AiOutlineMenu, AiOutlineUp } from 'react-icons/ai';

interface LinkProp {
    name: string;
    link: string;
}
interface SubLinkProps {
    head: string;
    subLink: LinkProp[];
}
interface LinkProps {
    name: string;
    submenu?: boolean;
    subLink?: SubLinkProps[];
}
interface NavLinksProps {
    links: LinkProps[];
}

interface MegaMenuProps {
    megaMenuItems: LinkProps[];
}
export const NavLinks: React.FC<NavLinksProps> = (navLinks: NavLinksProps) => {
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    return (
        <>
            {navLinks.links.map((link: LinkProps) => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1
                            className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading('');
                                setSubHeading('');
                            }}
                        >
                            {link.name}
                            <span className={`${link.subLink ? 'md:hidden inline' : 'hidden'}`}>{heading === link.name ? <AiOutlineUp /> : <AiOutlineDown />}</span>
                            <span className={`${link.subLink ? 'md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2' : 'hidden'}`}>
                                <AiOutlineDown />
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 "></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                        {link.subLink?.map((link) => (
                                            <div>
                                                <h1 className="text-lg font-semibold">{link.head}</h1>
                                                {link.subLink.map((links: LinkProp) => (
                                                    <li className="text-sm text-gray-600 my-2.5">
                                                        <Link to={links.link} className="hover:text-primary">
                                                            {links.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Mobile View */}
                                <div
                                    className={`
                        ${heading === link.name ? 'cursor-pointer md:hidden' : 'hidden'}
                        `}
                                >
                                    {/* Sublinks */}
                                    {link.subLink?.map((slink) => (
                                        <div>
                                            <div>
                                                <h1
                                                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5 "
                                                    onClick={() => {
                                                        subHeading !== slink.head ? setSubHeading(slink.head) : setSubHeading('');
                                                    }}
                                                >
                                                    {slink.head}
                                                    <span className={`${'md:mt-1 md:ml-2'}`}>{subHeading === slink.head ? <AiOutlineUp /> : <AiOutlineDown />}</span>
                                                </h1>
                                                <div className={` ${subHeading === slink.head ? 'md:hidden' : 'hidden'}`}>
                                                    {slink.subLink.map((slink) => (
                                                        <li className="py-3 pl-14">
                                                            <Link to={slink.link}>{slink.name}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export const MegaMenu = (megaMenuProps: MegaMenuProps) => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <div className="md:cursor-pointer h-9">LOGO</div>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        {!open ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <NavLinks links={megaMenuProps.megaMenuItems} />
                </ul>
                <div className="md:block hidden">
                    <Button buttonText="Get Started" />
                </div>
                {/* Mobile View  */}
                <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <NavLinks links={megaMenuProps.megaMenuItems} />
                    <div className="py-5 flex items-start px-5">
                        <Button buttonText="Get Started" />
                    </div>
                </ul>
            </div>
        </nav>
    );
};
