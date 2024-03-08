import value from 'assets/scss/_themes-vars.scss';
// eslint-disable-next-line
// export default {
//   height: 228,
//   type: 'donut',
//   options: {
//     dataLabels: {
//       enabled: false
//     },
//     labels: ['Youtube', 'Facebook', 'Twitter'],
//     legend: {
//       show: true,
//       position: 'bottom',
//       fontFamily: 'inherit',
//       labels: {
//         colors: 'inherit'
//       }
//     },
//     itemMargin: {
//       horizontal: 10,
//       vertical: 10
//     },
//     colors: [value.error, value.primary, value.info]
//   },
//   series: [200, 975, 500]
// };

/**
 * 
 * @param {ArrayObject} data
 * @returns {}
 */
export const generateChartData = (data) => {
  console.log('chartData...',data)
  return{
    height: 228,
    type: 'donut',
    options: {
      dataLabels: {
        enabled: false
      },
      labels: data ? data.map((obj)=>obj['label']) : [],
      // ['Youtube', 'Facebook', 'Twitter'],
      legend: {
        show: true,
        position: 'bottom',
        fontFamily: 'inherit',
        labels: {
          colors: 'inherit'
        }
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10
      },
      colors: data ? data.map((obj)=>obj['color']) : []
      // [value.error, value.primary, value.info]
    },
    series: data ? data.map((obj)=>obj['data']) : []
    // [1258, 975, 500]
  };
}