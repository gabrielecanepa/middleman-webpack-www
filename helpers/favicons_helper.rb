module FaviconsHelper
  def generate_favicon_hash
    icon_path = File.join(config[:images_dir], @app.data.site.favicon)
    favicons  = config[:favicons]

    favicons.each { |favicon| add_output_path_to_favicon(favicon) }

    { icon_path => favicons }
  end

  def auto_display_favicon_tags
    icon_path    = File.join(config[:images_dir], @app.data.site.favicon)
    favicon_tags = []

    generate_favicon_hash[icon_path].each do |favicon|
      favicon_tags << tag(:link, generate_favicon_tag_attributes(favicon))
    end

    favicon_tags.join("\n").html_safe
  end

  private

  def add_output_path_to_favicon(favicon)
    output_path = File.join(config[:images_dir], 'favicon')

    return if favicon[:icon].include?(output_path)

    favicon[:icon] = File.join(output_path, favicon[:icon])
  end

  def generate_favicon_tag_attributes(favicon)
    attributes = {}

    favicon.each_key do |key|
      case key
      when :icon then attributes[:href]  = favicon[key]
      when :size then attributes[:sizes] = favicon[key]
      else attributes[key] = favicon[key]
      end
    end

    attributes
  end
end
