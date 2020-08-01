get the data from the attempts belonging to challenges
filter the data by the complete attribute setting 1 variable to the true and other false
use a template literal to append this data to the html

 
     `
 <script>
  let AttemptChart = new Chart(chart,{
      type: 'doughnut',
      data: {
          labels:['complete','incomplete'],
          datasets:[{
              label: 'population',
              data:[${truthy.length}, ${falsy.length}]
           } ]
      },
      options:{
          responsive: false
      }
  })
</script>
`