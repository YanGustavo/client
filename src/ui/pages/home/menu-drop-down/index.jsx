'use client';
import React from "react";
import {Ul, Li, A, Search, SearchMobile,} from './styles';
//https://codepen.io/rizkykurniawanritonga/pen/VwvOMW
//icons
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CommentIcon from '@mui/icons-material/Comment';
import SearchIcon from '@mui/icons-material/Search';

function MenuDropDown() {
  return (
<nav>
		<Ul>
			<Li>
				<A href="">
					<HomeIcon/>
					<strong>Home</strong>
					<small>sweet home</small>
				</A>
			</Li>
			<Li>
				<A href="" className={`active`}>
					<EditIcon/>
					<strong>About us</strong>
					<small>sweet home</small>
				</A>
			</Li>
			<Li>
				<A href="">
					<CardGiftcardIcon/>
					<strong>Features</strong>
					<small>sweet home</small>
				</A>
			</Li>
			<Li>
				<A href="">
					<NewspaperIcon/>
					<strong>News</strong>
					<small>sweet home</small>
				</A>
			</Li>
			<Li>
				<A href="">
					<CommentIcon/>
					<strong>Blog</strong>
					<small>what they say</small>
				</A>
				<ul>
					<li><a href="#"><NewspaperIcon/>Mission</a></li>
					<li>
						<a href="#"><NewspaperIcon/>Our Team</a>
						<ul>
							<li><a href="#"><NewspaperIcon/>Leyla Sparks</a></li>
							<li>
								<a href="#"><NewspaperIcon/>Gleb Ismailov</a>
								<ul>
									<li><a href="#"><NewspaperIcon/>About</a></li>
									<li><a href="#"><NewspaperIcon/>Skills</a></li>
								</ul>
							</li>
							<li><a href="#"><NewspaperIcon/>Viktoria Gibbers</a></li>
						</ul>
					</li>
					<li><a href="#"><NewspaperIcon/>Rewards</a></li>
					<li><a href="#"><NewspaperIcon/>Certificates</a></li>
				</ul>
			</Li>
			<Li>
				<A href="">
        <CommentIcon/>
					<strong>Portfolio</strong>
					<small>sweet home</small>
				</A>
			</Li>
			<Li>
				<A href="">
        <CommentIcon/>
					<strong>Contacts</strong>
					<small>drop a line</small>
				</A>
			</Li>
			<Li className={`float`}>
				<Search>
					<input type="text" value="search ..."/>
					<button><SearchIcon/></button>
				</Search>
				<SearchMobile>
        <SearchIcon/>
				</SearchMobile>
			</Li>
		</Ul>
	</nav>
  );
}

export default  MenuDropDown;