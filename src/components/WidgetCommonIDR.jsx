const WidgetCommonIDR = ({value}) => {
  return <>{value.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</>
}

export default WidgetCommonIDR;