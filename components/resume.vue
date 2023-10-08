<template>
  <div>
    <div ref="resumeWrap" id="resumeWrap" class="resumeWrap">
      <div class="resumeTitle">个人简历</div>
      <div class="resumeContent">
        <div class="resumeTop">
          <!-- <div class="avatarWrap">
          <div class="avatar">
            <img class="avatarImg" src="../public/img/avator.png" alt="">
          </div>
        </div> -->
          <div class="userInfoWrap" style="margin-top: 8px">
            <div class="userInfoItem">
              <div class="rightItem">
                <div class="itemTitle">
                  <img
                    class="itemIcon"
                    src="../public/img/gerxinxi.svg"
                    alt=""
                  />
                  基本信息
                </div>
                <div class="itemContent userInfo">
                  <div class="row">
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">姓 名：</span>
                      <span class="itemValue">谢顶金</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">性 别：</span>
                      <span class="itemValue">男</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">婚 姻：</span>
                      <span class="itemValue">已婚</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">电 话：</span>
                      <span class="itemValue">18576648902</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">邮 箱：</span>
                      <span class="itemValue">18576648902@163.com</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">住 址：</span>
                      <span class="itemValue">深圳宝安</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">工 作：</span>
                      <span class="itemValue">7年</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">状 态：</span>
                      <span class="itemValue">离职</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">职 位：</span>
                      <span class="itemValue">高级前端工程师</span>
                    </div>
                    <div class="itemWrap lineHeight">
                      <span class="itemLabel">学 历：</span>
                      <span class="itemValue">本科 (2012 - 2016)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resumeMiddle">
          <div class="leftItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/drxx14.svg" alt="" />
              专业技能
            </div>
            <!-- 了解、熟悉、掌握、熟练、精通 -->
            <div class="itemContent">
              <p class="teachItem">
                1、熟练掌握HTML、CSS(Less\Sass)、JS、ES6、TS等前端技术，了解浏览器运行原理、缓存机制及网络基础
              </p>
              <p class="teachItem">
                2、熟练掌握前端工程化打包工具Webpack、Vite、Rollup和Babel的核心原理及开发配置与优化
              </p>
              <p class="teachItem">
                3、熟练掌握React、Vue、Router核心原理及开发技巧，熟悉H5、PC、小程序、大屏数据可视化开发技术
              </p>
              <p class="teachItem">
                4、熟练运用D3、Antv、Echart、Lottie、Canvas、Svg、地图等相关数据可视化技术
              </p>
              <p class="teachItem">
                5、熟悉项目的搭建、开发、部署完整流程（CI/CD），熟悉Nginx的基本配置及Linux日常使用命令
              </p>
              <p class="teachItem">
                6、掌握NodeJs、Nestjs、Redis、Mysql、Kafka、ElasticSearch和跨端技术Taro、Uni-app开发方式
              </p>
              <p class="teachItem">
                7、掌握前端性能优化、低代码、前端监控、微前端、SSR、工程化架构等相关技术，了解相关数据结构与算法
              </p>
              <p class="teachItem">
                8、了解Docker、Serverless、GraphQL、Python，有过开发部署实践经验，了解Flutter、React
                Native原生应用开发
              </p>
            </div>
          </div>

          <div class="leftItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/pingjia.svg" alt="" />
              自我评价
            </div>
            <div class="itemContent">
              <p class="teachItem">
                1、7年前端工作经验，具备较丰富的项目实战经验及良好的编码习惯，熟悉项目开发部署流程，能快速响应需求并上手新项目
              </p>
              <p class="teachItem">
                2、工作态度端正，具备良好的分析问题、解决问题以及团队协作能力，有较强的抗压能力和工作热情，自驱力及责任心强
              </p>
              <p class="teachItem">
                3、关注前端前沿技术，具备良好的学习能力，能够快速学习一门新技术并实践，做事重视细节和结果，愿意接受新挑战
              </p>
              <p class="teachItem">
                4、写过公众号、简书(前端进阶体验)，开发过命令行工具等一些npm包，为github开源项目贡献过代码，喜欢尝试新技术
              </p>
            </div>
          </div>

          <div class="leftItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/drxx20.svg" alt="" />
              工作经历
            </div>
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem">
                  <span class="itemLabel">2021/03 ~ 2023/05</span>
                  <span class="itemLabel ml-12">顺丰科技集团</span>
                  <span class="itemLabel ml-12">线上用户增长中心</span>
                  <span class="itemLabel ml-12">高级前端开发工程师</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">工作描述：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、参与部门C端小游戏，H5活动，PC管理端，node服务端的业务开发以及日常的迭代升级维护
                  </p>
                  <p class="descValue">
                    2、参与日活超千万的用户运营活动项目前端性能优化工作，性能提升效果明显，提升用户体验
                  </p>
                  <p class="descValue">
                    3、主导企业微信项目、低代码平台、前端监控平台SDK的架构设计以及全栈开发，参与灰度发布方案设计
                  </p>
                  <p class="descValue">
                    4、负责C端项目的跨端统一SDK以及统一工具类的设计开发封装，统一规范提升开发效率
                  </p>
                  <p class="descValue">
                    5、负责设计与搭建部门各个团队都适用的通用管理系统脚手架(新技术栈+基础功能+业务功能适配)
                  </p>
                  <p class="descValue">
                    6、负责整个部门前后端接口管理平台的开发改造，统一规范各个团队的api输出，提升团队开发效率
                  </p>
                  <p class="descValue">
                    7、参与两届顺丰科技集团举办的编程马拉松比赛并都获得了较好的成绩，为部门争取影响力
                  </p>
                  <p class="descValue">
                    8、作为团队核心成员，担任过前端招聘面试官、新员工导师，参与部门内部技术分享
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem">
                  <span class="itemLabel">2019/03 ~ 2021/03</span>
                  <span class="itemLabel ml-12"
                    >平安智慧城市科技股份有限公司</span
                  >
                  <span class="itemLabel ml-12">智慧交通及社区事业部</span>
                  <span class="itemLabel ml-12">前端开发工程师</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">工作描述：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、参与团队产品核心模块的研发，开发涉及PC管理系统、大屏数据可视化、小程序，以及历史项目的迭代优化升级
                  </p>
                  <p class="descValue">
                    2、担任小组长，负责参与需求评审，制定开发计划，合理排期推进项目，code
                    review，确保项目按时按质完成交付
                  </p>
                  <p class="descValue">
                    3、作为核心成员，负责项目的基础建设、框架搭建、核心功能开发、部署上线等工作，承担重、难点的技术攻克
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem">
                  <span class="itemLabel">2016/07 ~ 2019/03</span>
                  <span class="itemLabel ml-12">深圳竹云科技有限公司</span>
                  <span class="itemLabel ml-12">产品研发部</span>
                  <span class="itemLabel ml-12">软件工程师</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">工作描述：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、负责公司系统的定制化开发，前端开发涉及ui更新、浏览器兼容、响应式、性能优化等，使用java
                    web技术栈
                  </p>
                  <p class="descValue">
                    2、负责前端页面(jsp)的重构，采用新的ui框架，以及新的前端技术栈进行重构，专注于提升界面的用户体验
                  </p>
                  <p class="descValue">
                    3、根据不同项目做针对性的定制开发，前后参与了广发银行、东莞农商银行、金证、深圳公立医院、华侨城等项目
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="leftItem">
            <div class="itemTitle">
              <img
                class="itemIcon"
                src="../public/img/_xiangmujingyan.svg"
                alt=""
              />
              项目经验
            </div>
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">2021/03 ~ 2023/05</span>
                  <span class="itemLabel ml-12">顺丰速运用户运营活动</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">项目简介：</div>
                <div class="itemValue">
                  该项目是顺丰速运内部的用户运营活动部分，属于移动端跨端项目，目前会员数量超2亿，日活在千万级别。我们的业务主要和散单用户运营相关，目的是从公域流量转化为私域流量，提升用户粘度，促进成交转化
                </div>
              </div>
              <div class="descItem">
                <div class="descLabel">工作职责：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、参与项目需求评审，工时排期，根据UI进行页面开发、自测，进行code
                    review，按时保质完成交付
                  </p>
                  <p class="descValue">
                    2、业务之外专注项目的优化工作，挖掘项目中存在的问题，然后排期优化，旨在提升页面性能和用户体验
                  </p>
                  <p class="descValue">
                    3、项目一般会涉及动画以及活动组件，开发过程抽取活动组件或业务组件，方便跨团队之间复用，提升开发效率
                  </p>
                  <p class="descValue">
                    4、除了日常的业务需求开发，还参与了前端专项建设，如性能优化、前端监控、服务端渲染、微前端等
                  </p>
                </div>
              </div>
              <p class="teachItem">
                <span class="itemLabel">相关技术：</span>
                <span class="itemValue">
                  react
                  hook、react-router-cache、fetch、lottie、ts、ant-design、vite、less、nodejs、redis、kafka、elasticSearch
                </span>
              </p>
            </div>

            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">2019/12 ~ 2020/06</span>
                  <span class="itemLabel ml-12">智慧交通管控系统</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">项目简介：</div>
                <div class="itemValue">
                  信控系统是我们畅通业务线的核心产品，主要是给交警部门提供一系列的城市交通拥堵解决方案。而信号优化系统则属于其中一个环节，其主要是对交通路口的时段、信号灯及干道进行优化。干道协调优化是对多个路口进行信号灯协调优化，使多路口之间达到一个最优的可持续通行时间，解决城市道路路口排队拥堵问题，达到一路畅通的效果。通过地图、图表、图形等可视化技术做到直观的展示信号灯控制效果。最终将优化后的方案下发到信号灯中。系统专注于提升交警工作效率
                </div>
              </div>
              <div class="descItem">
                <div class="descLabel">工作内容：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、运用D3可视化技术实现绿波优化工具、流量图、路口渠化图、配时方案图等重、难点的技术攻克
                  </p>
                  <p class="descValue">
                    2、负责项目核心模块的开发，能够高度还原ui设计稿，引入动效及图形，直观展示交通指标效果
                  </p>
                  <p class="descValue">
                    3、为团队内部开发路口配置数据录入配置工具，提升团队工作效率，为产品上线与维护提供技术支持
                  </p>
                </div>
              </div>
              <p class="teachItem">
                <span class="itemLabel">相关技术：</span>
                <span class="itemValue">
                  react、mobx、react-router、webpack、echart、antv、D3、凯立德地图、websocket、axios、elementui、sass
                </span>
              </p>
            </div>
            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">2020/04 ~ 2020/08</span>
                  <span class="itemLabel ml-12">随手拍小程序</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">项目简介：</div>
                <div class="itemValue">
                  随手拍是交通违法举报的一个toC端应用，包含小程序端和H5端以及后台审核系统，用户可以通过应用端对交通的多种违法行为进行举报，举报成功会有相应的奖励。平台旨在提倡治理文明交通，全民参与
                </div>
              </div>
              <div class="descItem">
                <div class="descLabel">工作职责：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、负责优化维护已上线的随手拍举报系统，并且根据不同城市的需求进行定制化开发
                  </p>
                  <p class="descValue">
                    2、使用原生的微信小程序开发框架，熟悉其开发结构和模式，根据客户反馈，对项目进行体验优化、升级
                  </p>
                  <p class="descValue">
                    3、掌握小程序开发构建部署完整的流程，提升用户体验交互，能够很好的完成项目交付
                  </p>
                </div>
              </div>
              <p class="teachItem">
                <span class="itemLabel">相关技术：</span>
                <span class="itemValue">
                  原生微信小程序框架、腾讯地图、刷脸认证、uni-app
                </span>
              </p>
            </div>

            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">2016/08 ~ 2019/03</span>
                  <span class="itemLabel ml-12">统一身份认证管理系统</span>
                </p>
              </div>
              <div class="descItem">
                <div class="descLabel">项目简介：</div>
                <div class="itemValue">
                  统一身份认证管理系统主要用于身份自动化管理，承接柜面外围系统和其他新系统，行员可通过该系统进行统一认证、应用单点登录、账号申请、权限控制、人员调动、工作流审批等操作
                </div>
              </div>
              <div class="descItem">
                <div class="descLabel">工作职责：</div>
                <div class="itemValue">
                  <p class="descValue">
                    1、前后端没有分离，工作内容偏向于全栈开发，主要编写jsp、Java、html、css代码，熟悉后台ssm框架、数据库操作
                  </p>
                  <p class="descValue">
                    2、参与产品的定制化开发，负责restful风格的接口改造，使用新技术进行项目重构
                  </p>
                  <p class="descValue">
                    3、参与前端UI框架改造，前端开发涉及浏览器的兼容性、响应式、性能调优等
                  </p>
                </div>
              </div>
              <p class="teachItem">
                <span class="itemLabel">相关技术：</span>
                <span class="itemValue">
                  java、jsp、layerui、js、ajax、jquery、html、css、vue、jwt、elementui、gulp、flyjs、easy_mock
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align: center; position: fixed; right: 0; bottom: 20px">
      <button type="button" @click="downloadPdf">下载</button>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export default {
  mounted() {
    // console.log('挂载成功')
    // this.downloadPdf();
  },
  methods: {
    downloadPdf: () => {
      html2canvas(document.querySelector("#resumeWrap"), {
        width: document.querySelector("#resumeWrap").clientWidth,
        backgroundColor: "#dfe2e5",
        scale: window.devicePixelRatio * 2, // 增加清晰度
      }).then(function (canvas) {
        // console.log("options", canvas);
        // document.body.appendChild(canvas);

        let contentWidth = canvas.width;
        let contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        let pageHeight = (contentWidth / 592.28) * 841.89;

        //未生成pdf的html页面高度
        let leftHeight = contentHeight;

        //页面偏移
        let position = 0;

        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight + 45;

        let pageData = canvas.toDataURL("image/jpeg", 1.0);

        let pdf = new jsPDF("", "pt", "a4");
        console.log("pdf", pdf);

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          // pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight + 20);
          while (leftHeight > 0) {
            pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        pdf.save("谢顶金 - 前端求职简历.pdf");
      });
    },
  },
};
</script>
<style lang="less" scoped>
button {
  position: relative;
  height: 60px;
  width: 60px;
  margin: 0 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  letter-spacing: 2px;
  color: #3d4351;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 rgba(175, 179, 185, 0.1);
}

button:first-child,
button:first-child:hover {
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}

button:last-child,
button:last-child:hover {
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

button:first-child::before,
button:last-child::before {
  content: "";
  position: absolute;
  background: inherit;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

button:last-child:before,
button:last-child:before,
button:first-child:hover:before,
button:last-child:hover:before {
  opacity: 1;
  z-index: -1;
}

button,
button:hover {
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

hr {
  margin: 6px auto;
  border: 0;
  height: 1px;
  background: #858484;
  background-image: linear-gradient(to right, #fefefe, #fefefe, #fefefe);
}
.resumeWrap {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 910px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff; //#dfe2e5; //#02c59d;
  padding: 0 24px;
}
.resumeTitle {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-family: PingFang SC;
  font-weight: 600;
  font-size: 24px;
  color: #393e46;
  text-align: center;
}
.resumeContent {
  overflow: hidden;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  // padding: 0 24px;
}
.resumeTop {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.oneline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .onelineItem {
    width: 50%;
  }
}
.avatar {
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.avatarImg {
  width: 100%;
  height: 100%;
}
.itemName {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
}
.userInfoWrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
}
.userInfo {
  display: flex;
  flex-direction: column;
  width: 100%;
  .row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .itemWrap {
    padding-left: 24px;
    &:nth-child(1),
    &:nth-child(6) {
      width: 17%;
    }
    &:nth-child(2),
    &:nth-child(7) {
      width: 13%;
    }
    &:nth-child(3),
    &:nth-child(8) {
      width: 14%;
    }
    &:nth-child(4),
    &:nth-child(9) {
      width: 23%;
    }
    .itemLabel {
      font-weight: 500;
    }
  }
}
.itemTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-weight: 600;
  margin-bottom: 6px;
}
.itemIcon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}

.itemWrap {
  font-size: 14px;
}
.lineHeight {
  line-height: 26px;
}
.itemLabel {
  color: #1e2022;
  font-weight: 600;
}
.itemValue {
  flex: 1;
  color: #52616b;
}

.ml-12 {
  margin-left: 14px;
}

.resumeMiddle {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  .itemContent {
    padding-left: 24px;
  }
}
.userInfoItem {
  // height: 190px;
  width: 100%;
  .rightItem {
    padding: 14px;
    border-radius: 6px;
    background-color: #f4f4f4;
    // box-sizing: border-box;
    // width: 100%;
    // height: 100%;
  }
}

// .userInfoItem:not(:nth-child(2)) {
//   .rightItem {
//     height: calc(~"100% - 32px");
//   }
// }
.leftItem {
  padding: 12px;
  margin-bottom: 14px;
  border-radius: 6px;
  background-color: #f4f4f4;
}
.leftItem:last-child {
  margin-bottom: 0;
}
.itemLabel {
  color: #1e2022;
  font-weight: 600;
}
.itemValue {
  flex: 1;
  color: #52616b;
}
.teachItem {
  margin: 0;
  padding-top: 5px;
  font-size: 14px;
  color: #222831;
}
.descItem {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding-top: 5px;
  font-size: 14px;
  color: #222831;
}
.descLabel {
  color: #1e2022;
  font-weight: 600;
}
.descValue {
  flex: 1;
  margin-top: 0;
  margin-bottom: 4px;
  color: #52616b;
}
.favoItem {
  display: inline-block;
  font-size: 14px;
  padding: 4px 8px;
  background: #ebecf1;
  border-radius: 16px;
  margin: 2px 3px 0 0;
  color: #222831;
}
</style>