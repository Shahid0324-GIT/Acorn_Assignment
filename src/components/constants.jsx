import {
  FaQuestion,
  FaSuitcase,
  FaNotesMedical,
  FaTags,
  FaUser,
  FaIdBadge,
  FaMicrophone,
  FaInbox,
  FaStackOverflow,
} from "react-icons/fa";

export const sidebarButtons = [
  { icon: <FaQuestion color="grey" />, tag: "Questions" },
  { icon: <FaSuitcase color="grey" />, tag: "Jobs" },
  { icon: <FaNotesMedical color="grey" />, tag: "Documentation" },
  { icon: <FaTags color="grey" />, tag: "Tags" },
  { icon: <FaUser color="grey" />, tag: "Users" },
  { icon: <FaIdBadge color="grey" />, tag: "Badges" },
  { icon: <FaMicrophone color="grey" />, tag: "Ask Question" },
  { icon: <FaStackOverflow color="grey" />, tag: "Stack Exchange" },
  { icon: <FaInbox color="grey" />, tag: "Inbox" },
];

export const buttonsFilter = [
  {
    text: "activity",
    len: false,
  },
  {
    text: "featured",
    len: true,
  },
  {
    text: "hot",
    len: false,
  },
  {
    text: "week",
    len: false,
  },
  {
    text: "month",
    len: false,
  },
];
