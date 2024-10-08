"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu.jsx";

const CardFilter = ({ onFilter }) => {
  const [title, setTitle] = useState("All Categories");

  const handleFilter = (category) => {
    onFilter(category);
    setTitle(category);
  };

  return (
    <div className="mb-12">
      <DropdownMenu>
        <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter cards by categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleFilter("All Categories")}>
            All Categories
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFilter("Category One")}>
            Category One
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFilter("Category Two")}>
            Category Two
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CardFilter;
