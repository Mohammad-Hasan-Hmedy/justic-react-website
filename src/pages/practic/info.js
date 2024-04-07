import { RiCriminalFill } from "react-icons/ri";
import { MdCorporateFare } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
const info = [
  {
    key: "a",
    servicTitle: "Banking and Finance Law",
    servicParagraph:
      "Far far away, behind the word mountains, far from the countries",
    icon: <BsBank2 className="icon__sec" />,
  },
  {
    key: "b",
    servicTitle: "Commercial Law",
    servicParagraph:
      "Separated they live in Bookmarksgrove right at the coast of, theSemantics",
    icon: <MdCorporateFare className="icon__sec" />,
  },
  {
    key: "c",
    servicTitle: "Corporate Law",
    servicParagraph:
      "Far far away, behind tword mountains,far from the countries",
    icon: <MdOutlineBusinessCenter className="icon__sec" />,
  },
  {
    key: "d",
    servicTitle: "Criminal Law",
    servicParagraph:
      "Separated they live in Bookmarksgrove right at the coast of theSemantics",
    icon: <RiCriminalFill className="icon__sec" />,
  },
];

export default info;