"use client";

import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconBrain, IconMail, IconNews } from "@tabler/icons-react";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Team",
      link: "/team",
      icon: <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Insights",
      link: "/insights",
      icon: <IconNews className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  
  return <FloatingNav navItems={navItems} />;
}
