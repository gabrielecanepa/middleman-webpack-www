require 'lib/favicon'

module FaviconsHelper
  def auto_display_favicon_tags
    result = []

    if data.site.base_color
      result << tag(:meta, name: 'theme-color', content: data.site.base_color)
      result << tag(:meta, name: 'msapplication-TileColor', content: data.site.base_color)
    end

    if build?
      favicon_path = File.join(config[:images_dir], data.site.favicon)
      favicon_hash = Favicon.generate(config[:images_dir], data.site.favicon)[favicon_path]
      favicon_hash.each do |favicon|
        favicon_link_tags = {}
        favicon.each_key do |key|
          if key == :icon
            favicon_link_tags[:href] = favicon[key]
          elsif key == :size
            key == :sizes
          else
            favicon_link_tags[key] = favicon[key]
          end
        end
        result << tag(:link, favicon_link_tags)
      end
    end

    result = result.join("\n")
  end
end
