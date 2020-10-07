import React from 'react';
import '../First/First.css';

import spvoice61 from '../../images/sp-voice6-1.png';
import voice61 from '../../images/voice6-1.png';
import voice62 from '../../images/voice6-2.png';
import voice63 from '../../images/voice6-3.png';
import voice64 from '../../images/voice6-4.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice6 = ({}) => {
    return (
        <Switch>
            <Route path="/voice6">
                <div>
                    <h1 className="page_title voice6">
                        中川さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 中川さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">独学で限界を感じた英会話力を伸ばし<br />ディスカッションできる<br className="sp"/>英会話力を習得</h2>
                            <img src={voice61} alt="" className="counsel pc" />
                            <img src={spvoice61} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                自分は元々２年生の専門学校に通っていたのですが、就職する際のことを考えた時に４年生の大学に編入するべきだと考え、編入試験に英語の科目があり、それで英語を勉強しようと思いました。<br />
                                <br />
                                専門学校の英語の先生の授業が面白く、ただ編入試験のために英語の勉強をするのではなく、自分も英語を話せるようになりたいと思うようになりました。
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
                                    正直、正しい英語の勉強の仕方がわからなかったので、とりあえず好きなドラマを英語で観たり、TOEICの教材に目を通していました。家から大学までが片道２時間かかるので、通学時間を使って勉強していました。
                                </p>
                                <img src={voice62} alt="" />
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
                                    最初は英語を話せるようになりたくて英語の勉強をしていたのに、気がついたら「就活のための単なるTOEICのスコア上げの勉強」をしてしまっていて、当初の目的とずれてしまいました。<br />
                                    <br />
                                    自分からやりたいと思って始めたのに就活のために、やらなきゃという義務感に変わってしまって途中から英語学習がつまらなくなってしまいました。<br />
                                    <br />
                                    それでも義務感でコツコツやっていたらTOEICテストで675点を取れたんですが、結局英語は話せるようになっていないまま、このスコアはたまたま取れたもので、本当に自分はこんな実力があるのかなと不安でした。<br />
                                    <br />
                                    それからは、650点取れれば就活で使える最低限度のラインにはいるだろうと思い、就活に専念するため英語学習はストップしていました。
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
                                    ４年になり、就職活動をしていく中で、トヨタの社長が「終身雇用は難しい」と発言したニュースを見ました。内定をもらったからといって人生が決まるわけではなく、将来的に自分の個のスキルを身につけていかないといけないと考えるようになりました。<br />
                                    <br />
                                    そして、色々調べていくうちに優秀な人ほど海外進出する現状を知り、そもそも自分はなぜ日本で就職したいのかを考えたのですが、結局自分が日本人だからという理由しか見つかりませんでした。<br />
                                    <br />
                                    それで、もっと世界の情報を知りたい、将来的に自分の選択肢を広げたいという思いから、世界公用語の英語を身につける必要性を強く感じるようになりました。<br />
                                    <br />
                                    一応自分も内定を頂いて、就職活動が終わっていたのですが、周りの友達が就活後に遊んでいる中、自分は学費を自分で支払っていたため、学生生活を無駄にしたくない思いが強かったです。就職活動が終わった４年時の後期を将来の自分の選択肢を広げるための時間に当て、英語というスキルを身につけたいと思いました。<br />
                                    <br />
                                    そんな時にたまたまENGLISH CAMPでインターンをしていた友達のじゅんや君から話を聞きました。じゅんや君はTOEICも800点以上で説得力もあったし、小学校からの知り合いで信用できる人だったので、そんな彼からの勧めでENGLISH CAMPに参加を決めました。
                                </p>
                                <img src={voice63} alt="" />
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
                                    今までは独学でインプット中心の学習をしていましたが、ENGLISH CAMPに参加してからは外国人の先生とのレッスンもあり、実際に学んだ英語を話してアウトプットする事が多くなりました。<br />
                                    <br />
                                    レッスン以外の時間でも、海外のドラマや映画を見てわからない単語やフレーズが出て来た時には自分で調べてみたり、口ずさんでみたり、自然とアウトプットするようになりました。<br />
                                    <br />
                                    ENGLISH CAMPで一緒にレッスンを受けている生徒さんたちも、僕は４年生で彼らは２、３年生で年下の方が多かったですが、みんなスピーキングのレベルや英語に対する意識が高く、とても刺激になりました。<br />
                                    <br />
                                    レッスンを通して、また「英語を話せるようになりたい」という気持ちが蘇ってきて、テストのためにやっていた勉強とは違い、英語学習が楽しくなりました！<br />
                                    <br />
                                    また、自分は就活後も自動車免許を取るために講習に参加したり、編入生なので他の人よりも取らなければいけない単位数も多く、正直学校の課題やバイトも忙しくて大変だったんですが、それでも「最後までやりきる」という習慣が身につきました。<br />
                                    <br />
                                    内定先のインターンが始まったり、TOEICスコアが停滞して落ち込んだ時もあったんですが、スタッフの人のおかげで継続することができました。ENGLISH CAMPでは毎日LINEのグループに宿題を提出して、そこで自分の英語学習をスタッフの人が見てサポートしてくれます。<br />
                                    <br />
                                    辛くて挫折しそうな時期もあったけど、誰かが見てくれているという状況で、期待に答えたいと思い頑張ることができました。<br />
                                    <br />
                                    英語に限らず何事にも言えますが、自分は継続が１番大切だと思っていて、その習慣が身についたのはすごく良かったと思っています。
                                </p>
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
                                    １番変化があったのはスピーキングとリスニングです！<br />
                                    <br />
                                    今までは外国人が何を言っているのか全くわかりませんでしたが、徐々にスピーキングでは音声変化を意識するようになりました。発音をネイティブに近づけて話すようになり、発音が綺麗だねと言われるようになりました。<br />
                                    <br />
                                    英単語をただ並べただけの片言の英会話だったのが、今では流暢に話せるようになり、自分のスピーキングに自信を持つことができるようになりました。<br />
                                    <br />
                                    リスニングもかなり向上して、今では海外ドラマや映画を観ている時に、ほとんどの単語が聞き取れるようになり、意味も理解できるようになりました。<br />
                                    <br />
                                    TOEICは４ヶ月目で795点まで上がりました。本当は目標の800点を取って卒業したかったのですが、コロナウイルスの影響でTOEICテストが受けられなくて、そこだけとても悔しいです。<br />
                                    <br />
                                    ４月から仕事が始まるので、落ち着いたらまたTOEICを受けて、必ず800点は取ろうと思っています。それでも自分がTOEIC795点を取れたのはとても自信になりました！
                                </p>
                                <img src={voice64} alt="" />
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
                                    何かをこつこつ努力したり、伸び悩んでも諦めすに努力して解決したり、そんな部活のような体験を英語学習を通して経験しました。自分とも向き合う機会が多くなりましたし、周りの人にも協力してもらって自分の目標達成へ走ることができた半年間は本当に楽しかったです。<br />
                                    <br />
                                    きっとこういう経験は仕事でも活かされると思うので、就職前の大学４年生でENGLISH CAMPに参加して本当に良かったです。<br />
                                    <br />
                                    ENGLISH CAMPのイベントでは、クリスマスパーティーが１番楽しかったです！その時がちょうど自分がENGLISH CAMPに参加して３ヶ月目で、自分でも英語力の伸びを感じていました。<br />
                                    <br />
                                    そんな中で他の生徒さんたちと英語でたくさん話したり、ゲームをしたり、いろんな英語の表現を教え合ったりとかして、自分の成長も実感でき、同じ目標を持った仲間と交流できたのが本当に楽しかったです。<br />
                                    <br />
                                    大学生は時間がたくさんありますが、遊びだけでなく、将来のために何かを頑張るという経験ができたことが、自分がENGLISH CAMPに参加して一番良かったことです。<br />
                                    <br />
                                    頑張ることの尊さを部活以来で初めて再確認できました。頑張ることによって疎遠になった人もいたけど、逆に周りに頑張っている人と接する機会が増えて、他人の努力に気がついたり、頑張っている人の言葉や人間力の違いにも気がつくことができるようになりました。<br />
                                    <br />
                                    毎日少しずつでも前に進み、英語を通して目標達成に向けて挑戦できて本当に良かったです！
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

export default Voice6