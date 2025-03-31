import { Chip } from "@heroui/chip";

type TagStyles = {
  base: string;
  content: string;
};

type TagColor = {
  [key: string]: TagStyles;
};

const tagColor: TagColor = {
  internship: {
    base: "bg-gradient-to-r from-blue-400 to-green-500 border-small border-white/50 shadow-red-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  "part-time": {
    base: "bg-gradient-to-bl from-purple-500 to-gray-500 border-small border-white/50 shadow-green-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  "full-time": {
    base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  award: {
    base: "bg-gradient-to-br from-green-500 to-yellow-500 border-small border-white/50 shadow-blue-500/30",
    content: "drop-shadow shadow-black text-gray-800",
  },
  international: {
    base: "bg-gradient-to-l from-yellow-500 to-orange-400 border-small border-white/50 shadow-teal-500/30",
    content: "drop-shadow shadow-black text-gray-800",
  },
  certification: {
    base: "bg-gradient-to-br from-purple-400 to-pink-300 border-small border-white/50 shadow-gray-500/30",
    content: "drop-shadow shadow-black text-gray-800",
  },
  ctf: {
    base: "bg-gradient-to-br from-yellow-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  event: {
    base: "bg-gradient-to-br from-gray-500 to-purple-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },

  // あまりもの
  "pink-red": {
    base: "bg-gradient-to-br from-purple-500 to-red-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  "pink-dark": {
    base: "bg-gradient-to-br from-pink-500 to-gray-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },
  "red-blue": {
    base: "bg-gradient-to-br from-red-500 to-blue-500 border-small border-white/50 shadow-pink-500/30",
    content: "drop-shadow shadow-black text-white",
  },
};

export const AboutTag = ({ tag }: { tag: string }) => {
  if (!tagColor[tag]) {
    <Chip key={tag} variant="faded" radius="sm" className="mx-px">
      {tag}
    </Chip>;
  }
  return (
    <Chip
      key={tag}
      variant="faded"
      radius="sm"
      className="mx-px"
      classNames={tagColor[tag]}
    >
      {tag}
    </Chip>
  );
};
