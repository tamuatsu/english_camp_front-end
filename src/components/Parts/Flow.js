
import React from 'react';
import '../First/First.css';
import dotline from '../../images/dotline.svg';
import flow1 from '../../images/flow1.svg';
import flow2 from '../../images/flow2.svg';
import flow3 from '../../images/flow3.svg';
import flow from '../../images/flow-title.png';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
    
const Flow = ({onRouteChange}) => {
    return (
        <section className="flow">
                <div className="container">
                    <h2>
                        <img src={flow} alt="English campスマートフォンアイコン"/>
                    </h2>
                    <div className="row spa-be">
                        <div className="poa pc">
                            <img src={dotline} alt="" />
                        </div>
                        <div className="flow__box">
                            <img src={flow1} alt="English campスマートフォンアイコン"/>
                            <h3>無料カウンセリング・<br />プログラム内容のご説明</h3>
                            <p>
                                英語学習の目的や現状のお悩みについてヒアリングさせて頂き、ENGLISH CAMPのプログラム説明をさせて頂きます。<br />
                                <br />
                                <span>※オンラインでも受けることができます。</span>
                            </p>
                        </div>
                        <div className="flow__box">
                            <img src={flow2} alt="English campスマートフォンアイコン"/>
                            <h3>レベルチェックTEST・<br />無料体験レッスン</h3>
                            <p>
                            ENGLISH CAMPにご興味を持って頂いた方は、現状の英語レベルを測定するレベルチェックTEST（20分）外国人講師との無料体験レッスン（50分）を受けて頂けます。<br /><br />
                            <span>※オンラインでも受けることが可能です。</span>
                            </p>
                        </div>
                        <div className="flow__box">
                            <img src={flow3} alt="English campスマートフォンアイコン"/>
                            <h3>エントリー<br />（お申し込み）</h3>
                            <p>
                            参加希望の方は本申込みを行います。<br />
                            本申込みとご入金が確定後、担当アドバイザーと一緒にプログラム開始の準備に入ります。
                            </p>
                        </div>
                    </div>
                    <Link to="/voice3">
                        <div className="button">
                            まずは無料カウンセリングに参加
                        </div>
                    </Link>
                </div>
            </section>
    );
}

export default Flow;