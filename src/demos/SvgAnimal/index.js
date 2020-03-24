import React from "react";

export default () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" style={{background: "linear-gradient(0deg,#fff,#d1f7ff)"}}>
            <image id="image2" href={require("./images/animate4.png")} x="938" y="299"></image>
            <image id="image3" href={require("./images/animate3.png")} y="187" x="-223"></image>
            <image href={require("./images/animate2.png")} x="970" y="300"></image>
            {/*按钮图片*/}
            <image id="picture_button" href={require("./images/animate4_2.png")} x="950" y="286" cursor="pointer">
            <animateMotion path="M0,0 L0,7 Z" begin="picture_button.click" dur=".8s"/>
            </image>
            <image href={require("./images/animate4_1.png")} x="901" y="290"></image>

            <image href={require("./images/animate1_1.png")} x="673" y="460"></image>
            {/*两个按钮图片*/}
            <image href={require("./images/animate6.png")} x="604" y="470"></image>
            {/*第三张图*/}
            <image href={require("./images/animate7.png")} x="290" y="243">
            <animateMotion id="course_move1" path="M0,0 L-20,-62 L0,-124 L0,0" begin="picture_button.click+2.2s" dur="3.5s"/>
            </image>
            {/*第一张图*/}
            <image href={require("./images/animate7.png")} x="290" y="113" opacity=".4">
            <animateMotion id="course_move3" path="M0,0 L0,124 L-20 62 L0,0" begin="picture_button.click+2.2s" dur="3.5s"/>
            </image>
            {/*中间的图*/}
            <image href={require("./images/animate7.png")} x="270" y="185">
            <animateMotion id="course_move2" path="M0,0 L20,-62 L20,62 L0,0" begin="picture_button.click+2.2s" dur="3.5s"/>
            </image>
            {/*手*/}
            <image href={require("./images/animate9.png")} x="428" y="275">
            <animateMotion id="course_move4" path="M0,0 L3,-2 L0,0 L3,-2 L0,0 L3,-2" begin="picture_button.click+2.2s" dur="3.5s"/>
            </image>
            <image href={require("./images/animate8.png")} x="430" y="258"></image>
            {/*台阶*/}
            <image href={require("./images/animate10_1.png")} x="470" y="650">
            <animateMotion id="course_move5" path="M0,0 L-1,-61" fill="freeze" begin="picture_button.click+2.2s" dur=".8s"/>
            </image>
            <image href={require("./images/animate10_2.png")} x="530" y="660">
            <animateMotion id="course_move6" path="M0,0 L0,-40" fill="freeze" begin="picture_button.click+3s" dur=".8s"/>
            </image>
            <image href={require("./images/animate1.png")} x="678" y="543"></image>
            <image href={require("./images/animate13.png")} x="912" y="773">
            <animateMotion path="M0,0 L0,-83" fill="freeze" begin="picture_button.click+7.4s" dur="0.6s"/>
            </image>
            <image href={require("./images/animate12.png")} x="875" y="807"></image>
            <image href={require("./images/animate15.png")} x="998" y="679" opacity='.4'>
            <animateMotion path="M0,0 L0,60 L0,120 L62,90 L0,0" begin="picture_button.click+7.4s" dur="5s"/>
            <animate attributeName="opacity" from=".4" to=".5" begin="picture_button.click+7.4s" dur="1s"/>
            <animate attributeName="opacity" from=".5" to="1" begin="picture_button.click+8.4s" dur="1s"/>
            <animate attributeName="opacity" from="1" to=".3" begin="picture_button.click+9.4s" dur="1s"/>
            <animate attributeName="opacity" from=".1" to="0" begin="picture_button.click+10.4s" dur="2s"/>
            <animate attributeName="opacity" from="0" to=".4" begin="picture_button.click+12.4s" dur="1s"/>
            </image>
            <image href={require("./images/animate16.png")} x="998" y="739" opacity='.5'>
            <animateMotion path="M0,0 L0,60 L62,30 L0,-60 L0,0" begin="picture_button.click+7.4s" dur="5s"/>
            <animate attributeName="opacity" from=".5" to="1" begin="picture_button.click+7.4s" dur="1s"/>
            <animate attributeName="opacity" from="1" to=".3" begin="picture_button.click+8.4s" dur="1s"/>
            <animate attributeName="opacity" from=".1" to="0" begin="picture_button.click+9.4s" dur="2s"/>
            <animate attributeName="opacity" from="0" to=".4" begin="picture_button.click+11.4s" dur="1s"/>
            <animate attributeName="opacity" from=".4" to=".5" begin="picture_button.click+12.4s" dur="1s"/>
            </image>
            <image href={require("./images/animate17.png")} x="998" y="799">
            <animateMotion path="M0,0 L62,-30 L0,-120 L0,-60 L0,0" begin="picture_button.click+7.4s" dur="5s"/>
            <animate attributeName="opacity" from="1" to=".3" begin="picture_button.click+7.4s" dur="1s"/>
            <animate attributeName="opacity" from=".1" to="0" begin="picture_button.click+8.4s" dur="2s"/>
            <animate attributeName="opacity" from="0" to=".4" begin="picture_button.click+10.4s" dur="1s"/>
            <animate attributeName="opacity" from=".4" to=".5" begin="picture_button.click+11.4s" dur="1s"/>
            <animate attributeName="opacity" from=".5" to="1" begin="picture_button.click+12.4s" dur="1s"/>
            </image>
            <image href={require("./images/animate17.png")} x="1060" y="769" opacity=".3">
            <animateMotion path="M0,0 L-62,-90 L-62,-30 L-62,30 L0,0" begin="picture_button.click+7.4s" dur="5s"/>
            <animate attributeName="opacity" from=".1" to="0" begin="picture_button.click+7.4s" dur="2s"/>
            <animate attributeName="opacity" from="0" to=".4" begin="picture_button.click+9.4s" dur="1s"/>
            <animate attributeName="opacity" from=".4" to=".5" begin="picture_button.click+10.4s" dur="1s"/>
            <animate attributeName="opacity" from=".5" to="1" begin="picture_button.click+11.4s" dur="1s"/>
            <animate attributeName="opacity" from="1" to=".3" begin="picture_button.click+12.4s" dur="1s"/>
            </image>
            <image href={require("./images/animate19.png")} x="1040" y="824">
            <animateMotion path="M0,0 L0,-5 L0,0 L0,-5 L0,0 L0,-5 L0,0 L0,-5" begin="picture_button.click+7.4s" dur="5s"/>
            </image>
            <image href={require("./images/animate18.png")} x="1042" y="804"></image>
            <image href={require("./images/animate21.png")} x="1531" y="210" opacity="1"></image>
            <image href={require("./images/animate20.png")} x="1325" y="594">
            <animateMotion path="M0,0 L0,-335" begin="picture_button.click+7.4s" dur="2.5s" fill="freeze"/>
            </image>
            {/*运动的球图片*/}
            <image id="image1" href={require("./images/animate5.png")} x="856" y="310">
            <animateMotion id="animation-to-check"
                            path="M0,0 L-65,32 L-115,72 L-298,153 L-327,208 L-408,238
                            L-145,387 L-56,500 L-4,532 L51,460 L51,377"
                            fill="remove" begin="picture_button.click" dur="8s"/>
            </image>
            <image href={require("./images/animate11.png")} x="799" y="664"></image>
        </svg>
    )
}