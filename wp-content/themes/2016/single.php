
<?php get_header(); ?>
<?php get_sidebar(); ?>

<section id="content">
  
  <article id="post" <?php post_class(); ?>>
  
    <header class="post-header">
  
      <h1><?php the_title(); ?></h1>
    </header>
  <?php
    while(have_posts()): the_post(); ?>
      <?php
      the_content();
      wp_link_pages();
    endwhile; ?>

  </article>
  

  
</section>

<?php get_footer(); ?>