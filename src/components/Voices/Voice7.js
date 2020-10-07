import React from 'react';
import '../First/First.css';

import spvoice71 from '../../images/sp-voice7-1.png';
import voice71 from '../../images/voice7-1.png';
import voice72 from '../../images/voice7-2.png';
import voice73 from '../../images/voice7-3.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import parentinterview from '../../images/parent-interview-title.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice7 = ({}) => {
    return (
        <Switch>
            <Route path="/voice7">
                <div>
                    <h1 className="page_title voice7">
                        石井駿介さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 石井駿介さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">大手の英会話スクールでの<br className="sp"/>挫折経験を乗り越え、<br />海外勤務でも活かせる<br className="sp"/>英会話力を獲得！</h2>
                            <img src={voice71} alt="" className="counsel pc" />
                            <img src={spvoice71} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    僕が英語を勉強しようと思ったきっかけは、海外でキャビンアテンダントとして働く姉への憧れが大きいです。<br />
                                    <br />
                                    ずっとスポーツに打ち込んできた僕と違って、姉は国際系の高校に通い、そこからアメリカの大学に進学して、卒業後、外資系の航空会社でキャビンアテンダントとして働いています。<br />
                                    <br />
                                    そんな姉から「海外の違う文化の人と話すことでいろんな価値観や世界観が得られた」という話を聞いて、自分もそういう経験をしてみたいと強く思いました。<br />
                                    <br />
                                    また、英語が話せたり、挑戦している姉の姿がとてもかっこよく思えて、自分も英語に挑戦したいと思いました。
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
                                    英語がペラペラな姉と違い、僕は高校までずっとテニスに打ち込んできて、そこからスポーツに関わる仕事がしたいと思い、スポーツ医療の資格が取れる専門学校に進学しました。<br />
                                    <br />
                                    そんな僕なので、学歴は無くて頭は良くないし、英語なんて全くできませんでした。専門学校でも英語の授業は皆無で、専門学校以外の環境で英語を身につけようと思い、高校3年生の終わりから大手の英会話スクールに通いました。<br />
                                    <br />
                                    外国人と会話することは楽しかったのですが、週に1回だけレッスンを受けるだけで、それ以外で自分で英語を勉強することも無かったので、正直英会話力は全然上がりませんでした。<br />
                                    <br />
                                    当時は「本当に英語って話せるようになのかな？」と思っていて、自分が姉のように英語をペラペラに話せるイメージが全く持つことができませんでした。それで結局、専門学校で医療系の国家資格の勉強がとても忙しくなり、その英会話スクールも辞めてしまいました。<br />
                                    <br />
                                    その後、国家資格の勉強が落ち着いた専門学校3年生の春にENGLISH CAMPに出会いました。<br />
                                    <br />
                                    最初は、英語に全く自信が無かったので「また上達しないんじゃないか？」と思っていたし、専門学校もわりと忙しいため、両立できるのか不安でした。<br />
                                    <br />
                                    それでもスタッフの方と話をしていく中で、ENGLISH CAMPの理念に共感して、参加を決めました。<br />
                                    <br />
                                    他の英会話スクールは「英語を勉強しよう」という事だけを押してくるのですが、ENGLISH CAMPでは、「まず英語を上達させるための自分作りからやっていこう。」と言ってもらえたことが、一番印象に残っています。<br />
                                    <br />
                                    そもそもの考え方から、英語の具体的な学習方法、レッスンの効果的な使い方、自宅での勉強方法も教えてもらって、英語の勉強の仕方がわからなかったり、結局継続できなくて英語を諦めてきた自分でも「変われるかもしれない。」と強く思い、参加を決心しました。<br />
                                    <br />
                                    結局どこのスクールでも結果が出るかは自分次第だとはわかっていたんですが、ここなら自分自身を変えることができて、成長できると思えたからですね。
                                </p>
                                <img src={voice72} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 03</span><br />
                                    ENGLISH CAMPに参加する前に不安はありましたか？
                                </h3>
                                <p>
                                    正直めちゃくちゃありました。（笑）<br />
                                    <br />
                                    当時のENGLISH CAMPは大手の英会話スクールと違って名前も聞いたことも無かったですし、あるのはパンフレットだけでした。（笑）<br />
                                    <br />
                                    ちゃんとしたホームページも完成していないって聞いて、実際、ベンチャー企業？みたいな感じだったので、「騙されるんじゃないのか？」っていう不安が凄くありました。（笑）
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 04</span><br />
                                    ENGLISH CAMPに参加する際、親御さんはどんな心配をしていましたか？
                                </h3>
                                <p>
                                    親も同じことを心配していました。「本当にその会社大丈夫なの？」って何度も聞かれましたね。（笑）<br />
                                    <br />
                                    それでも体験レッスンに行って、実際にレッスンを受けてみたり、すでに通っている他の生徒さんに話を聞いたり、スタッフの人にも何回も話を聞いたりして、自分は通ってみたいと思ったのですべて親に伝えました。<br />
                                    <br />
                                    最終的には、僕の親は「自分で考えて決断したんだったら良いよ。」と通うことを了承してくれました。「まぁそれで騙されたなら、そのくらいの金額なら勉強代だと思って自分で稼ぎなさい。」とも言われました。（笑）
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 05</span><br />
                                    ENGLISH CAMPに参加して英語力はどの様に変化しましたか？
                                </h3>
                                <p>
                                    自分の考えや意見をちゃんと英語で伝えられるようになりました！本当に自分でも凄く上達したと実感しています。<br />
                                    <br />
                                    元々は外国人の人とはコミュニケーションが取れなかったり、自分の意見も言葉に詰まってしまい、単語の羅列でしか伝えられなかったのですが、今ではすらすら英語だけで会話ができるようになりました。<br />
                                    <br />
                                    最近ENGLISH CAMPに参加した生徒さんたちにも「何でそんなに英語話せるんですか！？しゅんすけさんめちゃくちゃ英語話せますね！」って言われてめちゃくちゃ嬉しかったです。（笑）<br />
                                    <br />
                                    僕も参加したての頃は同じような状態だったのに、今では本当に自分でもびっくりしています。<br />
                                    <br />
                                    この前も自宅で、久しぶりに日本に帰ってきた姉が突然英語で話しかけてきて、たぶん30分くらいずっと英語だけで会話してたんですが「しゅんすけ、いつの間にそんなに英語を話せるようになったの！？」ってびっくりされちゃいました。（笑）<br />
                                    <br />
                                    僕は今、姉のように海外で働くことを目指しているんですが、「今のしゅんすけの英語力なら全然海外で働くのも通用するよ！」と姉に言ってもらえて、本当に本当に嬉しかったです。
                                </p>
                                <img src={voice73} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 06</span><br />
                                    ENGLISH CAMPでの6ヶ月間の感想を教えてください。
                                </h3>
                                <p>
                                    まず、一緒に英語を勉強したり切磋琢磨できる友達がたくさんできました！実は僕は最初、英会話に通うならマンツーマンが良いと思ってたんです。<br />
                                    <br />
                                    英語を話すのも恥ずかしいし、失敗するのが凄く怖かったからです。それにENGLISH CAMPには高学歴の人もたくさんいて、自分に自信を持てませんでした。<br />
                                    <br />
                                    でも、同世代の人と一緒にグループレッスンをしたり、イベントに参加していく中で一緒に英語を勉強する仲の良い友達ができて、お互いにとても刺激になりました。<br />
                                    <br />
                                    僕の専門学校では英語を勉強している人はほとんどいなかったので、そんな自分にとってこの環境はとてもありがたいものでした。<br />
                                    <br />
                                    外国人講師やスタッフの方も歳が近かったり、いい意味で距離が近くて、帰り道で一緒に電車に乗っている時にいろんな海外の経験の話してくれたり、モチベーションが下った時もいつも相談にのってくれて、本当に助かりました。<br />
                                    <br />
                                    そして何より、ENGLISH CAMPで英語を勉強して、自分に自信を持つことができました！<br />
                                    <br />
                                    参加前は自分が英語を話せるようになるイメージが持てず、姉のように英語を使って海外で働くなんて、現実味がなく夢のまた夢だと思っていたんですが、今は海外で働くことがリアルに考えられるくらい、自分に自信が付きました。<br />
                                    <br />
                                    今は、「自分にできるかな？」という不安よりも「自分の英語を試してみたい！」と海外で働くことに挑戦することが楽しみになりました。<br />
                                    <br />
                                    実際僕は、今は整体の仕事をしているんですが、仕事をしながらお金を貯めて、2021年の5月頃からオーストラリアでワーキングホリデーに1年間行く予定です。<br />
                                    <br />
                                    そこでマッサージの仕事をしながら海外のアスリートと関わって勉強することが今の僕の目標です。
                                </p>
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
                                    ENGLISH CAMPへの参加を許可してくれて本当にありがとう。本当に成長できて、自分でもENGLISH CAMPに参加して本当に良かったと思ってる。<br />
                                    <br />
                                    当時は専門学校で忙しくてあまりバイトができなかったので、お金も建て替えてくれて本当にありがとう。なんか恥ずかしいですね。（笑）<br />
                                    <br />
                                    僕、親とはけっこう仲良くて何でも話すので、ホームページのこのインタビューじゃなくても、ENGLISH CAMPに通ってるときから、毎回レッスンから帰ってくるたびに伝えてましたよ。（笑）<br />
                                    <br />
                                    挑戦させてもらえて、本当に親には感謝しています。お金も今社会人になってちゃんと返しています！
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section parent-interview-section odd">
                        <div className="container sp-wi90">
                            <img className="mb60 pc" src={parentinterview} alt="" />
                            <img className="mb60 sp" src={spinterview} alt="" />
                            <p className="description">
                                保護者の方にもインタビューをさせていただき、<br className="pc"/>
                                当時の心境や保護者の方が感じていた正直な胸の内についても聞かせていただきました。
                            </p>
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    お子様がENGLISH CAMPに入会するのに不安はありましたか？
                                </h3>
                                <p>
                                    正直、ありました。駿介が入会したいと言った当時は、このようなサイトもなく情報もなくて、正直な話、実態がよくわからなかったです。（笑）<br />
                                    <br />
                                    なので、本当に信用できるスクールなのかな？というのは、何度も考えてましたね。
                                </p>
                                <h3 className="voice-section2__container__title">
                                    <span>Question 02</span><br />
                                    なぜ、入会を許可して頂けたのでしょうか？
                                </h3>
                                <p>
                                    やはり、駿介の熱量ですかね。実際、体験レッスンから帰ってきたときの彼の顔が本当に活き活きとしていて、どんなレッスンだったのか、どんな勉強を教えてもらったのか、教室の雰囲気が和気あいあいだけど真剣だったことなど、本当に楽しかったんだなーというのが伝わってくるぐらい、嬉しそうだったんです。<br />
                                    <br />
                                    駿介を担当してくださった担当コーチの方と話した内容も話してくれて、本当に私にも相談したことないぐらいの将来の相談とかを聞いてもらっていて、的確なアドバイスをもらったんだなというのがわかりました。<br />
                                    <br />
                                    その話を聞いていたら、それだけここで英語を学びたいんだと強く感じられたので、反対する理由はありませんでした。<br />
                                    <br />
                                    ただし、やはり最後の最後まで不安だったので、支払った費用は人生の勉強代として考えなさいということもきちんと伝えました。（本当に失礼な話ですが、詐欺の可能性も捨てきれないと、やはり疑ってしまっていたので）<br />
                                    <br />
                                    ですが、人生の勉強代としても許せる範囲でしたし、もし良くなかったと感じたらやめさせようとは考えていました。
                                </p>
                                <h3 className="voice-section2__container__title">
                                    <span>Question 03</span><br />
                                    入会後、何か変化を感じることはありましたか？
                                </h3>
                                <p>
                                    本当に多くの変化を感じる瞬間がありました。友達もたくさんできたようで、毎回楽しく通っているのがわかりましたし、入会をさせて頂いてから、家でもよく勉強してました。<br />
                                    <br />
                                    もちろん何より、きちんと成果が表れていることで、きちんと勉強できてるんだなと実感できましたし、英語を本当に身に着けたいんだなと本人の意思を再確認できました。<br />
                                    <br />
                                    ちょうどENGLISH CAMPを卒業する頃、実際に海外で働いている姉と、英語で流暢に会話をして、お互いに楽しそうに笑い合ってるのを実際に聞いたときには、彼の上達ぶりに本当に驚きました。
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

export default Voice7