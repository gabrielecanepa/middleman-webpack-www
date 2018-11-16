require 'ruby-progressbar'

linters = [
  {
    name: 'ESLint',
    language: 'JavaScript',
    command: 'node_modules/.bin/eslint source/**/*.js'
  },
  {
    name: 'stylelint',
    language: 'CSS/SCSS',
    command: 'stylelint **/*.scss'
  },
  {
    name: 'RuboCop',
    language: 'Ruby',
    command: 'rubocop'
  }
]

default_tasks = []

linters.each do |linter|
  desc "Check your #{linter[:language]} style with #{linter[:name]}"
  task linter[:name].to_sym do
    show_linter_progress_bar(linter[:language], linter[:name])
    run_linter(linter[:command])
  end
  default_tasks << linter[:name].to_sym
end

task default: default_tasks

def show_linter_progress_bar(language, linter)
  title = "Checking your #{language} style with #{linter}"
  bar = ProgressBar.create(title: title, progress_mark: '.', format: '%t%B')
  3.times do
    bar.increment
    sleep 0.4
  end
  puts title + '...'
end

def run_linter(command)
  output = `#{command}`
  if output.empty?
    puts "\n\e[32;1m✔︎ Perfect style!\e[0m\n\n"
  else
    system command
  end
end
