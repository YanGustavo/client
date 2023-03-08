import styled from 'styled-components';

export const NotFoundStyle = styled.footer`
   @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300);

body {
	background-color: #335B67;
	background: -ms-radial-gradient(ellipse at center,  #335B67 0%, #2C3E50 100%) fixed no-repeat;
	background: -moz-radial-gradient(ellipse at center,  #335B67 0%, #2C3E50 100%) fixed no-repeat;
	background: -o-radial-gradient(ellipse at center, #335B67 0%, #2C3E50 100%) fixed no-repeat;
	background: -webkit-gradient(radial, center center, 0, center center, 497, color-stop(0, #335B67), color-stop(1, #2C3E50));
	background: -webkit-radial-gradient(ellipse at center,  #335B67 0%, #2C3E50 100%) fixed no-repeat;
	background: radial-gradient(ellipse at center, #335B67 0%, #2C3E50 100%) fixed no-repeat;
	font-family: 'Source Sans Pro', sans-serif;
	-webkit-font-smoothing: antialiased;
	margin: 0px;
}

::selection {
	background-color: rgba(0,0,0,0.2);
}

::-moz-selection {
	background-color: rgba(0,0,0,0.2);
}
	

a {
	color: white;
	text-decoration: none;
	border-bottom: 1px solid rgba(255,255,255,0.5);
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	margin-right: 10px;
}

a:last-child { margin-right: 0px; }

a:hover {
	text-shadow: 0px 0px 1px rgba(255,255,255,.5);
	border-bottom: 1px solid rgba(255,255,255,1);
}

#noscript-warning {
	width: 100%;
	text-align: center;
	background-color: rgba(0,0,0,0.2);
	font-weight: 300;
	color: white;
	padding-top: 10px;
	padding-bottom: 10px;
}



/* === WRAP === */

#wrap {
	width: 80%;
	max-width: 1400px;
	margin:0 auto;
	height: auto;
	position: relative;
	margin-top: 8%;
}



/* === MAIN TEXT CONTENT === */

#main-content {
	float: right;
	max-width: 45%;
	color: white;
	font-weight: 300;
	font-size: 18px;
	padding-bottom: 40px;
	line-height: 28px;
}

#main-content h1 {
	margin: 0px;
	font-weight: 400;
	font-size: 42px;
	margin-bottom: 40px;
	line-height: normal;
}



/* === NAVIGATION BUTTONS === */

#navigation { margin-top: 2%; }

#navigation a.navigation {
	display: block;
	float: left;
	background-color: rgba(0,0,0,0.2);
	padding-left: 15px;
	padding-right: 15px;
	color: white;
	height: 41px;
	line-height: 41px;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	margin-right: 2%;
	margin-bottom: 2%;
	border-bottom: none;
}

#navigation a.navigation i { line-height: 41px; }

#navigation a.navigation:hover {
	background-color: rgba(26,188,156,0.7);
	border-bottom: none;
}



/* === WORDSEARCH === */

#wordsearch {
	width: 45%;
	float: left;
}

#wordsearch ul {
	margin: 0px;
	padding: 0px;
}

#wordsearch ul li {
	float: left;
	width: 12%;
	background-color: rgba(0,0,0,.2);
	list-style: none;
	margin-right: 0.5%;
	margin-bottom: 0.5%;
    padding: 0;
    display: block;
    text-align: center;
    color: rgba(255,255,255,0.7);
    text-transform: uppercase;
    overflow: hidden;
    font-size: 24px;
    font-size: 1.6vw;
    font-weight: 300;
    transition: background-color 0.75s ease;
    -moz-transition: background-color 0.75s ease;
    -webkit-transition: background-color 0.75s ease;
    -o-transition: background-color 0.75s ease;
}

#wordsearch ul li.selected {
	background-color: rgba(26,188,156,0.7);
	color: rgba(255,255,255,1);
	font-weight: 400;
}



/* === SEARCH FORM === */

#search { margin-top: 30px; }

#search input[type='text'] {
	width: 88%;
	height: 41px;
	padding-left: 15px;
	padding-rigt: 15px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	background-color: rgba(0,0,0,0.2);
	border: none;
	outline: none;
	-webkit-appearance: none;
	font-size: 16px;
	font-weight: 300;
	color: white;
	font-family: 'Source Sans Pro', sans-serif;
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	border-radius: 0px;
}

#search .input-search {
	width: 10%;
	float: right;
	height: 41px;
	background-color: rgba(0,0,0,0.2);
	outline: none;
	border: none;
	-webkit-appearance: none;
	font-family: 'Source Sans Pro', sans-serif;
	color: white;
	font-weight: 300;
	font-size: 16px;
	cursor: pointer;
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	text-align: center;
}

#search .input-search:hover {
	background-color: rgba(26,188,156,0.7);
}



/* === RESPONSIVE CSS === */

@media all and (max-width: 899px) {
	#wrap { width: 90%; }
}

@media all and (max-width: 799px) {
	#wrap { width: 90%; height: auto; margin-top: 40px; top: 0%; }
	#wordsearch { width: 90%; float: none; margin:0 auto; }
	#wordsearch ul li { font-size: 4vw; }
	#main-content { float: none; width: 90%; max-width: 90%; margin:0 auto; margin-top: 30px; text-align: justify; }
	#main-content h1 { text-align: left; }
	#search input[type='text'] { width: 84%; }
	#search .input-search { width: 15%; }
}

@media all and (max-width: 499px) {
	#main-content h1 { font-size: 28px; }
}
`;
