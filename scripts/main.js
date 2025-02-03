const btn_display_hide_navbar = document.querySelector('.navbar_btn')
const menu = document.querySelector('.navbar_menu')
const btn_page_config = document.querySelector('.page_config')
const btn_page_statistic = document.querySelector('.page_statistic')


const app_page_config = document.querySelector('.app_page_configurator')
const app_page_statistic = document.querySelector('.app_page_statistic')


btn_display_hide_navbar.addEventListener('click', function () {

  app_page_config.classList.toggle('display_none')

  app_page_statistic.classList.toggle('display_block')


  // menu.classList.toggle('display_block')
})


btn_page_config.addEventListener('click', function () {

  app_page_config.classList.toggle('display_none')

  app_page_statistic.classList.toggle('display_block')


})