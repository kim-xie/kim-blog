<template>
  <div>
    <div style="text-align: center">
      <button
        type="button"
        @click="downloadPdf"
        style="margin: 20px auto; cursor: pointer"
      >
        下载简历
      </button>
    </div>
    <div id="resumeWrap" class="resumeWrap">
      <div class="resumeTitle">个人简历</div>
      <div class="resumeContent">
        <div class="resumeRight">
          <div class="rightItem rightItem1">
            <div class="avatar">
              <img class="avatarImg" src="../public/img/snn.jpg" alt="" />
            </div>
          </div>
          <div class="rightItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/gerxinxi.svg" alt="" />
              基本信息
            </div>
            <div class="itemContent">
              <div class="itemWrap">
                <span class="itemLabel"
                  >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span
                >
                <span class="itemValue">石慧娟</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel"
                  >经&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验：</span
                >
                <span class="itemValue">8年</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel"
                  >婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姻：</span
                >
                <span class="itemValue">已婚已育</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel"
                  >住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</span
                >
                <span class="itemValue">深圳宝安</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel"
                  >电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span
                >
                <span class="itemValue">18576687769</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel"
                  >邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span
                >
                <span class="itemValue">18576687769@163.com</span>
              </div>
            </div>
          </div>
          <div class="rightItem">
            <div class="itemTitle">
              <img
                class="itemIcon"
                src="../public/img/jiaoyubeijing.svg"
                alt=""
              />
              教育背景
            </div>
            <div class="itemContent">
              <div class="itemWrap">
                <span class="itemLabel">学校名称：</span>
                <span class="itemValue">桂林航天工业学院</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel">所学专业：</span>
                <span class="itemValue">会计专业/统招专科</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel">学校名称：</span>
                <span class="itemValue">桂林电子科技大学</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel">所学专业：</span>
                <span class="itemValue">会计专业/自考本科</span>
              </div>
              <div class="itemWrap">
                <span class="itemLabel">就读时间：</span>
                <span class="itemValue">2012-09 ~ 2015-06</span>
              </div>
            </div>
          </div>
          <div class="rightItem">
            <div class="itemTitle">
              <img
                class="itemIcon"
                src="../public/img/qiuzhiyixiang.svg"
                alt=""
              />
              求职意向
            </div>
            <div class="itemContent">
              <div class="itemWrap">
                <!-- <span class="teachItem">财务BP/财务主管/财务经理</span> -->
                <p class="teachItem">财务BP</p>
                <p class="teachItem">财务经理</p>
                <p class="teachItem">财务主管</p>
              </div>
            </div>
          </div>
          <div class="rightItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/drxx14.svg" alt="" />
              个人技能
            </div>
            <div class="itemContent">
              <p class="teachItem">1、SAP、金蝶（熟练）</p>
              <p class="teachItem">2、数字化工具（熟练）</p>
              <p class="teachItem">3、office办公软件（精通）</p>
              <p class="teachItem">4、IPO项目经验</p>
              <p class="teachItem">5、团队管理经验</p>
              <p class="teachItem">6、初级会计职称</p>
            </div>
          </div>
        </div>
        <div class="resumeLeft">
          <div class="leftItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/drxx20.svg" alt="" />
              工作经历
            </div>
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">迪阿股份有限公司(已上市)</span>
                  <span class="itemLabel">会计主管</span>
                  <span class="itemLabel">2016.07-2023.03</span>
                </p>
              </div>

              <div class="descItem">
                <div class="itemValue">
                  <p class="itemLabel">1、应收账款管理</p>
                  <ul>
                    <li>集团各平台、各渠道收款情况分析，客户退款原因分析；</li>
                    <li>
                      制定应收账款管理制度，统筹并督促业务部门开展应收账款催收工作；对逾期账款专项跟进；
                    </li>
                    <li>
                      对客户进行分析，将客户划分为A\B\C\D等级，对不同等级客户建立不同的合作模式；
                    </li>
                    <li>应收账款账龄分析，应收账款逾期专项分析；</li>
                    <li>统筹集团各渠道收款核销、客户退款单审核；</li>
                    <li>
                      统筹集团下所有店铺租金等费用财务核算，应收账款、其他应收款账务核算，实现系统化和标准化。
                    </li>
                  </ul>

                  <p class="itemLabel">2、集团收入、集团税务管理</p>
                  <ul>
                    <li>
                      统筹集团所有公司（母公司、子公司、分公司）纳税申报和账务处理，保障税务合规；
                    </li>
                    <li>
                      统筹完成全国各税务机关的税务要求，例如：及时提供预测数据及临时性税务数据要求，维护工商、税务等外部联系；
                    </li>
                    <li>集团税务筹划方案的落地执行；</li>
                    <li>协作对接公司新业务相关的收入确认及税务影响评估；</li>
                    <li>集团收入分析。</li>
                  </ul>
                  <p class="itemLabel">3、系统对接、系统优化</p>
                  <ul>
                    <li>
                      SAP系统优化：为提供工作质量、工作效率，对SAP的应收账款模块、收入模块、税务模块、费用模块提需求、测试、验收及后期优化工作；
                    </li>
                    <li>OA系统、中台系统财务模块优化工作。</li>
                  </ul>
                  <p class="itemLabel">4、审计对接</p>
                  <ul style="margin-bottom: 0">
                    <li>
                      公司IPO上市审计对接（收入模块、税务模块、应收账款及其他应收款模块）；
                    </li>
                    <li>公司上市后审计对接（内部审计、外部审计）。</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">深圳真瑞生物科技有限公司</span>
                  <span class="itemLabel">会计专员</span>
                  <span class="itemLabel">2015.07-2016.06</span>
                </p>
              </div>

              <div class="descItem">
                <div class="itemValue">
                  <ul style="margin-bottom: 0">
                    <li>及时、准备审核费用报销单，并账务处理；</li>
                    <li>收入确认，应收账款等账务处理；</li>
                    <li>购买发票、开票开具，纳税申报。</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div class="itemContent">
              <div class="oneline">
                <p class="teachItem onelineItem">
                  <span class="itemLabel">华为技术有限公司</span>
                  <span class="itemLabel">财务助理</span>
                  <span class="itemLabel">2015.01-2015.06</span>
                </p>
              </div>

              <div class="descItem">
                <div class="itemValue">
                  <ul style="margin-bottom: 1px">
                    <li>负责供应链财经费用预算收集，费用分析；</li>
                    <li>负责供应链物流基础数据处理，且制成SOP流程；</li>
                    <li>负责供应链财经档案管理；</li>
                    <li>配合主管会计完成其他工作。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="leftItem">
            <div class="itemTitle">
              <img class="itemIcon" src="../public/img/pingjia.svg" alt="" />
              自我评价
            </div>
            <div class="itemContent">
              <div class="descItem">
                <div class="itemValue">
                  <ul style="margin-bottom: 0">
                    <li>
                      拥有IPO上市经验，具备较强的风险管控意识，有丰富的收入、税务、应收账款管理经验；
                    </li>
                    <li>善于从财务角度理解业务，能够协同多方推进解决问题；</li>
                    <li>拥有团队管理经验，较强的组织协调能力，抗压能力强；</li>
                    <li>较强的自驱力，适应业务的快速变化。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        x:
          (window.innerWidth -
            document.querySelector("#resumeWrap").clientWidth) /
          2,
        backgroundColor: "#fff",
        scale: window.devicePixelRatio * 2,
      }).then(function (canvas) {
        // console.log('options',canvas)
        // document.body.appendChild(canvas);

        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;

        //未生成pdf的html页面高度
        var leftHeight = contentHeight;

        //页面偏移
        var position = 0;

        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight + 45;

        var pageData = canvas.toDataURL("image/jpeg", 1.0);

        var pdf = new jsPDF("", "pt", "a4");
        // console.log("pdf", pdf);

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
        pdf.save("石慧娟 - 求职简历.pdf");
      });
    },
  },
};
</script>
<style lang="less" scoped>
hr {
  margin-top: 20px;
}
.resumeWrap {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 860px;
  height: 100%;
  margin: 0 auto;
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
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.resumeLeft {
  flex: 1;
  margin: 16px 16px 16px 0;
  display: flex;
  flex-direction: column;
}
.resumeRight {
  width: 230px;
  margin: 16px;
}
.leftItem {
  padding: 16px 16px 12px 16px;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #f4f4f4;
}
.rightItem {
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #f4f4f4;
}
.rightItem1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.oneline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .onelineItem {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      display: inline-block;
      width: 33%;
      font-weight: 600;
      font-size: 13px;

      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
  }
}
.avatar {
  overflow: hidden;
  width: 120px;
  height: 120px;
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
  vertical-align: middle;
  margin-top: 8px;
}
.itemTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-weight: 600;
}
.itemIcon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.itemContent {
  padding-top: 8px;
}
.itemWrap {
  padding-top: 6px;
  font-size: 12px;
}
.itemLabel {
  color: #1e2022;
  font-weight: 600;
  margin: 6px 0;
}
.itemValue {
  flex: 1;
  color: #52616b;

  ul {
    margin: 8px 0;
  }
}
.teachItem {
  margin: 0;
  padding-bottom: 2px;
  font-size: 12px;
  // color: #222831;
}
.descItem {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  // padding-top: 8px;
  font-size: 12px;
  color: #222831;
}
.descLabel {
  // color: #1e2022;
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
  font-size: 12px;
  padding: 4px 8px;
  background: #ebecf1;
  border-radius: 16px;
  margin: 6px 6px 6px 0;
  color: #222831;
}
</style>