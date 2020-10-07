
import React from 'react';
import '../First/First.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
    
const SpecialCommercialCode = ({onRouteChange}) => {
    return (
        <Switch>
            <Route path="/specialcommercialcode">
                <div>
                    <h1 className="page_title regulation-title">
                        特定商取引法に基づく表記
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container">
                            TOP ＞ 特定商取引法に基づく表記
                        </div>
                    </section>
                    <section className="reasons company">
                        <div className="container sp-wi90">
                            <h2 className="company__title">特定商取引法に基づく表記</h2>
                            <p className="arial company__sub-title"><span>REGULATION</span></p>
                            <div className="company__box">
                                <h3 className="company__box__title">販売事業者名</h3>
                                <p className="company__box__desc">株式会社PROGRESS</p>
                                <h3 className="company__box__title">住所</h3>
                                <p className="company__box__desc">東京都新宿区新宿五丁目10番6号　近代グループBLD.22号館2階B室</p>
                                <h3 className="company__box__title">問い合わせ先</h3>
                                <p className="company__box__desc">電話番号 : 03-5369-6472<br />メールアドレス : backoffice@progress-gr.com</p>
                                <h3 className="company__box__title">お支払い方法</h3>
                                <p className="company__box__desc">現金持参 ･ 銀行振込 ･ クレジットカード</p>
                                <h3 className="company__box__title">役務の内容</h3>
                                <p className="company__box__desc">教材購入及び受講契約書及び規約に記載</p>
                                <h3 className="company__box__title">商品の内容</h3>
                                <p className="company__box__desc">教材購入及び受講契約書及び規約に記載</p>
                                <h3 className="company__box__title">商品の引渡し方法</h3>
                                <p className="company__box__desc">手渡し、もしくは郵送（郵送の場合の送料540円は会員負担）</p>
                                <h3 className="company__box__title">役務提供期間と商品の引渡時期</h3>
                                <p className="company__box__desc">契約が成立した時点でサービスの提供を開始させていただきます。<br />商品の引き渡しは契約が成立した時点から10日以内 で行います。</p>
                                <h3 className="company__box__title">不良品 ･ 返品について</h3>
                                <p className="company__box__desc">不具合や損傷のある商品は、原則として8日以内であれば同じ商品との交換を承っております。</p>
                                <h3 className="company__box__title">表現 ･ 及び商品に関する注意書き</h3>
                                <p className="company__box__desc">必ずしも利益や効果を保証したものではございません。</p>
                                <h3 className="company__box__title">免許 ･ 資格について</h3>
                                <p className="company__box__desc">免許等が必要な商品は、販売はしておりません。</p>
                                <h3 className="company__box__title">役務内容に関する注意書き</h3>
                                <p className="company__box__desc">本講座の内容は、お客様の利益やお客様の希望する結果を保証するものではございません。</p>
                            </div>
                        </div>
                    </section>
                </div>
            </Route>
        </Switch>
    );
}

export default SpecialCommercialCode;