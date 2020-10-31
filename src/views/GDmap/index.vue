<template>
  <div class="app-container">
    <p>{{ where }}</p>
    <div id="container" />
  </div>
</template>
<!--TODO:高德地图-->
<script>
import AMapLoader from '@amap/amap-jsapi-loader' // 地图 加载 npm的方式安装JSAPI Loader
let that
const key = 'a968ea2a5cb72aea9efc8880d84c26c5'
let marker = '' // 定位点
let map // 地图
let newAMap // ammap对象
let address // 地址
const postion = [116.4, 39.9] // 地位坐标
const getMap = () => {
  AMapLoader.load({
    key: key, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.DistrictSearch', 'AMap.PlaceSearch', 'AMap.Geocoder'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: '1.1', // AMapUI 缺省 1.1
      plugins: [] // 需要加载的 AMapUI ui插件
    },
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: '1.3.2' // Loca 版本，缺省 1.3.2
    }
  })
    .then(AMap => {
      newAMap = AMap
      // console.log(newAMap)
      map = new newAMap.Map('container', {
        resizeEnable: true,
        center: postion
      })
      map.on('click', setMap)
      //   console.log(map)
    })
    .catch(e => {
      console.log(e)
    })
}
// 设置坐标点
const setMaker = value => {
  map.remove(marker)
  const { lat, lng } = value
  console.log(lat, lng)
  marker = new newAMap.Marker({
    position: new newAMap.LngLat(lng, lat) // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  })
  map.add(marker)
  getAddress([lng, lat])
}
// 绑定的单击事件,来获取坐标
const setMap = e => {
  //   console.log(e)
  setMaker(e.lnglat)
}
// 获取物理地址信息
const getAddress = loc => {
  var geocoder = new newAMap.Geocoder({
    radius: 1000,
    extensions: 'all'
  })
  geocoder.getAddress(loc, function(status, result) {
    if (status === 'complete' && result.info === 'OK') {
      geocoder_CallBack(result)
    }
  })
}
const geocoder_CallBack = data => {
  address = data.regeocode.formattedAddress // 返回地址描述
  gdmap.methods.submit()
  // console.log(address)
}

// function searchCity(value) {
//   var districtSearch = new newAMap.DistrictSearch({
//     // 关键字对应的行政区级别，country表示国家
//     level: 'country',
//     //  显示下级行政区级数，1表示返回下一级行政区
//     subdistrict: 1
//   })
//   // 搜索所有省/直辖市信息
//   districtSearch.search(value, function(status, result) {
//     console.log(status, result)
//     // 查询成功时，result即为对应的行政区信息
//   })
// }

// function searchCity(value) {
//   var placeSearch = new newAMap.PlaceSearch({
//   // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
//     city: value
//   })
//   placeSearch.search(value, function(status, result) {
//     console.log(status, result)
//     // 查询成功时，result即对应匹配的POI信息
//   })
// }
// searchCity()
// getMap()
const gdmap = {
  data() {
    return {
      city: '',
      where: ''
      // that: ''
    }
  },
  mounted() {
    that = this
    getMap()
    // console.log(that)
  },
  methods: {
    // 用ajax请求接口获取实际的物理地址，（逆编码）
    newAJAX() {
      const xmlhttp = new XMLHttpRequest()
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const data = JSON.parse(xmlhttp.responseText)
          // console.log(data)
          if (data.geocodes.length > 0) {
            const l = data.geocodes[0].location.split(',')
            postion[0] = l[0]
            postion[1] = l[1]
            getMap()
          }
        }
      }
      xmlhttp.open(
        'GET',
        `http://restapi.amap.com/v3/geocode/geo?key=${key}&s=rsv3&city=35&address=${this.city}`,
        true
      )
      xmlhttp.send()
    },
    search() {
      this.newAJAX()
      // console.log(this.city)
      // searchCity(this.city)
    },
    submit() {
      that.where = address
      console.log(this.address)
      that.$emit('change', address)
    }
  }
}
export default gdmap
</script>
<style>
#container {
  width: 700%;
  height: 600px;
}
</style>
