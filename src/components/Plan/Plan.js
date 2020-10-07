
import React from 'react';
import '../First/First.css';
import price from '../../images/price-title.png';
import reason2 from '../../images/reason2.png';
import classes from '../../images/classes.png';
import support from '../../images/support.png';
import spsupport from '../../images/sp-support.png';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';
import lesson4 from '../../images/lesson4.png';
import aclass from '../../images/a-class.png';
import bclass from '../../images/b-class.png';
import cclass from '../../images/c-class.png';
import reason from '../../images/reason-title.svg';
import role from '../../images/role.png';
import hw from '../../images/hw.png';
import splessons from '../../images/sp-lessons.png';
import soccer from '../../images/soccer.svg';
import lessons from '../../images/lessons.png';
import reason3 from '../../images/reason3.png';
import reason6 from '../../images/reason6.png';
import reason7 from '../../images/reason7.png';
import edu from '../../images/education-title.png';
import spedu from '../../images/sp-plan-title.png';
import compare from '../../images/compare.png';
import long from '../../images/long.png';
import splong from '../../images/splong.png';
import Flow from '../Parts/Flow';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
    
const Plan = ({onRouteChange}) => {
    return (
        <Switch>
        <Route path="/plan">
        <div className="plan-page">
            <h1 className="page_title plan">
                カリキュラム・料金
            </h1>
            <section className="breadcrumbs">
                <div className="container">
                    TOP ＞ カリキュラム・料金
                </div>
            </section>
            <section className="reasons educa">
                <div className="container">
                    <img class="pc mb40" src={edu} alt="" />
                    <img class="sp mb40" src={spedu} alt="" />
                    <div className="reasons__box">
                        <div className="container sp-wi90">
                            <p className="reasons__box__description">
                                ENGLISH CAMPでは英語は勉強ではなく、英語はスポーツと教えています。<br />
                                その理由は、英語の上達過程とスポーツの上達過程が全く一緒だからです。
                            </p>
                        </div>
                        <h2 className="reasons__box__sub-title mb4">
                            英語はスポーツ！<br />ENGLISH CAMP<br className="sp" />オリジナルカリキュラム
                        </h2>
                        <div className="reasons__box__steps">
                            <div className="reasons__box__steps__step">
                                <div className="reasons__box__steps__step__num">
                                    STEP<br />
                                    <span>1</span>
                                </div>
                                <h3>「Input」知識を得る</h3>
                                <p>英語なら会話に必要な単語や文法、発音を学びます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step odd">
                                <div className="reasons__box__steps__step__num odd">
                                    STEP<br />
                                    <span>2</span>
                                </div>
                                <h3>「Output」実際にやってみる</h3>
                                <p>Step1で「Input」した単語や文法、発音を実際に使って話してみます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step">
                                <div className="reasons__box__steps__step__num">
                                    STEP<br />
                                    <span>3</span>
                                </div>
                                <h3>「Feedback」指摘を受ける</h3>
                                <p>Step2で「Output」をした時、自分では気が付けない間違いをしている場合があります。外国人講師から指摘を受け、自分の英語の間違いに気が付きます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step odd">
                                <div className="reasons__box__steps__step__num odd">
                                    STEP<br />
                                    <span>4</span>
                                </div>
                                <h3>「Improve」改善する</h3>
                                <p>Step3で「Feedback」されたことを元に改善していきます。この段階でStep1で「Input」した知識を、「できる」というスキルに変えていきます。</p>
                            </div>
                            <div className="triangle"></div>
                            <div className="reasons__box__steps__step">
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
                    </div>
                </div>
            </section>
            <section className="reasons">
                <div className="container">
                    <img className="mb80" src={reason} alt="" />
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
                                ENGLISH CAMPではあなたの「英語を話せるようになりたい目的」に合わせたクラスをご用意しております。<br className="pc"/>アドバイザーがあなたの英語学習の目的と現状レベルに合わせたクラスへご案内します。
                            </p>
                        </div>
                        <div className="row spa-be al-fl-sta">
                            <div className="reasons__box__reason">
                                <img className="h13" src={cclass} alt="English ampスマートフォンアイコン"/>
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
                                <img className="h13" src={bclass} alt="English ampスマートフォンアイコン"/>
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
                                <img className="h13" src={aclass} alt="English ampスマートフォンアイコン"/>
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
            <section className="reasons">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">2</p>
                        </div>
                        <h2 className="reasons__box__sub-title mb4">
                            適切なフィードバックが<br className="sp" />もらえる英会話レッスン
                        </h2>
                        <img src={reason2} alt="" className="mb5 wi90"/>
                        <div className="overflowX">
                            <img src={classes} alt="" className="mb3 wi120"/>
                        </div>
                        <div className="container sp-wi90">
                            <p className="reasons__box__description left">
                            レッスンは各クラスの３ヶ月間の目標達成のために１ヶ月毎に段階に合わせたテーマが設定されており、週１回、月４回のペースで進んでいきます。<br />
                            <br />
                            １回50分間で行い、レッスン中に外国人講師が、発音、文法、言葉のチョイスなど、あなたの英語の問題点をフィードバックします。<br />
                            <br />
                            そしてレッスン終了時にフィードバックシートをお渡しします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons">
                <div className="container">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">3</p>
                        </div>
                        <h2 className="reasons__box__sub-title spmb30">
                            自宅でできるトレーニングHW
                        </h2>
                    </div>
                    <div className="reasons__box__adviser">
                        <div className="container sp-wi90">
                            <div className="row spa-be">
                                <img className="reasons__box__adviser--left heighauto" src={hw} alt="" />
                                <div className="reasons__box__adviser--right">
                                    <p>
                                        トレーニングHWは週1回のレッスンに向けて、Day1からDay6までの6日間分、1日30分〜1時間でできる、Reading、Listening、Writing、Speakingの4技能全てのトレーニングが設定されています。
                                    </p>
                                    <img className="pc" src={lessons} alt="" />
                                    <p className="pc">
                                        週6でこのトレーニングを積んでアウトプットの練習をして、事前にレッスンに必要な英会話を話せるようにします。<br /><br />
                                        そして、トレーニングしてきたことをレッスンで発揮し、外国人講師に直接フィードバックをもらい、自分の英会話の問題点を確認し、修正していきます。
                                    </p>
                                </div>
                            </div>
                            <img className="sp ato" src={splessons} alt="" />
                            <p className="sp left-sp pabb60">
                                週6でこのトレーニングを積んでアウトプットの練習をして、事前にレッスンに必要な英会話を話せるようにします。<br />
                                <br />
                                そして、トレーニングしてきたことをレッスンで発揮し、外国人講師に直接フィードバックをもらい、自分の英会話の問題点を確認し、修正していきます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason2">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">4</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            ロールプレイテスト
                        </h2>
                        <p className="reasons__box__description">
                            ENGLISH CAMPにはレッスンを4回受けるごとにロールプレイTESTがあります。
                        </p>
                        <img src={lesson4} alt="English campスマートフォンアイコン"/>
                        <p className="reasons__box__description left">
                            このロールプレイTESTは、ただの暗記をすれば解けるペーパー形式のTESTではなく、4回分のレッスンで習得した英会話をちゃんと話せるのか測定するために、外国人講師と実戦形式で行います。<br />
                            <br />
                            ロールプレイTESTに合格すれば次のレッスンへ進むことができ、不合格なら再テストを行います。<br />
                            <br />
                            できないままレッスンが進むのではなく、一つ一つの話せるようになってから次のレッスンへ進みます。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons reason5">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">5</p>
                        </div>
                        <h2 className="reasons__box__sub-title sp-mb30">
                            専属アドバイザーが<br />あなたの英語学習を徹底サポート
                        </h2>
                        <img src={reason3} alt="English campスマートフォンアイコン"/>
                        <p className="reasons__box__description left">
                            学習をしっかり継続していくために、ENGLISH CAMPでは参加者一人一人に専属アドバイザーが付きます。<br />
                            アドバイザーは部活で言うコーチの役割を果たします。<br />
                            <br />
                            TOEIC800点以上、留学経験のある専属アドバイザーが日々の学習スケジュールの管理やアドバイス、不安の解消を行い、あなたの英語学習をサポートします。<br />
                            <br />
                            週に1回ミーティングを行い、トレーニングHWの進捗確認、スケジューリング、英語学習の疑問点の解決も一緒に行います。<br />
                            また、毎日チャットアプリでHWの提出を行ってもらい、そちらをチェックします。<br />
                            <br />
                            1人で継続することが難しくても、アドバイザーと二人三脚で英語学習を行うことで英語学習で分からないこともその都度が解決しながら、最後まで諦めずにプログラムをやりとげることができます。
                        </p>
                        <img className="pc" src={support} alt="English campスマートフォンアイコン"/>
                        <img className="sp mt30" src={spsupport} alt="English campスマートフォンアイコン"/>
                        <p className="reasons__box__description left">
                            週に1回ミーティングを行い、トレーニングHWの進捗確認、スケジューリング、英語学習の疑問点の解決も一緒に行います。<br /><br />
                            また、毎日チャットアプリでHWの提出を行ってもらい、そちらをチェックします。<br /><br />
                            1人で継続することが難しくても、アドバイザーと二人三脚で英語学習を行うことで、英語学習で分からないこともその都度が解決しながら、最後まで諦めずにプログラムをやりとげることができます。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons reason2">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">6</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            オリジナル学習サポート教材
                        </h2>
                        <p className="">
                            ENGLISH CAMPでは
                            参加者の学習をサポートするための
                            オリジナル学習サポート教材があります。
                        </p>
                        <img src={reason6} alt="English campスマートフォンアイコン"/>
                        <div className="reasons__box__description--home left">
                            <h3>Start up FILE<br className="sp"/><span>（英語学習を計画的に実践していくためのワークブック）</span></h3>
                            <h4 className="sp">（英語学習を計画的に<br className="sp" />実践していくためのワークブック）</h4>
                            <p>目標設定、自主学習のHWと学習スケジュール決定のための資料及びワーク集、オリジナルバインダー</p>
                            <h3>Skill up TEXTBOOK<br className="sp"/><span>（英会話上達に必要な考え方と具体的な学習方法が収録されたテキストブック）</span></h3>
                            <h4 className="sp">（英会話上達に必要な考え方と具体的な学習方法が収録されたテキストブック）</h4>
                            <p>英会話を習得するためのマインドセット、第二言語習得研究を元にした英会話上達方法、及び学習方法の解説、シチュエーション別日常会話で使える単語・フレーズ・スラング集</p>
                            <h3>Stage up USB CARD<br className="sp"/><span>（Skill up TEXTBOOKの内容の解説動画が収録されたUSBカード）</span></h3>
                            <h4 className="sp">（Skill up TEXTBOOKの内容の解説動画が収録されたUSBカード）</h4>
                            <p>PCで閲覧、ダウンロード可能。</p>
                            <h3 className="border">TOEICテスト対策教材</h3>
                            <p>TOEICテストの解説＋Partごとの学習方法</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons reason2">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">7</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            学習習慣が身につく<br className="sp" />アフターサポート
                        </h2>
                        <p className="reasons__box__description">
                            ENGLISH CAMPでは3ヶ月間のクラス終了後も、<br className="pc"/>プラスで3ヶ月間、アドバイザーがついてあなたの英語学習をサポートします。
                        </p>
                        <img src={reason7} alt="English campスマートフォンアイコン"/>
                        <p className="reasons__box__description left">
                            アフターサポートでは、英会話学習かTOEIC学習かを選択してもらい、3ヶ月後の目標設定を一緒に行ったのち、あなたに合わせたトレーニングHWを設定します。<br />
                            <br />
                            そして、週1回のMTも3ヶ月間継続して行います。<br />
                            海外留学やワーキングホリデー、就活に必要な英会話力、TOEIC学習をサポートしていきます。<br />
                            <br />
                            この期間でしっかり自主学習を習慣化させ、プログラム終了後も自力で英語学習を継続できることを目指します。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons reason2">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <div className="reasons__box__title">
                            <p className="reasons__box__title--name">選ばれる理由</p>
                            <p className="reasons__box__title--num">8</p>
                        </div>
                        <h2 className="reasons__box__sub-title">
                            同じ目標を持った仲間と<br className="sp" />繋がれる英会話イベント
                        </h2>
                        <p className="reasons__box__description">
                            ENGLISH CAMPではオフライン、オンラインで英会話のイベント、アクティビティを行っています。<br className="pc"/><br className="pc"/>オフラインでは、月に１回、東京スタジオ、名古屋スタジオで、英会話イベントが実施されます。<br />
                            <br />
                            参加者さん同士での英語ディスカッションイベント、<br className="pc" />オールイングリッシュでの海外グルメのクッキングイベント<br className="pc" />外国人留学生に英語で日本語を教える会など<br className="pc" />実践的な英語を使ったユニークなイベントが開催されます。
                        </p>
                    </div>
                </div>
                <div className="row sliders">
                    <img className="pc" src={slider1} alt="English campスマートフォンアイコン"/>
                    <img src={slider2} alt="English campスマートフォンアイコン"/>
                    <img className="pc" src={slider3} alt="English campスマートフォンアイコン"/>
                </div>
                <div className="container sp-wi90">
                    <p className="reasons__box__description left">
                        オンラインでは、公式インスタグラムでのインスタLIVEや、参加者さん同士での英会話アクティビティなども開催しています。<br />
                        <br />
                        「英語を話せるようになりたい！」という同じ目標を持った仲間とオフラインでもオンラインでも繋がりを持ち、英語学習をお互いに切磋琢磨することができます。<br />
                        ENGLISH CAMPで知り合った仲間同士でプログラム終了後も一緒に勉強をしたり、一緒に海外旅行をしたりしています。
                    </p>
                </div>
            </section>
            <section className="interview">
                <div className="container">
                    <h2>
                        <img src={price} alt="English campスマートフォンアイコン"/>
                    </h2>
                    <div className="price-box">
                        <div className="container">
                            <h3 className="price-box__title">
                                <span>参加料金</span>
                            </h3>
                            <p className="price-box__price">
                                300,000 <span>円（税別）</span>
                            </p>
                            <h3 className="price-box__title mt60">
                            <span>内容</span>
                            </h3>
                            <div className="row ju-ce">
                                <div className="price-box__lists">
                                    <p className="price-box__lists__list">クラス分けテスト／初回</p>
                                    <p className="price-box__lists__list">各クラスレッスン／50分✕12回（週1回）</p>
                                    <p className="price-box__lists__list">フリーカンバセーションレッスン／50分✕6回（2週に1回）</p>
                                    <p className="price-box__lists__list">終了テスト／3回</p>
                                    <p className="price-box__lists__list">アドバイザーによる学習サポート</p>
                                    <p className="price-box__lists__list">各種教材</p>
                                    <p className="price-box__lists__list">イベント・アクティビティ参加資格</p>
                                    <img className="pc" src={long} alt="" />
                                    <img className="sp" src={splong} alt="" />
                                    <p className="price-box__lists__list--desc">※クラスアップの場合は別途参加費がかかります。</p>
                                </div>
                            </div>
                        </div>
                        <div className="comparebox">
                            <h3 className="comparebox__title">一般的な英会話スクールとの比較</h3>
                            <div className="overflowX">
                                <img className="wi120" src={compare} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Flow />
        </div>
        </Route>
        </Switch>
    );
}

export default Plan;