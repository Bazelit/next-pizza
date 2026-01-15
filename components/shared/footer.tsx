import { Link } from "@heroui/link";

const Footer = () => (
  <footer className="w-full flex items-center justify-center py-3">
    <Link
      isExternal
      className="flex items-center gap-1 text-current"
      href="https://github.com/Bazelit"
      title="heroui.com homepage"
    >
      <span className="text-default-600">Created by</span>
      <p className="text-primary">Bazelit</p>
    </Link>
  </footer>
);

export default Footer;
