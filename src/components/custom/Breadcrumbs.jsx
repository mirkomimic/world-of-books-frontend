import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.length > 0 &&
          items.map((item, index) => (
            <CustomBreadcrumbsLink
              items={items}
              item={item}
              index={index}
              key={index}
            />
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const CustomBreadcrumbsLink = ({ items, item, index }) => {
  const isLast = index + 1 === items.length;
  let path = "";

  if (index === 0) path = item.toLowerCase();
  else {
    items.forEach((i) => {
      path += i + (isLast ? "" : "/");
    });
  }

  return (
    <>
      <BreadcrumbItem>
        <Button
          disabled={isLast}
          className="cursor-pointer"
          variant="link"
          size="sm"
        >
          <Link to={`${BASE_URL}/${path}`}>{item.toUpperCase()}</Link>
        </Button>
      </BreadcrumbItem>
      {index + 1 < items.length && <BreadcrumbSeparator />}
    </>
  );
};

export default Breadcrumbs;
