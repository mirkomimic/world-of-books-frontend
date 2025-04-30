import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

const BookCard = ({ book, className }) => {
  const { title, year, image } = book;

  function truncateWithElipses(text, max) {
    const words = text.trim().split(/\s+/);
    if (words.length <= max) return text;
    return words.slice(0, max).join(" ") + "...";
  }

  const MotionCard = motion.create(Card);

  return (
    <Card
      className={`${className} mx-auto h-full max-w-[400px] cursor-pointer hover:bg-gray-200/15`}
    >
      <CardHeader className="flex">
        <img src={image} className="mx-auto" />
      </CardHeader>
      <CardContent>
        <CardTitle>{truncateWithElipses(title, 4)}</CardTitle>
        <CardDescription>{year}</CardDescription>
      </CardContent>
    </Card>
  );
};
export default BookCard;
