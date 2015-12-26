-- Migrate local to pre-production
SET @source_domain = 'galerie2016.local';
SET @domain_name = '2016.alessandro-chianese.com';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);


-- Migrate local to production
SET @source_domain = 'galerie2016.local';
SET @domain_name = 'www.galerie2016.ch';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);






-- Migrate pre-production to local
SET @source_domain = '2016.alessandro-chianese.com';
SET @domain_name = 'galerie2016.local';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);


-- Migrate pre-production to production
SET @source_domain = '2016.alessandro-chianese.com';
SET @domain_name = 'www.galerie2016.ch';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);





-- Migrate production to local
SET @source_domain = 'www.galerie2016.ch';
SET @domain_name = 'galerie2016.local';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);

-- Migrate production to pre-production
SET @source_domain = 'www.galerie2016.ch';
SET @domain_name = '2016.alessandro-chianese.com';

UPDATE wp_options SET option_value = REPLACE(option_value, @source_domain, @domain_name);
UPDATE wp_posts SET post_content = REPLACE(post_content, @source_domain, @domain_name);
UPDATE wp_posts SET guid = REPLACE(guid, @source_domain, @domain_name);