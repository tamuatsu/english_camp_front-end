import React from 'react';
import '../First/First.css';

import spvoice51 from '../../images/sp-voice5-1.png';
import voice51 from '../../images/voice5-1.png';
import voice52 from '../../images/voice5-2.png';
import voice53 from '../../images/voice5-3.png';
import voice54 from '../../images/voice5-4.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice5 = ({}) => {
    return (
        <Switch>
            <Route path="/voice5">
                <div>
                    <h1 className="page_title voice5">
                        金子賢人さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 金子賢人さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">独学で限界を感じた英会話力を伸ばし<br />ディスカッションできる<br className="sp"/>英会話力を習得</h2>
                            <img src={voice51} alt="" className="counsel pc" />
                            <img src={spvoice51} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    もともと早稲田大学の付属高校出身で高校生活のほとんどは部活動の野球に注いできました。そのため正直、英語に限らず勉強を真剣にやってきませんでした。<br />
                                    <br />
                                    しかし大学に進学後、1年生のはじめにクラス分けのためにTOEICを受けたのですが、自分はそこで340点を取ってしまいました。<br />
                                    <br />
                                    周りの一般入試組は当たり前に600点とか700点を取っていて、900点以上の生徒もざらにいて、一般入試組との学力差をまじまじと感じました。<br />
                                    <br />
                                    「付属の自分とはこんなにも差があるんだ」とちょっと恐かったのを覚えています。<br />
                                    <br />
                                    英語の授業で外国人の先生に当てられるのが本当に嫌で、いざ当てられるとテンパって答えられないですし、なるべく自分が当てられないようにしていました。<br />
                                    <br />
                                    友達と海外旅行に行った時も、全く英語が話せず、Google翻訳に頼ることしかできない自分が本当に嫌で、恥ずかしかったです。<br />
                                    <br />
                                    また、姉がCAをやっていて当たり前に英語を話せるんですが、「こんなのもわからないの？英語できなさすぎでしょ」と、いつも言われてきました。<br />
                                    <br />
                                    そんな中、大学3年生になって就活を意識し始めたときに「自分には野球しか強みがない…何か他の強みがほしい」と思い、英語と向き合う決心をしました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 02</span><br />
                                    ENGLISH CAMP参加前は、大学で英語をどのように勉強していましたか？
                                </h3>
                                <p>
                                    本当に低かったです。（笑）<br />
                                    <br />
                                    受験勉強で英語は勉強していたのですが、大学入学後のに受けたTOEICでは480点を取ってしまい、大学内でも英語ができないクラスに振り分けらてしまいました。<br />
                                    <br />
                                    英語の中でも、やっぱりリスニングが苦手でしたね。その時初めてTOEICを受けたのですが、読まれるスピードが速すぎて全くわからず、勘でマークをすることもあったりすごく難しく感じました。<br />
                                    <br />
                                    大学の英語授業では、日本語も流暢なネイティブの先生が授業をしてくれていましたが、授業では英語がわからなさすぎて、ずっと先生の日本語の説明ばかりを聞いて理解していました。<br />
                                    <br />
                                    今でも恥ずかしいのですが、授業中に自己紹介をする際、「I am Waseda university」と真剣な顔で言って、周りの生徒から爆笑されたのを覚えています。（笑）<br />
                                    <br />
                                    「お前、本当に一般で入学したの！？付属でしょ？（笑）」と笑われてしまいました。その時は顔が真っ赤になるほど恥ずかしかったですし、「やっぱり英語できないんだ…」と強く感じましたね。
                                </p>
                                <img src={voice52} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 03</span><br />
                                    英語に対してどのようなイメージがありましたか？
                                </h3>
                                <p>
                                    1年生のころは大学の英語の授業を受けているだけでした。ネイティブの先生の授業も日本語で何とか理解しているぐらいで、英語の勉強は特にしていませんでした。<br />
                                    <br />
                                    ただ3年生の頃、将来を考えたら「英語はできないとまずいよな…」と感じ、自力でTOEICを独学し始めました。独学の仕方は、とりあえずTOEICの参考書を買ってひたすら問題を解くやり方です。<br />
                                    <br />
                                    受験勉強のときに数学がそれで凄く伸びたので、英語も同じようにやれば上達するのかなと思ったのですが、結局リーディングしか伸びませんでした。<br />
                                    <br />
                                    やはりリスニングとスピーキングはずっと苦手なままで「自分で頑張ってもダメなのかな…？」と独学の限界を感じてしまいましたね。（汗）
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 04</span><br />
                                    ENGLISH CAMPに参加しようと思った理由を教えてください。
                                </h3>
                                <p>
                                    英会話スクールを真剣に考え始めたのは、大学3年生の夏からです。<br />
                                    <br />
                                    東京大学の大学院に行くことを決意して英語の勉強も進めたんですが、大学院入試で必要なTOEFL ITPを受けたときに難しすぎて全く太刀打ちできず、ここで本当に変わらないといけないなと危機感を持ちました。<br />
                                    <br />
                                    それにやっぱり、せっかく英語を勉強するならちゃんとスピーキングもできるようになって、国際学会で研究者とディスカッションをしたいと思い、英会話に関しての情報を探し始めました。<br />
                                    <br />
                                    そんなときにENGLISH CAMPと出会いました。自分は英会話を全くやったことがなかったので不安はありました。<br />
                                    <br />
                                    ただスクールの説明の際に、スピーキング能力が向上すればリーディングもリスニングも向上する話があり、それがとても理にかなっていると感じました。<br />
                                    <br />
                                    今のまま一人で勉強していても限界があると思っていたので、その話を聞いて参加を決意しました。<br />
                                    <br />
                                    また担当者の方が自分の話をすごくしっかりと聞いてくれて、自分の将来について自分以上に考えてくれたこともすごく嬉しく、ここなら頑張れそうだと思いました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 05</span><br />
                                    ENGLISH CAMPに参加して英語学習にどの様な変化がありましたか？
                                </h3>
                                <p>
                                    もともと自分は英語のテストやTOEICの前だけしか英語を勉強していなかったのですが、毎日継続してコツコツ英語の勉強をすることができるようになりました。<br />
                                    <br />
                                    もちろん理系なので日々の課題に追われたりして、英語のモチベーションが下がった時もあったのですが、担当者の方もついてくれていたので、何度も励まされました。<br />
                                    <br />
                                    2019年末にあったTOEICを受ける直前は、大学の研究とバイトでつめつめで本当に忙しい時期で、朝から研究とバイトで22時に帰宅し、ようやく夜24時から英語に取り掛かる日もありました。<br />
                                    <br />
                                    そんな時でも頑張れたのは、担当者の方が本気で僕の将来のことを考えてくれて、真剣に見てくれていたからです。<br />
                                    <br />
                                    レッスン中に、また自分よりも話せている生徒さんを見て、とても悔しく感じたり、大学以外の環境でも刺激をもらえた経験は本当に大きかったです。<br />
                                    <br />
                                    カナダ人講師のミミともすごく仲良くなって、実はレッスン後、貪欲に日本語の勉強をしている姿を知り、自分ももっと頑張らなきゃという想いになりましたね。
                                </p>
                                <img src={voice53} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 06</span><br />
                                    ENGLISH ENGLISH CAMPに参加して英語力はどの様に変化しましたか？
                                </h3>
                                <p>
                                    何より驚いたのは、TOEICで850点を取ることができたことでした。<br />
                                    <br />
                                    家族から「金子家で一番英語ができるんじゃない？」と褒められたり、友達から「金子はやっぱすげーな！」と言ってもらえたのが本当に嬉しかったです。<br />
                                    <br />
                                    特にリスニングの力が伸びたのは、自分にとって一番の変化だと感じてます。<br />
                                    <br />
                                    いつも寝る前に英語のラジオを聞いているのですが、ある時から急に何を言っているのかわかるようになった時、リスニング力の変化を感じ始めました。<br />
                                    <br />
                                    聞き方も、今までは聞こえた英語を日本語に変換していたんですが、それもなくなり、英語を聞いて、英語のまま理解する感覚に変化しました。<br />
                                    <br />
                                    きっとこれは、担当者の方に教わった「イメージ化」のトレーニングが効いたんだろうなと感じてます。<br />
                                    <br />
                                    スピーキングでも、以前はいざ話そうとすると口から出てこなかった英語が、今ではスラスラ口から出てきて、自然とスムーズに会話できるようになりました。<br />
                                    <br />
                                    周りから笑われるほどリスニングもスピーキングも苦手だった僕でも、こんなに変われるんだって心底驚いたし、自分に自信が持てました。
                                </p>
                                <img src={voice54} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd last">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 07</span><br />
                                    ENGLISH CAMPでの6ヶ月間の感想を教えてください。
                                </h3>
                                <p>
                                    とにかく楽しかったです！単純に大学院入試のために始めた英語の勉強でしたが、自分の中では英語を学ぶ目的が変わりました。<br />
                                    <br />
                                    英語を話しているとワクワクが止まらなくなったし、普段の自分よりも積極的になれて、自分の変化を感じたのが一番大きかったです。<br />
                                    <br />
                                    外国人講師の人に話しかけて「awesome…!（マジで…！）」なんて話したり、仲間と英語で雑談したり、英語を学ぼうとしている人にアドバイスしたり。<br />
                                    <br />
                                    単純にTOEICの勉強をするだけだったら感じられない、自分自身の変化を感じられたのは、ENGLISH CAMPに参加して英語を学んだからこそだと思います。<br />
                                    <br />
                                    もしこのインタビューを見て、あなたが少しでも英語を話せるようになりたいと思うなら、勇気を振り絞って挑戦してみてほしいです。<br />
                                    <br />
                                    僕も東京大学の大学院に進み、JAXAが派遣支援する国際会議に参加して英語でディスカッションしたり、他にもいくつかの国際学会に挑戦していきます。<br />
                                    <br />
                                    火星飛行機の研究を形にして、世界初の研究に打ち込んでいきます。きっとここで学ぶ英語は、人生を変える、大きなきっかけになると感じています。<br />
                                    <br />
                                    これからもここで学んだ英語を武器にして、前に進みます。本当に今までありがとうございました！
                                </p>
                            </div>
                        </div>
                    </section>
                    <Interview />
                </div>
            </Route>
        </Switch>
    );
}

export default Voice5