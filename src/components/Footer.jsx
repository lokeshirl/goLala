import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="container-max text-center py-4 border-t">
      GoLala, made by{" "}
      <a
        href="https://github.com/lokeshirl"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-primary"
      >
        Lokeshirl & Himanshu{" "}
        <HeartIcon className="inline-block h-4 w-4 text-red-500" />
      </a>
    </div>
  );
};
export default Footer;
