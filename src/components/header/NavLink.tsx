import Link from "next/link";

const NavLinkItem = ({
    active,
    text,
    link,
  }: {
    active: boolean;
    text: string;
    link: string;
  }) => {
    return (
      <div
        className={`${
          active ? 'border-b-2 border-gold' : ''
        } hidden lg:block px-1 text-center`}
      >
        <Link href={link || '#'} className="text-black-verdi text-paragraph ">
          {text}
        </Link>
      </div>
    );
  };

export default NavLinkItem;