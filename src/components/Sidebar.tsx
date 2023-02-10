import { NavLink } from 'react-router-dom'

import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

import "./Sidebar.css";

import twitterLogo from "../assets/logo-twitter.svg";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />
      
      <nav className="mainNavigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmark</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="newTweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
