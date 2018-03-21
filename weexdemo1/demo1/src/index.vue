<template>
  <div class="wrapper">
    <!-- <test class="test"></test> -->
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <text @click="click">调用</text>
    <text @click="click1">调用2</text>
    <text @click="click2">调用3</text>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
    };
  },
  methods: {
    click() {
      console.log(1111);
      /*
          var eventModule =  weex.requireModule('LQWeex');
          console.log(eventModule);
          eventModule.getUrl('baiud',function(res){
            console.log(res);
          });
        */
      // var sheetModule = weex.requireModule("CDDActionSheet");
      // var eventModule = weex.requireModule("CDDCameraModule");
      // var uploadImagemodule = weex.requireModule("CDDQiNiuModule");
      // console.log(eventModule);
      // var List = ["相机", "从相册选取"];
      // sheetModule.setCancelButtonTitleColor('','',10);
      // sheetModule.initWithTitle("上传照片", "取消", List, function(res) {
      //   if (res != undefined) {
      //     eventModule.openCameraType(res, 0, function(res) {
      //       console.log(res);
      //       if (res != undefined) {
      //         uploadImagemodule.setQiNiuToken(
      //           "6bN0m2sxJU5dfG1s-7hlf9vqBBxLcUXinrDsDf37:BJrnykGrKe21Nz49pMIZp5W9niw=:eyJzY29wZSI6ImNkZGFuZyIsImRlYWRsaW5lIjoxNTIxNTMxNTMyfQ==",
      //           res,
      //           function(res) {
      //             console.log(res);
      //           }
      //         );
      //       }
      //     });
      //   }
      // });
      // sheetModule.setTitleColor('ff0000',10);

      var sheetModule = weex.requireModule("CDDActionSheet");
      var eventModule = weex.requireModule("CDDCameraModule");
      var uploadImagemodule = weex.requireModule("CDDQiNiuModule");
      console.log(eventModule);
      var List = ["相机", "从相册选取"];
      
      sheetModule.initWithTitle("", "取消", List, function(res) {
        if (res != undefined) {
        }
      });
      
    },
    click1() {
      var sheetModule = weex.requireModule("CDDActionSheet");
      var List = ["相机", "从相册选取"];
      
      sheetModule.initWithTitle("上传图片", "取消", List, function(res) {
        if (res != undefined) {
        }
      });
      sheetModule.setTitleColor("ff0000", 10);
    },
    click2(){
      var sheetModule = weex.requireModule("CDDActionSheet");
      var List = ["测试1", "测试2","测试3"];
      
      sheetModule.initWithTitle("", "取消", List, function(res) {
        if (res != undefined) {
        }
      });
      var colorparm = {
        color:'42426f',
        font:'15'
      }
      var otherParm = {
        titleColor:'42426f',
       font:'15'

      }
      sheetModule.setCancelButtonTitleColorOrbgColorOrfont(colorparm);
      sheetModule.setTitleColor("ff0000", 10);
      sheetModule.setButtonIndexTitleColorOrbgColorOrfontOrIndex(otherParm);
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
.test {
  left: 30px;
  margin-top: 30px;
}
</style>
