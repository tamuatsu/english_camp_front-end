import React from 'react';
import './First.css';
import spfirst from '../../images/sp-first.png';
import first from '../../images/first-view.png';
import studio from '../../images/studio-title.png';
import smart from '../../images/smart.png';
import shinjuku from '../../images/shinjuku.png';
import merit1 from '../../images/merit1.png';
import merit2 from '../../images/merit2.png';
import merit3 from '../../images/merit3.png';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';
import aclass from '../../images/a-class.png';
import bclass from '../../images/b-class.png';
import cclass from '../../images/c-class.png';
import reason from '../../images/reason-title.svg';
import role from '../../images/role.png';
import soccer from '../../images/soccer.svg';
import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature2.png';
import feature3 from '../../images/feature3.png';
import reason3 from '../../images/reason3.png';
import reason5 from '../../images/reason5.png';
import bar from '../../images/bar.svg';
import insta from '../../images/insta-title.png';
import instamark from '../../images/insta-mark.png';
import instagram from '../../images/instagram.png';
import instatit from '../../images/sp-insta-title.png';
import Flow from '../Parts/Flow';
import Question from '../Parts/Question';
import Interview from '../Parts/Interview';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const First = ({}) => {
    return (
        <div>
            <div className="pc">
                <img src={first} alt="English campファーストアイコン"/>
            </div>
            <div className="sp">
                <img src={spfirst} alt="English campファーストアイコン"/>
            </div>
            {/* <section className="english">
                <p className="english__sub">What is ENGLISH CAMP？</p>
                <div className="container">
                    <div className="row ju-ce pa30">
                        <img src={smart} alt="English ampスマートフォンアイコン"/>
                    </div>
                </div>
            </section> */}
            <section className="merits">
                <div className="container">
                    <h2 className="center merits__title">
                        <span>
                            世界20億人と繋がれる英語力を身につけ<br />
                            あなたの可能性を最大化
                        </span>
                    </h2>
                    <div className="row spa-be">
                        <div className="merits__merit">
                            <div className="row">
                                <div className="merits__merit__num">
                                    <p className="merits__merit__num__title">メリット</p>
                                    <p className="merits__merit__num--ber seri">01</p>
                                </div>
                                <h3 className="merits__merit__title">多様な価値観に<br />触れることができる</h3>
                            </div>
                            <img src={merit1} alt="English campのメリット1"/>
                            <p className="merits__merit__content">
                                英語を公用語・准公用語として使用している人は約20億人いるとされています。英語が話せるようになると世界中の人と繋がることができ様々な文化や価値観に触れることで新たな発見やアイデアを手に入れることができます。
                            </p>
                        </div>
                        <div className="merits__merit">
                            <div className="row">
                                <div className="merits__merit__num">
                                    <p className="merits__merit__num__title">メリット</p>
                                    <p className="merits__merit__num--ber seri">02</p>
                                </div>
                                <h3 className="merits__merit__title">得られる情報量が10倍</h3>
                            </div>
                            <img src={merit2} alt="English campのメリット2"/>
                            <p className="merits__merit__content">
                            英語で記載されているインターネット上の記事は日本語の記事の約10倍あります。<br />偏った情報だけでなく世界中のリアルな情報の中から、自分に必要な情報をいち早く手に入れることができます。
                            </p>
                        </div>
                        <div className="merits__merit">
                            <div className="row">
                                <div className="merits__merit__num">
                                    <p className="merits__merit__num__title">メリット</p>
                                    <p className="merits__merit__num--ber seri">03</p>
                                </div>
                                <h3 className="merits__merit__title">キャリアアップと<br />年収アップ</h3>
                            </div>
                            <img src={merit3} alt="English campのメリット3"/>
                            <p className="merits__merit__content">
                            英語が話せるようになると世界中で働くことができます。また、グローバル化が進む日本においても英語を話せる人材は重宝されます。様々な仕事で活かすことができ、キャリアアップや年収アップにも繋がります。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason1">
                <div className="container">
                    <img className="mb80 wi90" src={reason} alt="" />
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">1</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            目的に合わせたクラス
                        </h2>
                        <div className="container sp-wi90">
                            <p className="reasons__box__description">
                                ENGLISH CAMPではあなたの<br className="sp"/>「英語を話せるようになりたい目的」に合わせたクラスをご用意しております。<br /><br />アドバイザーがあなたの英語学習の目的と現状レベルに合わせたクラスへご案内します。
                            </p>
                        </div>
                        <div className="row spa-be al-fl-sta">
                            <div className="reasons__box__reason">
                                <img src={cclass} className="h13" className="h13" alt="English ampスマートフォンアイコン"/>
                                <div className="reasons__box__reason__title cclass">
                                    <img src={role} alt="English ampスマートフォンアイコン"/>
                                    <div className="reasons__box__reason__title__content">
                                        <h3>Cクラス</h3>
                                        <p>海外旅行を満喫したい方</p>
                                    </div>
                                </div>
                                <p className="reasons__box__reason__content">
                                    自己紹介から、海外留学中に体験する上で様々なシチュエーションで使用する英会話を学びます。
                                </p>
                            </div>
                            <div className="reasons__box__reason">
                                <img src={bclass} className="h13" alt="English ampスマートフォンアイコン"/>
                                <div className="reasons__box__reason__title bclass">
                                    <img src={role} alt="English ampスマートフォンアイコン"/>
                                    <div className="reasons__box__reason__title__content">
                                        <h3>Bクラス</h3>
                                        <p>短期留学､ワーキングホリデーに<br />挑戦したい方</p>
                                    </div>
                                </div>
                                <p className="reasons__box__reason__content">
                                    友達作りに必要な会話から、身の回りのことや日本についてプレゼンテーションできるようになるための英会話を学びます。
                                </p>
                            </div>
                            <div className="reasons__box__reason">
                                <img src={aclass} className="h13" alt="English ampスマートフォンアイコン"/>
                                <div className="reasons__box__reason__title aclass">
                                    <img src={role} alt="English ampスマートフォンアイコン"/>
                                    <div className="reasons__box__reason__title__content">
                                        <h3>Aクラス</h3>
                                        <p>海外旅行を満喫したい方</p>
                                    </div>
                                </div>
                                <p className="reasons__box__reason__content">
                                    自分の経験や他国との違いについてのプレゼンテーション、ディスカッションに必要な英会話を学びます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason2">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">2</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            英語はスポーツ！<br />ENGLISH CAMP<br />オリジナルカリキュラム
                        </h2>
                        <div className="container sp-wi90">
                            <p className="reasons__box__description">
                                ENGLISH CAMPでは英語は勉強ではなく、<br />
                                英語はスポーツと教えています。<br />
                                その理由は、英語の上達過程とスポーツの上達過程が全く一緒だからです。
                            </p>
                        </div>
                        <div className="reasons__box__steps">
                            <div className="reasons__box__steps__step top">
                                <div className="reasons__box__steps__step__num">
                                    STEP<br />
                                    <span>1</span>
                                </div>
                                <h3>「Input」知識を得る</h3>
                                <p>英語なら会話に必要な単語や文法、発音を学びます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step top odd">
                                <div className="reasons__box__steps__step__num odd">
                                    STEP<br />
                                    <span>2</span>
                                </div>
                                <h3>「Output」実際にやってみる</h3>
                                <p>Step1で「Input」した単語や文法、発音を実際に使って話してみます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step top">
                                <div className="reasons__box__steps__step__num">
                                    STEP<br />
                                    <span>3</span>
                                </div>
                                <h3>「Feedback」指摘を受ける</h3>
                                <p>Step2で「Output」をした時、自分では気が付けない間違いをしている場合があります。外国人講師から指摘を受け、自分の英語の間違いに気が付きます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step top odd">
                                <div className="reasons__box__steps__step__num odd">
                                    STEP<br />
                                    <span>4</span>
                                </div>
                                <h3>「Improve」改善する</h3>
                                <p>Step3で「Feedback」されたことを元に改善していきます。この段階でStep1で「Input」した知識を、「できる」というスキルに変えていきます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step top">
                                <div className="reasons__box__steps__step__num">
                                    STEP<br />
                                    <span>5</span>
                                </div>
                                <h3>「Repeat」繰り返す</h3>
                                <p>次に学ぶべきことをStep1からStep4まで繰り返していきます。</p>
                            </div>
                            <div className="poa pc">
                                <img src={soccer} alt="English ampスマートフォンアイコン"/>
                            </div>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            <span>ENGLISH CAMP<br />カリキュラムの特徴</span>
                        </h2>
                        <div className="row spa-be al-fl-sta">
                            <div className="reasons__box__feature">
                                <img className="pc" src={feature1} alt="English ampスマートフォンアイコン"/>
                                <h3>
                                    適切なフィードバックがもらえる<br className="sp" />英会話レッスン
                                </h3>
                                <img className="sp sp-height200" src={feature1} alt="English ampスマートフォンアイコン"/>
                                <p>
                                    外国人講師が1回50分間のレッスンを行い、発音、文法、言葉のチョイスなど、あなたの英語の問題点を的確にフィードバックします。レッスン終了時には講師からフィードバックシートもお渡しします。<br /><span>※オンラインでの受講も可能です。</span>
                                </p>
                            </div>
                            <img src={bar} className="pc" alt="English ampスマートフォンアイコン"/>
                            <div className="reasons__box__feature">
                                <img className="pc" src={feature2} alt="English ampスマートフォンアイコン"/>
                                <h3>
                                    自宅でできるトレーニング<br className="pc"/>HW
                                </h3>
                                <img className="sp" src={feature2} alt="English ampスマートフォンアイコン"/>
                                <p>
                                    Reading、Listening、Writing、Speaking4技能全てのHWがDAY1〜DAY6まで週6日間分あり、事前に話せるようになってからレッスンを受講します。レッスンでは外国人講師が「発音」「文法」「言葉のチョイス」などを修正します。
                                </p>
                            </div>
                            <img src={bar} className="pc" alt="English ampスマートフォンアイコン"/>
                            <div className="reasons__box__feature">
                                <img className="pc" src={feature3} alt="English ampスマートフォンアイコン"/>
                                <h3>
                                    ロールプレイテスト<br />
                                </h3>
                                <img className="sp" src={feature3} alt="English ampスマートフォンアイコン"/>
                                <br />
                                <p>
                                    学校の様なペーパーテストで暗記したら良いものではなく、一つ一つの会話をマスターしてから次に進むことができます。
                                </p>
                            </div>
                        </div>
                        <div className="sp">
                            <Link to="/plan">
                                <div className="button">
                                    カリキュラム・料金を詳しく見る
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason3">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">3</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            専属アドバイザーがあなたの<br className="sp"/>英語学習を徹底サポート
                        </h2>
                    </div>
                    <div className="reasons__box__adviser">
                        <img src={reason3} alt="English campスマートフォンアイコン"/>
                        <div className="reasons__box__adviser__content">
                            <p>ENGLISH CAMPではTOEIC800点以上、留学経験のある専属アドバイザーが日々の学習スケジュールのアドバイスや管理、不安の解消を行うので挫折することがありません。<br className="pc"/>
                            <br className="pc"/>
                            独学での英語学習は期待した効果も得られず9割挫折します。<br />
                            しかしENGLISH CAMPなら専属アドバイザーが二人三脚であなたの英語学習をサポートすることにより、最後までやり遂げることができます。</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason2 reason4">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">4</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            同じ目標を持った仲間と繋がれる<br />英会話イベント
                        </h2>
                        <div className="container sp-wi90">
                            <p className="reasons__box__description">
                                ENGLISH CAMPでは<br className="sp"/>英会話イベントを開催しています。<br />
                                「英語を話せるようになりたい！」という同じ目標を持った仲間と繋がりを持ち、<br />
                                お互いに切磋琢磨することができます！
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row sliders">
                    <img className="pc" src={slider1} alt="English campスマートフォンアイコン"/>
                    <img src={slider2}  className="wi90" alt="English campスマートフォンアイコン"/>
                    <img className="pc" src={slider3} alt="English campスマートフォンアイコン"/>
                </div>
            </section>
            <section className="reasons reason2 reason5">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">5</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            学習習慣が身につく<br className="sp"/>アフターサポート
                        </h2>
                        <div className="container sp-wi90">
                            <p className="reasons__box__description">
                            ENGLISH CAMPでは<br classNmae="sp"/>3ヶ月間のクラス終了後も、<br className="pc"/>プラスで３ヶ月間、専属アドバイザーがあなたの英語学習を継続サポートします。<br />
                            <br />
                            この期間でしっかり自主学習を習慣化させ、<br />
                            プログラム終了後も自力で英語学習を継続できることを目指します。
                            </p>
                        </div>
                    </div>
                    <img className="sp-mb80 wi90" src={reason5} alt="English campスマートフォンアイコン"/>
                </div>
            </section>
            <Interview />
            <section className="to_parent">
                <div className="container">
                    <h2>保護者の方へ</h2>
                    <Link to="/parent">
                        <div className="button">
                            お子様のENGLISH CAMP<br className="sp" />ご参加について
                        </div>
                    </Link>
                </div>
            </section>
            <Flow />
            <Question />
            <section className="place">
                <img className="sp-wi80" src={studio} alt="English campスマートフォンアイコン"/>
                <div className="row">
                    <div className="place__left">
                        <img src={shinjuku} alt="English campスマートフォンアイコン"/>
                        <div class="place__left__content">
                            <p className="strong">
                                <span>住所</span>
                            </p>
                            <p>
                                東京都新宿区新宿五丁目10番6号<br />近代グループBLD.22号館2階B室
                            </p>
                            <a href="https://goo.gl/maps/6HgXNLS38ptjvtRw5" className="" target="_blank">
                                <div className="google">
                                    Googleマップで見る
                                </div>
                            </a>
                            <p className="strong">
                                <span>開校時間</span>
                            </p>
                            <p>
                                00:00～00:00
                            </p>
                            <Link to="/counseling">
                                <div className="button--inner">
                                    まずは無料カウンセリングに参加
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="place__right">
                        <img src={shinjuku} alt="English campスマートフォンアイコン"/>
                        <div class="place__right__content">
                            <p className="strong">
                                <span>住所</span>
                            </p>
                            <p>
                                愛知県名古屋市<br />
                                ○○○○○○○○○
                            </p>
                            <a href="" className="">
                                <div className="google">
                                    Googleマップで見る
                                </div>
                            </a>
                            <p className="strong">
                                <span>開校時間</span>
                            </p>
                            <p>
                                00:00～00:00
                            </p>
                            <Link to="/counseling">
                                <div className="button--inner">
                                    まずは無料カウンセリングに参加
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instagram">
                <img src={insta} className="sp-wi80 pc" alt="English campスマートフォンアイコン"/>
                <img src={instatit} className="sp-wi80 sp sp-mb30" alt="English campスマートフォンアイコン"/>
                <div className="container">
                    <img className="mt60"  className="sp-wi80" src={instagram} alt="English campスマートフォンアイコン"/>
                    <img className="mt30" src={instamark} alt="English campスマートフォンアイコン"/>
                    <a href="https://www.instagram.com/english_camp_official/" target="_blank">
                        <div className="button--inner">
                            english_camp_official
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default First;