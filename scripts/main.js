// APP PAGES
const app_page_config = document.querySelector('.app_page_configurator')
const app_page_statistic = document.querySelector('.app_page_statistic')

// CONTAINERS
const container_menu = document.querySelector('.navbar_menu')
// const container_months_statiastic = document.querySelector('.months_container')

// BUTTONS
const btn_display_hide_navbar = document.querySelector('.navbar_btn')






btn_display_hide_navbar.addEventListener('click', function () {

  console.log('click');

  app_page_statistic.classList.toggle('display_none')
  app_page_config.classList.toggle('display_block')
})


