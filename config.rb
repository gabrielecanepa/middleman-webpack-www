# General config
# http://localhost:4567/__middleman

Dir['./*/*.rb'].each { |file| load file }
include FaviconsHelper

::Sass.load_paths << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Activate and configure extensions

activate :autoprefixer do |config|
  config.browsers = 'last 2 versions'
end

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'yarn run build' : 'yarn run start',
         source: 'dist',
         latency: 1

activate :dotenv
activate :meta_tags

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   }
# )

configure :development do
  set      :debug_assets, true
  activate :livereload
  activate :pry
end

configure :build do
  ignore   File.join(config[:js_dir], '*')
  set      :relative_links, true
  activate :asset_hash
  # Place your base icon in the image dir and specify the file in site.yml
  activate :favicon_maker, icons: generate_favicon_hash
  activate :gzip
  activate :imageoptim, manifest: false, pngout: false, svgo: false
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :relative_assets
  activate :robots,  rules: [{ user_agent: '*', allow: %w[/] }],
                     sitemap: File.join(@app.data.site.host, 'sitemap.xml')
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch        = 'gh-pages'
  deploy.build_before  = true
end
