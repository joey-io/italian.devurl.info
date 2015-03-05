		<footer id="footer">
			<div id="social-icons">
				<ul>
					<li><a href="/"><i class="fa fa-facebook"></i></a></li>
					<li><a href="/"><i class="fa fa-twitter"></i></a></li>
					<li><a href="/"><i class="fa fa-instagram"></i></a></li>
					<li><a href="/"><i class="fa fa-pinterest"></i></a></li>
				</ul>
			</div>
			<a href="#" class="handle">
				<span>Back Of the House</span>
				<img src="img/dwn.png" />
			</a>
			<div class="tc">
				<div>
					<nav id="footer-menu">
						<ul>
							<li><a href="/" data-index="2">Our Food</a></li>
							<li><a href="/" data-index="10">Locations</a></li>
							<li><a href="/" data-index="6">Manefesto</a></li>
							<li><a href="/" data-index="10">Menu</a></li>
							<li><a href="/" data-index="5">Our Story</a></li>
							<li><a href="/" data-index="11">Contact Us</a></li>
							<li><a href="/" data-index="7">Culinary Freedom</a></li>
							<li><a href="/" data-index="12">Careers</a></li>
							<li><a href="/" data-index="8">Community</a></li>
							<li><a href="/" data-index="13">Gift Cards</a></li>
							<li><a href="/" data-index="9">Press</a></li>
						</ul>
					</nav>
				</div>
				<div>
					<h4>Join The Movement!</h4>
					<form>
						<div class="form-field">
							<input type="email" placeholder="yourname@email.com" />
							<label>E-Mail</label>
						</div>
						<div class="form-field half">
							<input type="text" placeholder="First" />
							<label>Name</label>
						</div>
						<div class="form-field half">
							<input type="text" placeholder="Last" />
							<label>&nbsp;</label>
						</div>
						<div class="clearfix"></div>
						<div class="form-field half">
							<input type="text" placeholder="mm/dd/yy" />
							<label>Birthday</label>
						</div>
						<div class="form-field half">
							<input type="text" placeholder="(___) ___-_____" />
							<label>Ph. #</label>
						</div>
						<div class="clearifx"></div>
						<div class="half">
							&nbsp;
							<label>&nbsp;</label>
						</div>
						<div class="half">
							<input type="submit" />
						</div>
						<div class="clearfix"></div>
					</form>
				</div>
				<div>
					<a href="/" id="footer-logo"><img src="img/footer-logo.png" /></a>
					<p id="copy">&copy;<?php echo date(Y);?> <a href="/">SPOLETO, USA, LLC</a></p>
					<p>All Rights Reserved.</p>
					<p><a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a></p>
				</div>
			</div>
		</footer>

		<!-- scripts -->
		<script src="js/jquery.js"></script>
		<script src="js/mousewheel.js"></script>
		<script src="js/underscore.js"></script>
		<script src="js/scripts.js"></script>

		<script type="text/javascript">
			jQuery(document).ready(function(){
				var page = '<?php echo $page; ?>';
				preScroll(page);
			});
		</script>
		<!-- /scripts -->

	</body>
</html>