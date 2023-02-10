import { Sparkle } from 'phosphor-react'

import "./Header.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="timelineHeader">
      {title}
      <Sparkle />
    </div>
  );
}
