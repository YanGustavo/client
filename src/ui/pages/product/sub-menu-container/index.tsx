'use client';
import React from "react";
import Link from 'next/link';
import * as SSubMenuContainer from './styles';
import { ChevronRightRounded } from "@mui/icons-material";

type SubMenuContainerProps = {
  title: String,
  subtitle: String,
  linkHref: Object,
}

const SubMenuContainer = ({title, subtitle, linkHref}: SubMenuContainerProps)  => {
  return (
    <SSubMenuContainer.SubMenuContainerStyle>
    <div className="container subMenuContianer">
      <h3>{title}</h3>
      <div className="viewAll">
        <p>{subtitle}</p>
        <Link href={linkHref}>
        <i>
          <ChevronRightRounded />
        </i>
        </Link>
        
      </div>
    </div>
    </SSubMenuContainer.SubMenuContainerStyle>
  );
}
export default SubMenuContainer;