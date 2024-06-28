require 'selenium-webdriver'
require 'json'

options = Selenium::WebDriver::Chrome::Options.new
driver = Selenium::WebDriver.for :chrome, options: options

begin
  driver.navigate.to 'http://localhost:3000'

  select_language = driver.find_element(xpath: '/html/body/div/div/div[1]/select')
  select_language.send_keys('French')

  input_number = driver.find_element(xpath: '/html/body/div/div/input')
  input_number.send_keys('123')

  coverage_data = driver.execute_script('return window.__coverage__;')

  File.open('.nyc_output/out.json', 'w') do |file|
    file.write(JSON.pretty_generate(coverage_data))
  end
ensure
  driver.quit
end
