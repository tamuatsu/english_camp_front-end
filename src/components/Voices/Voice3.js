import React from 'react';
import '../First/First.css';

import spvoice31 from '../../images/sp-voice3-1.png';
import voice31 from '../../images/voice3-1.png';
import voice32 from '../../images/voice3-2.png';
import voice33 from '../../images/voice3-3.png';
import voice34 from '../../images/voice3-4.png';
import voice35 from '../../images/voice3-5.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice3 = ({}) => {
    return (
        <Switch>
            <Route path="/voice3">
                <div>
                    <h1 className="page_title voice3">
                        丸山拓海さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 丸山拓海さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">独学の限界を感じて参加し、<br />流暢な英会話力・<br class="sp" />強靭な学習力を獲得！</h2>
                            <img src={voice31} alt="" className="counsel pc" />
                            <img src={spvoice31} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    友達が留学したことがきっかけです！<br />
                                    <br />
                                    大学に入る前は、明治大学なのでキラキラしたキャンパスライフをイメージしていたのですが、実際は理系のキャンパスは生田という田舎にあり毎日駅から10分くらいかけて山を登って登校するし、ちょっと理想と現実が違って理系ってこんな感じなんだとどんよりしていたんです。<br />
                                    <br />
                                    1年生の時は社会経験をしようとバイト漬けの毎日を送っていたんですが、2年生になってからは実験のレポートや課題が毎週課されるようになり、とりあえず課題はやらなきゃと忙しい毎日を過ごしていたんですが、2年生の夏休みの時、高校の時の同級生と遊ぶ機会があったのですが、その友達がカナダに留学して外国人の彼女を作ってきたんですよ。<br />
                                    <br />
                                    その友達の海外生活の話を聞いた時に、自分の知らない世界を知っている感じがしてすごくキラキラして見えて、もともと英語を話せたらかっこいいなと思ってはいたんですが、ちゃんと英語を話せるように勉強したいなと思うようになりました。<br />
                                    <br />
                                    また、1年生の頃に英語のクラス分けでTOEICテストを受けたのですが、てきとうに受けてしまったとはいえ250点を取ってしまって、それで少し焦りを感じました。
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
                                    友達が留学したことがきっかけです！<br />
                                    <br />
                                    大学に入る前は、明治大学なのでキラキラしたキャンパスライフをイメージしていたのですが、実際は理系のキャンパスは生田という田舎にあり毎日駅から10分くらいかけて山を登って登校するし、ちょっと理想と現実が違って理系ってこんな感じなんだとどんよりしていたんです。<br />
                                    <br />
                                    1年生の時は社会経験をしようとバイト漬けの毎日を送っていたんですが、2年生になってからは実験のレポートや課題が毎週課されるようになり、とりあえず課題はやらなきゃと忙しい毎日を過ごしていたんですが、2年生の夏休みの時、高校の時の同級生と遊ぶ機会があったのですが、その友達がカナダに留学して外国人の彼女を作ってきたんですよ。<br />
                                    <br />
                                    その友達の海外生活の話を聞いた時に、自分の知らない世界を知っている感じがしてすごくキラキラして見えて、もともと英語を話せたらかっこいいなと思ってはいたんですが、ちゃんと英語を話せるように勉強したいなと思うようになりました。<br />
                                    <br />
                                    また、1年生の頃に英語のクラス分けでTOEICテストを受けたのですが、てきとうに受けてしまったとはいえ250点を取ってしまって、それで少し焦りを感じました。
                                </p>
                                <img src={voice32} alt="" />
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
                                    大学受験のために高校生の頃にReadingとListeningはけっこうやっていたのですが、Speakingになると全くやってこなかったので正直英語にあまり自信はありませんでした。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 04</span><br />
                                    英語のどのようなところが苦手でしたか？
                                </h3>
                                <p>
                                    １年生の頃に初めてTOEICテストを受けて250点というスコアを取ってしまって、それから危機感を持って自分でTOEICテストを何回か受けたのですが、独学の限界を感じました。<br />
                                    <br />
                                    もちろん自分が怠けてしまっていた部分もあったのですが、2年生の9月に500点を取ったのに、3年生の5月に525点を取ってしまい、時間をかけたのにたった25点しかスコアが上がらず愕然としました。<br />
                                    <br />
                                    特にReadingの長文の勉強を自分で独学していたのに全然伸びなかったです。それで大学以外でちゃんと人に英語を習おうと思ってENGLISH CAMPに出会いました。ENGLISH CAMPには他大学の同学年の生徒も英語を頑張っていて、ここなら自分も頑張れるかなと思いました。<br />
                                    <br />
                                    大学院でも英語を使うため、そろそろ英語を本格的にやらなきゃと心では思っていたものの、怠けてしまって自主的には出来なそうと思っていたので、自分でお金を払って強制させる環境に身を置こうと決心し、入会しました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 05</span><br />
                                    ENGLISH CAMPに参加しようと思った理由を教えてください。
                                </h3>
                                <p>
                                    １年生の頃に初めてTOEICテストを受けて250点というスコアを取ってしまって、それから危機感を持って自分でTOEICテストを何回か受けたのですが、独学の限界を感じました。<br />
                                    <br />
                                    もちろん自分が怠けてしまっていた部分もあったのですが、2年生の9月に500点を取ったのに、3年生の5月に525点を取ってしまい、時間をかけたのにたった25点しかスコアが上がらず愕然としました。<br />
                                    <br />
                                    特にReadingの長文の勉強を自分で独学していたのに全然伸びなかったです。それで大学以外でちゃんと人に英語を習おうと思ってENGLISH CAMPに出会いました。ENGLISH CAMPには他大学の同学年の生徒も英語を頑張っていて、ここなら自分も頑張れるかなと思いました。<br />
                                    <br />
                                    大学院でも英語を使うため、そろそろ英語を本格的にやらなきゃと心では思っていたものの、怠けてしまって自主的には出来なそうと思っていたので、自分でお金を払って強制させる環境に身を置こうと決心し、入会しました。
                                </p>
                                <img src={voice33} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 06</span><br />
                                    ENGLISH CAMPに参加して英語に対するモチベーションはどの様に変化しましたか？
                                </h3>
                                <p>
                                    ENGLISH CAMPでは毎日英語の勉強について報告する日報があり、最初の頃は「ぶっちゃけ日報を毎日送るのが辛かったです(笑)」それでも報告しないと担当の人が連絡してくれて、相談に乗ってくれたり励ましてくれたので続けることが出来ました。<br />
                                    <br />
                                    不思議なもので最初は英語の勉強が辛かったのですが、１、２周間継続していくと「ここまで継続してきたんだからここで止めたくない」と思えるようになってきて、自然と毎日英語を勉強する習慣が身につきました。<br />
                                    <br />
                                    今では英語を勉強しないで寝ると少し不安で眠れないときすらあります（笑）最初の頃は大学の勉強もしながら英語の勉強を毎日やることが大変でしたが、今ではそれが当たり前になり、強制されて良かったと思っています！<br />
                                    <br />
                                    また、ENGLISH CAMPに通っている同世代の大学生の姿を見てとても刺激になりました。普段関わる自分の大学の友達は理系ということもあり英語に対してモチベーションが高くないのですが、PEには様々な大学の様々な学部の人が英語を勉強しに来ていて、そういう意識が高い人と身近に関わることで「自分ももっとやらなきゃ」と英語のモチベーションを維持することができました。
                                </p>
                                <img src={voice34} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 07</span><br />
                                    ENGLISH CAMPに参加して英語学習にどの様な変化がありましたか？
                                </h3>
                                <p>
                                    今まではバイトから帰ってきて寝る前や通学中の電車の中でYouTubeやInstagramを見てだらだら過ごしてしまっていたんですが、通学中のスキマ時間は単語の勉強をして、必ず寝る前に単語を覚えられたか単語テストをしたり、時間の使い方が圧倒的に変わりました。<br />
                                    <br />
                                    単語テストで間違えた単語は、毎日英語で書いている日記に実際に使ってみて、単語とその単語を実際に使用するシチュエーションのイメージを結びつけるようにしています。スタッフの方にもすごく面倒を見てもらっていて、PEのレッスン以外でも「Listeningを上達させるならこのサイトをこうやって使ってみたら良いよ！」と効率的な勉強方法を具体的に教えてもらって実践しています。<br />
                                    <br />
                                    あとはやっぱり、大学の授業と違ってPEは自分でお金を払って受講しているので、「絶対に結果を出したい！」という想いで毎日英語の勉強が出来ています。大学もお金がかかっていることを十分承知なんですが、自分で払っている感覚が無くて、ただ単位を取るために授業を受けていたり、自分の本当の目的とずれた大学生活を送ってしまっていました。<br />
                                    <br />
                                    やっぱり自分の財布からお金を出すと、絶対無駄にしたくないって強く思いますし、お金の大切さも身にしみてわかります。（笑）
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 08</span><br />
                                    ENGLISH CAMPに参加して英語力はどの様に変化しましたか？
                                </h3>
                                <p>
                                    ENGLISH CAMPで外国人講師と英会話レッスンをしていくにつれて、今まであった英語を話すことに対するハードルが無くなりました！<br />
                                    <br />
                                    参加前に比べて自分の英語に自信を持ってどんどん発言していくことができるようになりました。自分の英語の間違えもしっかりと指摘してもらえるので、レッスンを重ねていく毎に自分の英語力が確実にパワーアップしている気がします。<br />
                                    <br />
                                    TOEICテストの勉強に関しても、参加前は「どうせやっても伸びない。」と自信を失っていたのですが、担当者の方から具体的な勉強方法を教わって勉強できているので「やればやるだけ伸びる！」ということが実感することが出来ています。<br />
                                    <br />
                                    まだまだListeningもSpeakingも自分の満足がいくレベルではないのでやることがたくさんありますが、それでも参加して２ヶ月ほどでTOEICスコアが525から680に上がったので、確実にレベルアップは実感できています！
                                </p>
                                <img src={voice35} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd last">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 09</span><br />
                                    ENGLISH CAMPでの6ヶ月間の感想を教えてください。
                                </h3>
                                <p>
                                    将来に対して「このままじゃやばい。」「英語をちゃんと勉強したい！」と思った時にPEに出会えて自分は本当に良かったです！<br />
                                    <br />
                                    独学でもReadingやListeningは勉強できるかもしれないですが、Speakingに関しては実際に外国人講師と英会話をする機会が無ければ自分は絶対に上達しなかったと思います。<br />
                                    <br />
                                    それに自分のように怠けてしまったり、なかなか英語の勉強を継続できない人には多少勉強を強制されるようなPEの環境がとてもあっていると思います。モチベーションが落ちてしまったときもスタッフの方に励ましてもらえたり、ENGLISH CAMPで一緒に勉強している同世代の大学生の姿もとても刺激になりました。<br />
                                    <br />
                                    学校では習わなかった「英語を話すための勉強」を学ぶことが出来たので、これからもっと自分の英語力を磨いていこうと思っています。今後に活かせるとても良い経験になりました！ありがとうございます！
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

export default Voice3;