require 'json'

Pod::Spec.new do |s|
  package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

  s.name          = "RNAlphaScroller"
  s.version       = package['version']
  s.summary       = package['description']
  s.authors       = { "Calcey Technologies" => "hello@calcey.com" }
  s.homepage      = "https://github.com/calceytechnologies/react-native-alpha-scroller"
  s.license       = "MIT"
  s.platforms     = { :ios => "8.0" }
  s.framework     = 'UIKit'
  s.requires_arc  = true
  s.source        = { :git => "https://github.com/calceytechnologies/react-native-alpha-scroller.git" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React'
end