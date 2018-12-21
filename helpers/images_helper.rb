module ImagesHelper
  def svg_tag(file_name, attributes = {})
    root_path  = Middleman::Application.root_path
    file_path  = File.join(root_path, 'source', config.images_dir, file_name)
    svg        = File.exist?(file_path) ? File.read(file_path) : 'SVG not found'
    image_name = file_name.gsub('.svg', '')

    # Change `.st*` classes with specific ones
    (0..99).each { |n| change_class_name(svg, "st#{n}", "#{image_name}#{n}") }

    # Remove any predefined height or width
    svg.slice!(/\b(?:height|width)\b/)

    add_attributes_to_opening_tag(svg, attributes)

    svg
  end

  private

  def add_attributes_to_opening_tag(svg, attributes)
    new_opening_tag = '<svg '

    attributes.each_key do |attribute|
      new_opening_tag += "#{attribute}=\"#{attributes[attribute]}\" "
    end

    svg.gsub!('<svg ', new_opening_tag)
  end

  def change_class_name(svg, old_name, new_name)
    svg.gsub!(old_name, new_name) if svg.include?(old_name)
  end
end
