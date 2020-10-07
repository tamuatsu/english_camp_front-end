import React from 'react';
import '../First/First.css';

import spvoice11 from '../../images/sp-voice1-1.png';
import voice11 from '../../images/voice1-1.png';
import voice12 from '../../images/voice1-2.png';
import voice13 from '../../images/voice1-3.png';
import voice14 from '../../images/voice1-4.png';
import voice15 from '../../images/voice1-5.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice1 = ({}) => {
    return (
        <Switch>
            <Route path="/voice1">
                <div>
                    <h1 className="page_title voice1">
                        田中海翔さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 田中海翔さん
                        </div>
                    </section>
                    <section className="voice-section2">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">中1レベルの英語力から<br className="sp"/>スラスラ話せる英語力を獲得！</h2>
                            <img src={voice11} alt="" className="counsel pc" />
                            <img src={spvoice11} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    大学入学後すぐに英語のクラス分けで、初めてTOEICテストを受験して350点を取ってしまいすごく焦りました。<br />
                                    <br />
                                    自分は指定校推薦で青学に入学したのに比べ、一般入試で入学した周りの生徒はTOEICテストで500点、600点取っている生徒ばかりで、そんな中自分だけが350点というスコアを取ってしまい、周りに追いつくためにも英語を勉強しないといけないと思いました。<br />
                                    <br />
                                    法学部なのでそこまで英語力は必要ないと思っていたのですが、同じ学部内にTOEICテスト800、900超えの帰国子女の生徒が普通にいたり、一般受験の生徒の方が指定校の自分よりも遥かに英語力が高く、正直英語に対してかなりコンプレックスを持っていました。<br />
                                    <br />
                                    また、青山学院大学のキャンパスは表参道や六本木の近くにあり、日常的に外国人や英語を話している人を見かけて、「自分も英語を話せるようになりたい！」「英語が話せたらかっこいい！」と思っていました。<br />
                                    <br />
                                    以前、大学の近くのスタバで、外資系企業で働いている日本人の男性と外国人が英語で株について話しているのを見た時に、「本当にかっこいい。自分も将来英語を話せるようになりたい！GLOBALな人材になりたい！」と強く思いました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 02</span><br />
                                    PROGRESS English参加前は、大学で英語をどのように勉強していましたか？
                                </h3>
                                <p>
                                自分は指定校推薦で入学したので受験勉強を全くしていなかったので、中学レベルの単語や文法の勉強をしていました。<br />
                                <br />
                                英語に対してコンプレックスがあったので、当時1日4時間とか勉強したこともあったのですが、正直今思うと集中してなくだらだらやっていたり、完全に独学だったのでとても効率が悪かったと思います（笑）
                                </p>
                                <img src={voice12} alt="" />
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
                                    Speakingに関しては、英語を話すのが恥ずかしかったり、何から勉強をすればいいのか全くわからず、本当に上手くなるのかなと思っていました。<br />
                                    <br />
                                    大学でも英語の授業はあるのですが、自分は法学部なので、映画を見たりする授業やTOEICテストListening,Reading中心の授業しかなかったので、Speakingに関してはほぼ何もしていませんでした。<br />
                                    <br />
                                    あとはとにかくコンプレックスを強く感じていましたね。大学の英語の授業も下の方のクラスだったんですが、その中でも他の生徒とTOEICテストのスコアが100点以上も差があったりして、ぶっちゃけ最初の頃は大学の授業に行くのが本当に苦痛でした。
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
                                    やっぱりSpeakingが苦手でしたね。自分の英語に自信を持つことが出来ませんでした。また、ReadingやListeningでも長文になってくるとインプットした知識が瞬時に出てこなくて、TOEICテストの問題になるとレベルが高すぎて読めないし聞こえないしとても大変でした。<br />
                                    <br />
                                    あの頃の自分はインプットとアウトプットの両立が出来ていなかったと思います。<br />
                                    <br />
                                    また、独学で勉強していたので、どうしたら早く読めるようになるのか、どうしたらListeningが聞こえるようになるのか、英語を話せるようになるのか、わからないままとりあえず勉強していたので、とても効率が悪かったなと思いますし、限界も感じていました。
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
                                    自分でTOEICテストの勉強はしていたのですが、ListeningとReadingだけでSpeakingが出来ないと意味がないと思い、4技能をバランス良く鍛えるために英会話スクールに参加することを考えていました。<br />
                                    <br />
                                    英語を手段として活用して色んな人と関わってみたいと思い、留学なども検討していたため入会しました。<br />
                                    <br />
                                    また、PEには他大学の生徒も沢山いてお互いに刺激し合える環境がとても魅力的に感じました。たまたま自分の出身高校の先輩の白井さんがスタッフをやっていたのも参加を決めた理由の1つでした！ここなら安心だなと思いました（笑）
                                </p>
                                <img src={voice13} alt="" />
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
                                    SpeakingとWritingの課題を毎日提出しないといけなくて、最初は少しきつかったのですが、良い意味で毎日英語をやならなきゃいけない環境に身を置くことになり、英語学習にとてもアクティブになりました。<br />
                                    <br />
                                    レッスンで仲良くなった福田くんという早稲田大学の1つ上の先輩がいたのですが、自分より英語が話せて、しかも理系で大学の勉強もしっかりこなしていて、とても尊敬していたし、自分の憧れでした。<br />
                                    <br />
                                    レッスン終わりに一緒に帰って、英語のことや大学のこと、将来のことについても色々相談に乗ってもらい、目指すべき目標になるような人が近くにいたのはとてもモチベーションアップに繋がりました。<br />
                                    <br />
                                    また、ENGLISH CAMPのレッスンでは、学校の授業のようなテストのための英語ではなく、「こういうシチュエーションではこういう表現を使ったほうが良いよ」と会話ベースの英語の表現や知識を授業で教えてもらうことができたので、実際に英語を使うシチュエーションをイメージしながら楽しく英語の勉強をすることができました。<br />
                                    <br />
                                    原宿で外国人に道を聞かれた時に英語で道案内をしてあげることが出来たときはめちゃくちゃテンションが上がりましたね！
                                </p>
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
                                    英語の勉強量が倍になった気がします！<br />
                                    <br />
                                    入会前も自分で勉強をしていたのですが、集中せずにだらだらやってしまい身になっていなかったのですが、担当者が自分の勉強を管理してくれるので、毎日集中して英語学習に取り組めるようになりました。<br />
                                    <br />
                                    どのようにしたらListeningが伸びるのか？Readingが伸びるのか？などSpeaking以外の具体的な勉強方法も教えてもらったおかげて、同じ勉強時間でも、勉強の質が向上しました。<br />
                                    <br />
                                    Speakingの練習も毎日やっていたおかげで、英語を話す恥ずかしさやためらいも無くなり、普段の生活でも「今日は1日英語だけで会話してみよう」と決めて、大学の留学生やネイティブの先生に自分から英語を話しに行くようになりました。<br />
                                    <br />
                                    また、ただ英語を勉強するのではなく、「何を目標に英語を頑張るのか？」きちんと目的を考えながら学習するようになりました。
                                </p>
                                <img src={voice14} alt="" />
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
                                    教室での外国人講師とのレッスンと担当者の方のチュータリングのおかげで４技能満遍なく向上させることができました！<br />
                                    <br />
                                    Readingはレッスンと家での自主学習で文法の理解が曖昧なところを埋めることができたし、Listeningもレッスンと担当者の方に宿題として出してもらったシャドーウィングを毎日行うことによって、昔は聞き取り辛かった長くて早いスピードのListening問題が、今では自然と理解できるようになりました。<br />
                                    <br />
                                    Writingも英検の過去問を使用したトレーニングを毎日宿題で行い、英語を書くことに慣れたり、構成を考えて英文を作ることが出来るようになりました。<br />
                                    <br />
                                    Speakingはレッスンと宿題で音声日記（今日あったことを英語で話し録音して記録をつけるもの。日記の音声版。）を毎日やっていたおかげで、以前よりも自分の言いたいことが口からスラスラ出てくるようになり、自分のSpeakingにとても自信を持つことができるようになりました！
                                </p>
                                <img src={voice15} alt="" />
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
                                    ENGLISH CAMPに参加したことによって英語を勉強しなければいけない環境に身を置くことができたので、英語の勉強を継続させることは全然苦にならなかったです。<br />
                                    <br />
                                    また、外国人講師の方やスタッフの方々から勉強のコツをわかりやすく丁寧に毎回教えてもらえて、TOEICのスコアは一度も下がらず、目標スコアをしっかり達成することができました。<br />
                                    <br />
                                    他の生徒さんたちも英語と真剣に向き合っていて、目標に向かって必死で勉強しているので、自分もその姿を見てモチベーションを維持することができました。<br />
                                    <br />
                                    英語を本気で勉強するためにENGLISH CAMPに参加して良かったと思っています！「もう英語は苦手じゃない！自分の強みだ！」と胸を張って言えます！
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

export default Voice1;