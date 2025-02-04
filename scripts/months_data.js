const months_data = {

  february: {

    month_name: 'Февраль',
    year: 2025,
    month_days: 28,
    timing: [36.34, 31.25, 32.30, 38.34],
    target_time: 27,

  },

  january: {

    month_name: 'Январь',
    year: 2025,
    month_days: 31,
    timing: [11.12, 27.55, 33.34, 30.26, 32.08, 39.21, 40.30, 31.42, 30.17, 27.56, 32.42, 28.45, 27.07, 27.04, 25.25, 23.19, 27.45, 35.47, 27.49, 26.34, 32.01, 34.36, 26.43, 19.33, 32.25, 35.25, 8.27, 31.31, 30.01, 32.37, 34.56],
    target_time: 26,

  },

  december: {

    month_name: 'Декабрь',
    year: 2024,
    month_days: 31,
    timing: [40.54, 37.44, 31.27, 34.07, 32.46, 39.33, 30.24, 30.15, 30.07, 30.43,
      30.51, 30.03, 30.02, 30.03, 30.53, 32.16, 31.34, 22.18, 30.43, 20.31, 30.04, 30.33, 33.29, 30.02,
      24.01, 30.54, 30.42, 15.21, 31.23, 27.57, 25.52],
    target_time: 26,

  },

  november: {

    month_name: 'Ноябрь',
    year: 2024,
    month_days: 30,
    timing: [30.08, 30.58, 28.32, 30.52, 32.40, 30.05, 25.29, 30.04, 30.03, 32.22, 32.51, 30.06,
      35.41, 35.32, 33.11, 36.26, 38.21, 40.06, 36.06, 40.20, 31.02, 31.18, 30.24, 30.30,
      33.29, 32.23, 35.56, 35.02, 33.22, 40.21],
    target_time: 25,

  },

  october: {

    month_name: 'Октябрь',
    year: 2024,
    month_days: 30,
    timing: [0, 0, 0, 18.38, 22.20, 19.42, 23.12, 23.00, 23.23, 20.45, 24.20, 23.15, 26.54, 25.44, 23.39, 29.33, 12.53, 19.12, 28.41, 30.31, 27.50, 25.02, 30.17, 28.43, 30.12, 26.23, 29.36, 32.02, 28.05, 30.01],
    target_time: 25,

  }

}


const container_months_statiastic = document.querySelector('.months_container')


const create_and_fill_month_component = function (month_name, month_days, year) {

  const month_box = document.createElement('div')
  month_box.classList.add('month_box')

  const month_title = document.createElement('div')
  month_title.classList.add('month_title')
  month_title.textContent = month_name

  const grid_days = document.createElement('div')
  grid_days.classList.add('grid_days')


  for (let i = 1; i <= month_days; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.id = `${year}_${month_name}_${i}`
    grid_days.appendChild(cell)
  }


  month_box.appendChild(month_title)
  month_box.appendChild(grid_days)

  container_months_statiastic.appendChild(month_box)

}





const highlight_cell_activity = function (year, month, arr_days, arr_date_time_values) {

  const arr_cells = document.querySelectorAll('.cell')

  arr_days.forEach(function (day, i) {

    // console.log(day);

    arr_cells.forEach(function (cell) {

      const cell_year = Number(cell.id.split("_")[0])
      const cell_month = cell.id.split("_")[1]
      const cell_day = Number(cell.id.split("_")[2])


      if (cell_year === year && cell_month === month && cell_day === i + 1) {
        // cell.classList.add('cell_bg_green')

        // cell.style.background = 'rgba(101, 224, 144)'

        // console.log(create_highlight_color(arr_date_time_values, day));



        cell.style.background = `${create_highlight_color(arr_date_time_values, day)}`



      }

    })

  })

  // console.log(arr_days);

}



const create_highlight_color = function (arr_data, day) {

  // console.log(arr_data);

  let max = arr_data[0]

  arr_data.forEach(function (number) {
    if (number > max) {
      max = number
    }
  })

  const color = `rgba(101, 224, 144, ${day / max})`

  return color

}



const handling_obj = function (obj) {

  let arr_date_time_values = []


  for (const [key, monthData] of Object.entries(obj)) {
    arr_date_time_values.push(...monthData.timing)
  }

  for (const [key, monthData] of Object.entries(obj)) {

    create_and_fill_month_component(monthData.month_name, monthData.month_days, monthData.year)

    arr_date_time_values.push(...monthData.timing)

    highlight_cell_activity(monthData.year, monthData.month_name, monthData.timing, arr_date_time_values)

  }



}


handling_obj(months_data)


