<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<?php
			switch ($page) {
				case 'contact-us.php':
					echo '<title>Contact Us | SPOLETO | My Italian Kitchen</title>';
					break;
				case 'gift-cards.php':
					echo '<title>Gift Cards | SPOLETO | My Italian Kitchen</title>';
					break;
				case 'our-story.php':
					echo '<title>Our Story | SPOLETO | My Italian Kitchen</title>';
					break;
				case 'our-food.php':
					echo '<title>Our Food | SPOLETO | My Italian Kitchen</title>';
					break;
				case 'locations-and-menu.php':
					echo '<title>Locations & Menu | SPOLETO | My Italian Kitchen</title>';
					break;
				case 'careers.php':
					echo '<title>Join Our Family | SPOLETO | My Italian Kitchen</title>';
					break;
				default:
					echo '<title>SPOLETO | My Italian Kitchen</title>';
					break;
			}
		?>
		<link rel="stylesheet" href="fonts/font_style.css">
		<link rel="stylesheet" href="css/style.css">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<link rel="shortcut icon" href="img/favicon.ico?v=1.0" type="image/x-icon">
		<link rel="icon" href="img/favicon.ico?v=1.0" type="image/x-icon">
		<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body>

		<header id="header">
			<div>
				<div>
					<a id="logo" href="/" alt="Spoleto">
						<img src="img/logo.png" />
					</a>
				</div>
				<div>
					<nav id="main-menu">
						<ul>
							<li><a href="/our-food.php">Our Food</a></li>
							<li><a href="/our-story.php">Our Story</a></li>
							<li><a href="/locations-and-menu.php">Locations & Menu</a></li>
							<li><a href="/contact-us.php">Let's Talk</a></li>
							<li><a href="/careers.php">Join Our Family</a></li>
							<li><a href="/gift-cards.php">Gift Cards</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>