<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package my_theme
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'my_theme' ) ); ?>"><?php// printf( esc_html__( 'Proudly powered by %s', 'my_theme' ), 'WordPress' ); ?></a>
			<?php printf( esc_html__( 'Theme by %2$s.', 'my_theme' ), 'my_theme', '<a href="http://mickael-boulat.fr/" rel="designer">Mickaël BOULAT</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
